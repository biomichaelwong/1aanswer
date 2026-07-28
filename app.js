/* ═══════════════════════════════════════════════════════
   DSE Biology · Paper 1A Answer Finder — logic
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var yearSel = $('year'), qSel = $('qno'),
      prevBtn = $('prevBtn'), nextBtn = $('nextBtn'),
      counter = $('counter'), warn = $('warn'),
      result  = $('result'), qLabel = $('qLabel'),
      tile    = $('tile'),   ansLetter = $('ansLetter'),
      gFill   = $('gFill'),  pctText = $('pctText'),
      diffPill= $('diffPill'), diffNote = $('diffNote'),
      concept = $('concept'), optsBox = $('opts'),
      acc     = $('acc'), accBtn = $('accBtn'), accHint = $('accHint'),
      shareBtn= $('shareBtn'), toastEl = $('toast');

  var CIRC = 2 * Math.PI * 52;

  /* ---------- guard: is the database there? ---------- */
  if (typeof DATA !== 'object' || DATA === null || !Object.keys(DATA).length) {
    warn.hidden = false;
    yearSel.disabled = qSel.disabled = prevBtn.disabled = nextBtn.disabled = true;
    revealAll();
    return;
  }

  var years = Object.keys(DATA).sort(function (a, b) { return b.localeCompare(a); });
  var qList = [];

  /* ---------- populate years ---------- */
  years.forEach(function (y) {
    var o = document.createElement('option');
    o.value = y; o.textContent = y;
    yearSel.appendChild(o);
  });

  function fillQuestions(y, keep) {
    qList = Object.keys(DATA[y]).map(Number)
              .filter(function (n) { return !isNaN(n); })
              .sort(function (a, b) { return a - b; });
    qSel.innerHTML = '';
    qList.forEach(function (n) {
      var o = document.createElement('option');
      o.value = n; o.textContent = 'Question ' + n;
      qSel.appendChild(o);
    });
    if (keep !== null && qList.indexOf(Number(keep)) > -1) qSel.value = keep;
  }

  /* ---------- render ---------- */
  function render(scroll) {
    var y = yearSel.value, n = Number(qSel.value), q = DATA[y] && DATA[y][n];
    if (!q) return;

    result.hidden = false;
    qLabel.textContent = y + ' · Paper 1A · Question ' + n;

    /* answer tile */
    ansLetter.textContent = q.ans;
    tile.classList.remove('flip');
    void tile.offsetWidth;
    tile.classList.add('flip');

    /* correct rate */
    if (q.pct === null || q.pct === undefined) {
      pctText.textContent = '—';
      gFill.style.strokeDashoffset = CIRC;
      diffPill.textContent = 'Not published';
      diffPill.removeAttribute('data-l');
      diffNote.textContent = 'No official correct rate was released for this question.';
    } else {
      var p = Math.round(q.pct * 100);
      pctText.textContent = p + '%';
      gFill.style.strokeDashoffset = CIRC;
      requestAnimationFrame(function () {
        gFill.style.strokeDashoffset = CIRC * (1 - p / 100);
      });
      var lv = p >= 70 ? 'easy' : p >= 50 ? 'mid' : 'hard';
      diffPill.setAttribute('data-l', lv);
      diffPill.textContent = lv === 'easy' ? 'Well answered'
                           : lv === 'mid'  ? 'Moderately difficult'
                           :                 'Challenging';
      diffNote.textContent = lv === 'easy'
        ? 'About ' + p + ' in every 100 candidates chose the correct option.'
        : lv === 'mid'
        ? 'Only ' + p + '% were correct — roughly half the cohort slipped here.'
        : 'Just ' + p + '% were correct. A classic trap — read the explanations closely.';
    }

    concept.textContent = q.concept || '';

    /* options */
    optsBox.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach(function (L) {
      var txt = q.opts && q.opts[L];
      if (!txt) return;
      var ok = (L === q.ans);
      var d = document.createElement('div');
      d.className = 'opt' + (ok ? ' ok' : '');
      d.innerHTML = '<div class="opt-head"><span class="chip">' + L + '</span>' +
                    '<span class="status">' + (ok ? 'Correct answer' : 'Incorrect') +
                    '</span></div><p></p>';
      d.querySelector('p').textContent = txt;
      optsBox.appendChild(d);
    });

    closeAcc();
    popIn();

    /* nav state */
    var i = qList.indexOf(n);
    prevBtn.disabled = (i <= 0);
    nextBtn.disabled = (i === qList.length - 1);
    counter.textContent = 'Question ' + n + ' of ' + qList[qList.length - 1];

    localStorage.setItem('bio1a', y + '|' + n);
    history.replaceState(null, '', '#' + y + '-' + n);

    if (scroll) {
      var top = result.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  function popIn() {
    var cards = result.querySelectorAll('.pop');
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('in');
      void cards[i].offsetWidth;
      cards[i].classList.add('in');
    }
  }

  /* ---------- accordion ---------- */
  function closeAcc() {
    acc.classList.remove('open');
    accBtn.setAttribute('aria-expanded', 'false');
    accHint.textContent = 'Tap to reveal all four explanations';
  }
  accBtn.addEventListener('click', function () {
    var open = acc.classList.toggle('open');
    accBtn.setAttribute('aria-expanded', String(open));
    accHint.textContent = open ? 'Tap to hide' : 'Tap to reveal all four explanations';
  });

  /* ---------- prev / next ---------- */
  function step(d) {
    var i = qList.indexOf(Number(qSel.value)) + d;
    if (i >= 0 && i < qList.length) { qSel.value = qList[i]; render(true); }
  }
  prevBtn.addEventListener('click', function () { step(-1); });
  nextBtn.addEventListener('click', function () { step(1); });

  /* ---------- selects (no Enter needed) ---------- */
  yearSel.addEventListener('change', function () {
    fillQuestions(yearSel.value, null);
    render(true);
  });
  qSel.addEventListener('change', function () { render(true); });

  /* ---------- share ---------- */
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(function () { toastEl.classList.remove('show'); }, 2100);
  }
  shareBtn.addEventListener('click', function () {
    var y = yearSel.value, n = qSel.value;
    var payload = {
      title: 'DSE Biology · Paper 1A',
      text: y + ' Paper 1A · Question ' + n + ' — answer ' + DATA[y][n].ans,
      url: location.href
    };
    if (navigator.share) {
      navigator.share(payload).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(location.href)
        .then(function () { toast('Link copied'); })
        .catch(function () {});
    }
  });

  /* ---------- keyboard (iPad Magic Keyboard) ---------- */
  document.addEventListener('keydown', function (e) {
    var t = e.target.tagName;
    if (t === 'SELECT' || t === 'INPUT') return;
    if (e.key === 'ArrowRight') { step(1);  e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { step(-1); e.preventDefault(); }
    if (e.key === 'Enter' || e.key === ' ') {
      if (t !== 'BUTTON') { accBtn.click(); e.preventDefault(); }
    }
  });

  /* ---------- scroll reveal ---------- */
  function revealAll() {
    var els = document.querySelectorAll('.reveal');
    for (var i = 0; i < els.length; i++) els[i].classList.add('in');
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else { revealAll(); }

  /* ---------- restore state ---------- */
  var y0 = years[0], n0 = null;
  var m = (location.hash || '').match(/^#(\d{4})-(\d+)$/);
  var saved = (localStorage.getItem('bio1a') || '').split('|');
  if (m && DATA[m[1]] && DATA[m[1]][m[2]]) { y0 = m[1]; n0 = m[2]; }
  else if (DATA[saved[0]] && DATA[saved[0]][saved[1]]) { y0 = saved[0]; n0 = saved[1]; }

  yearSel.value = y0;
  fillQuestions(y0, n0);
  render(false);
})();
