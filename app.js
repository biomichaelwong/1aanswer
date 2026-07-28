(function () {
  const yearBar = document.getElementById('yearBar');
  const qGrid   = document.getElementById('qGrid');
  const result  = document.getElementById('result');
  const empty   = document.getElementById('empty');

  const YEARS = Object.keys(DATA).sort();
  let state = { year: null, q: null };

  /* ---------- Build year segmented control ---------- */
  YEARS.forEach(y => {
    const b = document.createElement('button');
    b.className = 'seg-btn';
    b.textContent = y;
    b.onclick = () => selectYear(y);
    b.dataset.year = y;
    yearBar.appendChild(b);
  });

  function selectYear(year) {
    state.year = year;
    state.q = null;
    [...yearBar.children].forEach(b =>
      b.classList.toggle('active', b.dataset.year === year));
    buildQuestions(year);
    hideResult();
    syncHash();
  }

  /* ---------- Build question grid ---------- */
  function buildQuestions(year) {
    qGrid.innerHTML = '';
    Object.keys(DATA[year])
      .map(Number).sort((a, b) => a - b)
      .forEach(n => {
        const b = document.createElement('button');
        b.className = 'q-btn';
        b.textContent = n;
        b.dataset.q = n;
        b.onclick = () => selectQuestion(n);
        qGrid.appendChild(b);
      });
  }

  function selectQuestion(n) {
    state.q = n;
    [...qGrid.children].forEach(b =>
      b.classList.toggle('active', Number(b.dataset.q) === n));
    render();
    syncHash();
  }

  /* ---------- Render answer ---------- */
  function render() {
    const item = DATA[state.year][state.q];
    if (!item) return;

    const pctLine = (item.pct === null || item.pct === undefined)
      ? `<p class="pct">Correct rate: not available</p>`
      : `<p class="pct">Correct rate: <strong>${Math.round(item.pct * 100)}%</strong> of candidates</p>
         <div class="bar"><i style="width:${Math.round(item.pct * 100)}%"></i></div>`;

    const letters = ['A', 'B', 'C', 'D'];
    const optHTML = letters.map(L => {
      const text = item.opts[L];
      if (!text) return '';
      const ok = (L === item.ans);
      return `
        <div class="opt ${ok ? 'correct' : ''}">
          <div class="opt-letter">${L}</div>
          <div class="opt-body">
            <span class="opt-tag">${ok ? 'Correct' : 'Incorrect'}</span>
            <p class="opt-text">${text}</p>
          </div>
        </div>`;
    }).join('');

    result.innerHTML = `
      <div class="answer-card">
        <div class="ans-top">
          <div class="ans-badge">${item.ans}</div>
          <div class="ans-meta">
            <p class="kicker">${state.year} · Paper 1A</p>
            <h2>Question ${state.q}</h2>
            ${pctLine}
          </div>
        </div>

        <div class="concept">
          <h3>Core concept</h3>
          <p>${item.concept}</p>
        </div>

        <button class="toggle" id="toggleBtn">
          <span id="toggleTxt">Show explanation for every option</span>
          <span class="chev">▼</span>
        </button>

        <div class="options" id="optWrap">${optHTML}</div>
      </div>`;

    result.classList.remove('hidden');
    empty.style.display = 'none';

    const btn = document.getElementById('toggleBtn');
    const wrap = document.getElementById('optWrap');
    const txt = document.getElementById('toggleTxt');
    btn.onclick = () => {
      const open = wrap.classList.toggle('open');
      btn.classList.toggle('open', open);
      txt.textContent = open
        ? 'Hide explanation'
        : 'Show explanation for every option';
    };
  }

  function hideResult() {
    result.classList.add('hidden');
    result.innerHTML = '';
    empty.style.display = 'block';
  }

  /* ---------- Shareable link (#2013-12) ---------- */
  function syncHash() {
    history.replaceState(null, '',
      state.q ? `#${state.year}-${state.q}` : (state.year ? `#${state.year}` : ' '));
  }

  function loadFromHash() {
    const m = location.hash.replace('#', '').split('-');
    const y = m[0], q = Number(m[1]);
    if (DATA[y]) {
      selectYear(y);
      if (DATA[y][q]) selectQuestion(q);
      return true;
    }
    return false;
  }

  if (!loadFromHash()) selectYear(YEARS[YEARS.length - 1]);
})();
