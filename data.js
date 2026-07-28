/* =========================================================
   HKDSE Biology Paper 1A — answer key, correct rate,
   core concept and option-by-option explanations.
   ========================================================= */
const DATA = {

/* ==================== 2012 ==================== */
"2012": {
1:{ans:"D",pct:0.73,
concept:`Number of mitochondria in a tissue reflects its rate of ATP consumption, which is high when a tissue carries out active transport.`,
opts:{
A:`A (wall of an air sac) — wrong. Gas exchange across the alveolar wall occurs by diffusion down a concentration gradient, which does not require ATP, so few mitochondria are needed.`,
B:`B (wall of a capillary) — wrong. Capillary walls are a single layer of squamous epithelium specialised for diffusion of substances between blood and tissue fluid; this is a passive process requiring minimal ATP.`,
C:`C (inner wall of a lymph vessel) — wrong. Lymph flows passively along the vessel (aided by body movement and valves), with no active transport occurring across its lining, so mitochondrial density is low.`,
D:`D (inner wall of small intestine) — correct. The epithelial lining of the villi absorbs digested food (e.g. glucose, amino acids) against a concentration gradient via active transport, which requires large amounts of ATP. Hence these epithelial cells contain numerous mitochondria.`}},

2:{ans:"D",pct:0.33,
concept:`Glucose produced in photosynthesis is a starting material for building structural, storage, and (indirectly) nitrogen-containing organic compounds in plants.`,
opts:{
A:`A — wrong because it omits at least one of the three products that genuinely depend on glucose from photosynthesis (either omitting starch, cellulose, or protein).`,
B:`B — wrong because it omits at least one of the three products that genuinely depend on glucose from photosynthesis (either omitting starch, cellulose, or protein).`,
C:`C — wrong because it omits at least one of the three products that genuinely depend on glucose from photosynthesis (either omitting starch, cellulose, or protein).`,
D:`D — correct. All three are valid: glucose molecules condense to form cellulose (cell wall component) and starch (storage polysaccharide) directly. Glucose is also required for protein formation because it is respired to release energy and provide carbon skeletons, which combine with nitrate ions absorbed from the soil to synthesise amino acids, which are then linked to form proteins.`}},

3:{ans:"A",pct:0.68,
concept:`The ascent of water in the xylem of trees is mainly explained by the transpiration pull (cohesion-tension theory).`,
opts:{
A:`A (loss of water from leaves) — correct. Evaporation of water from mesophyll cells into the sub-stomatal air space (transpiration) lowers the water potential in the leaf, creating a “pull” that is transmitted down the continuous column of water in the xylem due to cohesion between water molecules. This tension is the major driving force for water ascent, especially in tall trees.`,
B:`B (absorption of water in roots) — wrong. This generates root pressure, which contributes only a minor, limited push and cannot account for water rising to the top of tall trees.`,
C:`C (thickness of tree trunks) — wrong. Trunk thickness is not a mechanism for water transport; it provides mechanical support, unrelated to the physics of water ascent.`,
D:`D (diameter of xylem vessels) — wrong. Vessel diameter affects the rate/efficiency of water flow but is not the cause of ascent; it does not generate the force needed to move water upward.`}},

4:{ans:"B",pct:0.63,
concept:`Directionality of nerve impulse transmission within a neurone follows a fixed structural sequence: dendrite → cell body → axon → axon terminal.`,
opts:{
A:`A (axon → cell body → dendrites) — wrong. This reverses the actual direction of transmission.`,
B:`B (dendrites → cell body → axon) — correct. Dendrites receive stimuli/impulses (often from another neurone at a synapse) and conduct them toward the cell body, from which the impulse then travels along the axon toward the axon terminals for onward transmission.`,
C:`C (cell body → axon → dendrites) — wrong. Impulses do not travel from the axon back to dendrites; this sequence is structurally and functionally incorrect.`,
D:`D (dendrites → axon → cell body) — wrong. This omits the correct order; the cell body must be traversed before the axon, not after.`}},

5:{ans:"D",pct:0.61,
concept:`Chemical synaptic transmission (via neurotransmitter release) occurs at every junction between successive neurones in a reflex arc, and also at the neuromuscular junction between a motor neurone and an effector muscle.`,
opts:{
A:`A — wrong because it excludes at least one of the three genuine synaptic junctions, when in fact chemical transmission occurs at all three.`,
B:`B — wrong because it excludes at least one of the three genuine synaptic junctions, when in fact chemical transmission occurs at all three.`,
C:`C — wrong because it excludes at least one of the three genuine synaptic junctions, when in fact chemical transmission occurs at all three.`,
D:`D — correct. All three junctions listed involve synapses: (1) sensory neurone → interneurone (synapse in the spinal cord), (2) interneurone → motor neurone (synapse in the spinal cord), (3) motor neurone → muscle (neuromuscular junction). In each case, an impulse arriving at the presynaptic membrane triggers release of a neurotransmitter (chemical) that diffuses across the synaptic cleft to trigger a new impulse (or muscle contraction) postsynaptically.`}},

6:{ans:"A",pct:0.79,
concept:`Different regions of the brain have distinct functions. The cerebellum coordinates muscular movements, posture, and balance.`,
opts:{
A:`A (muscular movements during dancing) — correct. Dancing requires precise coordination of many skeletal muscles and maintenance of balance/posture, which is the specific role of the cerebellum.`,
B:`B (breathing movements during sleeping) — wrong. Breathing is an involuntary rhythmic activity controlled by the medulla oblongata, not the cerebellum.`,
C:`C (secretion of digestive juices when hungry) — wrong. This is regulated by the hypothalamus (via the autonomic nervous system and hormonal control), not the cerebellum.`,
D:`D (withdrawal of hand from a hot object) — wrong. This is a spinal reflex, mediated by a reflex arc through the spinal cord, bypassing conscious brain coordination entirely.`}},

7:{ans:"A",pct:0.76,
concept:`Different connective tissues serve different roles at a movable (synovial) joint: ligaments join bone to bone, tendons join muscle to bone, and cartilage cushions joint surfaces.`,
opts:{
A:`A (ligament) — correct. Ligaments are tough, slightly elastic connective tissue that hold bones together at a joint, preventing dislocation while permitting movement.`,
B:`B (cartilage) — wrong. Cartilage covers the ends of bones at a joint to reduce friction and absorb shock; it does not hold bones together.`,
C:`C (muscle) — wrong. Muscle generates the force for movement but is not the tissue directly connecting one bone to another.`,
D:`D (tendon) — wrong. Tendons attach muscle to bone, allowing muscle contraction to move the bone; they do not connect bone to bone.`}},

8:{ans:"A",pct:0.81,
concept:`The human eyeball has three layers, each with distinct properties: the outer sclera (tough, white, protective), the middle choroid (pigmented, vascular), and the inner retina (light-sensitive).`,
opts:{
A:`A (P) — correct. P represents the sclera, the tough, white fibrous outer coat that maintains the eyeball's shape and protects inner structures.`,
B:`B (Q) — wrong. These labels correspond to other structures (such as the cornea, choroid, retina, or iris), none of which share the sclera's tough, white, protective characteristic — the cornea is transparent, the choroid and retina are pigmented/light-sensitive rather than white and fibrous.`,
C:`C (R) — wrong. These labels correspond to other structures (such as the cornea, choroid, retina, or iris), none of which share the sclera's tough, white, protective characteristic — the cornea is transparent, the choroid and retina are pigmented/light-sensitive rather than white and fibrous.`,
D:`D (S) — wrong. These labels correspond to other structures (such as the cornea, choroid, retina, or iris), none of which share the sclera's tough, white, protective characteristic — the cornea is transparent, the choroid and retina are pigmented/light-sensitive rather than white and fibrous.`}},

9:{ans:"D",pct:0.87,
concept:`Muscle tissue in the eye is found specifically in the iris (controls pupil diameter) and the ciliary body (controls lens shape via ciliary muscle), as well as in the extrinsic eye muscles that move the eyeball within the orbit.`,
opts:{
A:`A — wrong. This combination includes at least one non-muscular structure (e.g. sclera, cornea, retina, or optic nerve), which are made of fibrous connective tissue, transparent tissue, light-sensitive nerve tissue, or nerve fibres respectively — none of which are muscle.`,
B:`B — wrong. This combination includes at least one non-muscular structure (e.g. sclera, cornea, retina, or optic nerve), which are made of fibrous connective tissue, transparent tissue, light-sensitive nerve tissue, or nerve fibres respectively — none of which are muscle.`,
C:`C — wrong. This combination includes at least one non-muscular structure (e.g. sclera, cornea, retina, or optic nerve), which are made of fibrous connective tissue, transparent tissue, light-sensitive nerve tissue, or nerve fibres respectively — none of which are muscle.`,
D:`D (S and U) — correct. These labels correspond to structures containing muscle fibres, such as the iris/ciliary body and the extrinsic muscle attached to the outside of the eyeball, which are responsible for pupil size regulation/accommodation and movement of the eyeball respectively.`}},

10:{ans:"C",pct:0.69,
concept:`When measuring water uptake using a potometer-type set-up, the leafy shoot must be cut underwater to maintain a continuous, unbroken water column in the xylem vessels.`,
opts:{
A:`A (allows the shoot to adjust to the new environment) — wrong. Cutting underwater has no role in environmental “adjustment”; this is not a recognised physiological process tied to the cutting step.`,
B:`B (prevents the drying up of the cut end) — wrong. While keeping the cut end submerged does prevent drying, the specific reason for cutting underwater (as opposed to just placing a dry-cut shoot into water afterward) is to avoid introducing air into the xylem — drying is a secondary, not the primary, concern.`,
C:`C (avoids the forming of air bubbles in the xylem) — correct. If the shoot is cut in air, air can be drawn into the cut xylem vessels due to the transpiration pull, creating air bubbles (air locks) that break the continuous water column. This would block water movement through the xylem and cause inaccurate (falsely low) readings of water uptake.`,
D:`D (makes sure there is no water loss before the experiment) — wrong. Transpiration (water loss from leaves) continues as soon as the shoot is exposed to air, regardless of where it is cut; cutting underwater does not prevent this ongoing water loss.`}},

11:{ans:"A",pct:0.64,
concept:`The rate of transpiration depends on environmental factors including light, temperature, wind, and humidity. Light is the primary factor controlling stomatal opening, since guard cells open stomata in response to light (to allow gas exchange for photosynthesis) and close them in darkness.`,
opts:{
A:`A (switching off the light) — correct. In the dark, guard cells lose turgidity and stomata close, drastically cutting off the main pathway for water vapour to diffuse out of the leaf. Since almost all transpirational water loss occurs through open stomata, removing light produces the greatest decrease in water loss compared to changing the other factors.`,
B:`B (switching off the fan) — wrong. The fan increases air movement across the leaf surface, which removes the layer of humid air and maintains a steep water vapour concentration gradient. Switching it off reduces transpiration by increasing humidity around the leaf, but stomata remain open, so water loss decreases only moderately.`,
C:`C (increasing temperature from 10°C to 25°C) — wrong. Raising temperature increases the rate of evaporation from mesophyll cells and increases the water vapour concentration gradient, so this would increase, not decrease, water loss.`,
D:`D (decreasing temperature from 25°C to 10°C) — wrong. While lower temperature does reduce the rate of evaporation and thus decreases water loss, this effect is smaller than the near-complete stomatal closure caused by darkness, so it is not the greatest decrease.`}},

12:{ans:"D",pct:0.48,
concept:`The rate of transpiration is closely related to the total number of stomata on a leaf, since stomata are the main sites of water vapour loss. A plant with more stomata (and hence a higher transpiration rate) loses water faster and will wilt sooner when water supply is limited, as in a very dry region.`,
opts:{
A:`A (Plant P) — wrong. Plant P has a lower total stomatal density (4 000 + 28 000 = 32 000 per cm²) than Plant S, giving it a lower transpiration rate and thus it wilts later.`,
B:`B (Plant Q) — wrong. Plant Q has by far the lowest total stomatal density (0 + 800 = 800 per cm²), meaning very little transpiration occurs, so it loses water very slowly and would be the last, not the first, to wilt.`,
C:`C (Plant R) — wrong. Plant R's total stomatal density (8 500 + 15 000 = 23 500 per cm²) is lower than Plant S's, so its transpiration rate — and hence its rate of wilting — is also lower.`,
D:`D (Plant S) — correct. Adding the stomata counts on the upper and lower surfaces, Plant S has the highest total density of stomata (8 000 + 26 000 = 34 000 per cm²) among the four plants. This means Plant S has the greatest potential rate of water loss, so it will lose water fastest and wilt first under dry conditions.`}},

13:{ans:"B",pct:0.54,
concept:`When organisms of the same species are grown at different densities and all other conditions (soil, water, light) are kept constant, the resulting differences in growth reflect intraspecific competition for limited resources such as light, water, and mineral nutrients.`,
opts:{
A:`A (the effect of symbiosis) — wrong. Symbiosis refers to interactions between different species living together (e.g. mutualism), which is not being tested here since only planting density of what appears to be one species is varied.`,
B:`B (the effect of competition) — correct. Since seeds of presumably the same species are sown at three different densities under otherwise identical conditions, and dry mass (a measure of growth) is compared, the investigation is designed to reveal how increasing competition for shared resources at higher densities affects plant growth.`,
C:`C (the success rate of seed germination) — wrong. The investigation measures the dry mass of mature plants, not the proportion of seeds that successfully germinate, so germination success is not the focus.`,
D:`D (the optimum density for seed germination) — wrong. Again, the data concern growth (dry mass) of mature plants rather than germination rates or an “optimum” density for germination specifically.`}},

14:{ans:"A",pct:0.61,
concept:`As planting density increases, intraspecific competition for a fixed pool of resources (light, water, minerals, space) intensifies, so each individual plant obtains a smaller share of resources and grows less.`,
opts:{
A:`A (biomass of individual plants is reduced) — correct. With more plants competing for the same limited resources, each individual receives less light, water, and nutrients, resulting in reduced growth and lower dry mass per plant, consistent with the graphs showing lower dry mass at higher seed density.`,
B:`B (genetic variability of the plants is increased) — wrong. Planting density is a purely environmental factor and has no effect on the genetic makeup or variability of the plants.`,
C:`C (dry masses of plants are normally distributed) — wrong. The graphs describe a shift in the distribution/mean of dry mass with density, not a claim about the specific statistical shape (normal distribution) of the data, and this is not a stated effect of increasing density.`,
D:`D (leaves become smaller and stems get thinner) — wrong. While etiolation-type effects can occur under intense competition, this specific structural detail is not what the data (dry mass histograms) demonstrate; the described change is about overall dry mass, not leaf/stem morphology.`}},

15:{ans:"B",pct:0.63,
concept:`Identical twins arise from a single fertilised egg and therefore share an identical genotype. Traits under strict genetic (discontinuous) control will therefore be identical between them, but traits showing continuous variation are influenced by both genes and environment, so identical twins can differ in these traits.`,
opts:{
A:`A — wrong because it includes statement (2), incorrectly implying that identical twins must show identical continuous variation traits, ignoring the significant role of environmental influence on such traits.`,
B:`B — (1) and (3) only — correct. (1) Identical twins have the same genotype, since they originate from the same zygote. (3) They will also show the same discontinuous variation traits (e.g. blood group), which are controlled by a single gene or few genes with minimal environmental influence, so genetically identical individuals express identical discrete phenotypes. (2) is excluded because continuous variation traits (e.g. height, body mass) result from the combined effects of multiple genes and environmental factors (diet, exercise, etc.), so identical twins raised in different environments can differ in these traits despite having the same genotype.`,
C:`C — wrong because it includes statement (2), incorrectly implying that identical twins must show identical continuous variation traits, ignoring the significant role of environmental influence on such traits.`,
D:`D — wrong because it includes statement (2), incorrectly implying that identical twins must show identical continuous variation traits, ignoring the significant role of environmental influence on such traits.`}},

16:{ans:"C",pct:0.78,
concept:`In a carbon cycle diagram, arrows represent the named biological processes — photosynthesis (fixing atmospheric CO₂ into organic carbon in plants), respiration (releasing CO₂ from living plants/animals), and decomposition (saprophytes breaking down humus/dead organic matter to release CO₂ back into the atmosphere).`,
opts:{
A:`A — wrong. This combination assigns respiration to one of the labels 1, 4, or 5, but respiration in this diagram is represented by the separate arrows from living plants and animals directly to atmospheric CO₂ (typically the untested labels 2 and 3), not by labels 1, 4, or 5.`,
B:`B — wrong. This combination assigns respiration to one of the labels 1, 4, or 5, but respiration in this diagram is represented by the separate arrows from living plants and animals directly to atmospheric CO₂ (typically the untested labels 2 and 3), not by labels 1, 4, or 5.`,
C:`C — correct. Label 1 and label 5 both correspond to arrows representing photosynthesis, i.e. the fixation of atmospheric carbon dioxide into organic compounds within plants (this can appear as more than one arrow in a cyclic diagram depending on how the atmosphere/plant connection is drawn). Label 4 corresponds to decomposition, the breakdown of humus (dead organic matter) by saprophytes, releasing CO₂ back into the atmosphere.`,
D:`D — wrong. This combination assigns respiration to one of the labels 1, 4, or 5, but respiration in this diagram is represented by the separate arrows from living plants and animals directly to atmospheric CO₂ (typically the untested labels 2 and 3), not by labels 1, 4, or 5.`}},

17:{ans:"C",pct:0.80,
concept:`Saprophytes (decomposers, e.g. certain bacteria and fungi) obtain nutrition by breaking down dead organic matter (humus), releasing carbon dioxide back into the atmosphere through decomposition.`,
opts:{
A:`A (process 1) — wrong. This represents photosynthesis (CO₂ fixed by plants), which is carried out by autotrophs, not saprophytes.`,
B:`B (process 2) — wrong. This corresponds to a different transfer pathway (such as feeding or respiration) not associated with decomposer activity.`,
C:`C (process 3) — correct. Process 3 represents the decomposition pathway, where saprophytes break down dead organic remains (humus derived from dead plants/animals), releasing carbon dioxide into the atmosphere.`,
D:`D (process 5) — wrong. This is another photosynthesis-related arrow (as established in Q16), which again does not involve saprophytic decomposition.`}},

18:{ans:"D",pct:0.78,
concept:`Transcription is the synthesis of mRNA from a DNA template strand, occurring in the nucleus, where free RNA nucleotides pair complementarily with the DNA template strand.`,
opts:{
A:`A (tRNA pairs with ribosome to produce amino acids) — wrong. This confuses translation (where tRNA delivers amino acids to the ribosome) with transcription, and amino acids are not “produced” by tRNA-ribosome pairing — they are joined into polypeptides.`,
B:`B (mRNA pairs with ribosome to produce proteins) — wrong. This describes (loosely) translation, not transcription. During translation, mRNA is read by the ribosome with tRNA bringing specific amino acids, forming proteins — a separate stage from transcription.`,
C:`C (Free DNA nucleotides pair with DNA template strand to produce DNA) — wrong. This describes DNA replication, not transcription, since it involves DNA nucleotides forming a new DNA strand, not RNA nucleotides forming mRNA.`,
D:`D (Free RNA nucleotides pair with DNA template strand to produce mRNA) — correct. This is the precise definition of transcription: RNA polymerase catalyses the pairing of free RNA nucleotides with exposed bases on the DNA template strand (A-U, T-A, C-G, G-C), synthesising a complementary strand of mRNA.`}},

19:{ans:"A",pct:0.31,
concept:`The genetic code flows from DNA coding strand → mRNA → tRNA anticodon, following complementary base pairing rules (A-T/A-U, G-C) at each stage.`,
opts:{
A:`A (UCA) — correct. The coding strand sequence AGT has the same base sequence as the mRNA transcript, except thymine (T) is replaced by uracil (U) in RNA. So the mRNA codon is AGU. The tRNA anticodon must pair complementarily with the mRNA codon by base-pairing (A pairs with U, G pairs with C, U pairs with A), giving the anticodon UCA.`,
B:`B (AGU) — wrong. This is the mRNA codon sequence itself, not the complementary tRNA anticodon.`,
C:`C (TCA) — wrong. This substitutes thymine (T) into what should be an RNA anticodon; tRNA is composed of ribonucleotides and does not contain thymine.`,
D:`D (AGT) — wrong. This simply repeats the original DNA coding strand sequence, which is neither the mRNA codon nor its complementary anticodon.`}},

20:{ans:"B",pct:0.64,
concept:`The liver performs distinct homeostatic and metabolic roles, one of which is the breakdown of worn-out red blood cells, distinguishing it from the functions of the pancreas.`,
opts:{
A:`A (detects blood glucose level) — wrong. Blood glucose level is detected by the islets of Langerhans in the pancreas, which then adjusts insulin/glucagon secretion accordingly; the liver responds to these hormones but does not itself detect glucose level.`,
B:`B (breaks down red blood cells) — correct. The liver breaks down old or damaged red blood cells, processing the released haemoglobin (e.g. converting it into bile pigments for excretion) and recycling iron for reuse.`,
C:`C (secretes glucagon into the blood) — wrong. Glucagon is secreted by the alpha cells of the pancreas, not the liver. The liver is a target organ that responds to glucagon by converting glycogen to glucose.`,
D:`D (secretes enzymes into the small intestine) — wrong. The liver secretes bile (containing bile salts, not digestive enzymes) into the small intestine to emulsify fats. Digestive enzymes are secreted by the pancreas and intestinal wall glands, not the liver.`}},

21:{ans:"D",pct:0.83,
concept:`Tracing blood flow requires knowledge of the hepatic portal system (gut → liver via portal vein, not directly to heart) and the general circulatory route (body tissues → vena cava → right side of heart → pulmonary artery → lungs).`,
opts:{
A:`A (liver, lungs, small intestine, heart) — wrong. This sequence has the red blood cell reaching the lungs before the small intestine, which does not reflect the correct hepatic portal pathway or the destination (air sacs) stated in the question.`,
B:`B (lungs, heart, small intestine, liver) — wrong. This places the lungs (the stated destination) first, which is inconsistent with the question, and also reverses the correct liver-before-heart portal sequence.`,
C:`C (small intestine, heart, liver, lungs) — wrong. This incorrectly routes blood from the small intestine directly to the heart, omitting the essential hepatic portal vein connection to the liver that must occur before blood returns to the heart.`,
D:`D (small intestine, liver, heart, lungs) — correct. Blood leaving the aorta reaches the small intestine via the mesenteric artery, where it picks up absorbed nutrients. It then travels via the hepatic portal vein to the liver (not directly back to the heart, since gut capillaries drain into the portal vein rather than a normal vein), where nutrient processing occurs. Blood then leaves the liver via the hepatic vein into the vena cava, reaching the right side of the heart, and is pumped via the pulmonary artery to the lungs (air sacs) for gas exchange.`}},

22:{ans:"C",pct:0.82,
concept:`Ciliated epithelial cells lining the trachea beat in a coordinated, wave-like motion to protect the lower respiratory tract from particles and pathogens.`,
opts:{
A:`A (to warm the incoming air) — wrong. Warming of air is achieved by the extensive blood supply (capillary network) lining the respiratory tract, not by the action of cilia.`,
B:`B (to moisten the incoming air) — wrong. Moistening of air results from the moist mucous membrane lining the airway, not from ciliary movement itself.`,
C:`C (to move mucus away from the trachea) — correct. The cilia beat upward, sweeping the mucus (secreted by goblet cells, which traps dust and microorganisms) toward the throat, where it is swallowed or expelled by coughing, preventing these particles/pathogens from reaching the lungs.`,
D:`D (to produce mucus to protect the trachea) — wrong. Mucus is secreted by goblet cells, not by cilia; the cilia's role is to move the mucus, not produce it.`}},

23:{ans:"B",pct:0.68,
concept:`In the light-dependent stage of photosynthesis, light energy activates chlorophyll to release high-energy electrons, and photolysis of water splits water into oxygen, protons (H⁺), and electrons, with the hydrogen (protons and electrons) used to reduce NADP⁺ to NADPH for use in the light-independent stage.`,
opts:{
A:`A — wrong because it includes statement (2), which incorrectly claims that oxygen from photolysis is used in carbon fixation.`,
B:`B — (1) and (3) only — correct. (1) Activation of chlorophyll by light does release high-energy electrons, which pass along the electron transport chain to generate ATP and eventually contribute to NADPH formation. (3) Photolysis of water releases hydrogen (as protons and electrons) which combine with NADP⁺ to form NADPH, a key product needed for carbon fixation in the light-independent stage. (2) is excluded because the oxygen released from photolysis of water is a waste by-product that diffuses out of the leaf (or is used in respiration) — it is not used in carbon fixation, which instead uses carbon dioxide, not oxygen.`,
C:`C — wrong because it includes statement (2), which incorrectly claims that oxygen from photolysis is used in carbon fixation.`,
D:`D — wrong because it includes statement (2), which incorrectly claims that oxygen from photolysis is used in carbon fixation.`}},

24:{ans:"C",pct:0.37,
concept:`Pollen grain germination is species-specific, relying on chemical recognition between the pollen grain surface and the stigma, ensuring successful fertilisation only occurs between compatible plants of the same species.`,
opts:{
A:`A (Pollen grains are the male gametes) — wrong. The pollen grain itself is not the male gamete; rather, it contains a generative nucleus which, after germination of the pollen tube, divides to produce the male gamete (sperm nucleus).`,
B:`B (Pollen grains can produce nectar to attract insects) — wrong. Nectar is secreted by nectaries, typically located at the base of the petals, not by pollen grains.`,
C:`C (Pollen grains germinate when they land on the stigma of the same species) — correct. Compatible chemical signals on the stigma surface trigger the pollen grain to germinate, producing a pollen tube that grows down through the style toward the ovule, allowing fertilisation. This recognition mechanism normally prevents cross-species fertilisation.`,
D:`D (Pollen grains of insect-pollinated flowers are usually smaller...) — wrong. This is reversed: insect-pollinated flowers typically produce larger, sticky or spiny pollen grains that adhere to the bodies of visiting insects, while wind-pollinated flowers produce smaller, lighter, smoother pollen grains suited for dispersal by air currents.`}},

25:{ans:"C",pct:0.93,
concept:`During the menstrual cycle, the ovary and the uterus (endometrium) undergo cyclical, periodic changes under hormonal control — the ovary through follicle development and ovulation, and the uterine lining through thickening and shedding (menstruation).`,
opts:{
A:`A — wrong. This combination includes structures such as the oviduct, cervix, or vagina, which do not undergo the same cyclical structural/functional changes; only the ovary and uterus show true periodic (cyclical) changes tied to the menstrual cycle.`,
B:`B — wrong. This combination includes structures such as the oviduct, cervix, or vagina, which do not undergo the same cyclical structural/functional changes; only the ovary and uterus show true periodic (cyclical) changes tied to the menstrual cycle.`,
C:`C (2 and 3) — correct. Based on the diagram, labels 2 and 3 correspond to the ovary and uterus respectively. The ovary undergoes periodic changes in the form of the ovarian cycle (follicular development, ovulation, corpus luteum formation), while the uterus undergoes periodic changes in its endometrial lining (thickening in preparation for potential implantation, followed by shedding during menstruation if fertilisation does not occur).`,
D:`D — wrong. This combination includes structures such as the oviduct, cervix, or vagina, which do not undergo the same cyclical structural/functional changes; only the ovary and uterus show true periodic (cyclical) changes tied to the menstrual cycle.`}},

26:{ans:"B",pct:0.82,
concept:`After fertilisation, the resulting embryo travels down the oviduct and embeds itself in the thickened endometrium of the uterus, a process called implantation.`,
opts:{
A:`A (label 1) — wrong. This likely corresponds to the ovary or oviduct region, where fertilisation (not implantation) typically occurs (in the oviduct), or where eggs are released (ovary).`,
B:`B (label 3, the uterus) — correct. The endometrium (uterine lining) thickens under hormonal control (oestrogen and progesterone) during the menstrual cycle to prepare a nutrient-rich, well-vascularised surface for the blastocyst to embed into. This is where implantation normally occurs.`,
C:`C (label 5) — wrong. This likely corresponds to the cervix, a narrow passage that does not have the thickened vascularised lining required to support implantation.`,
D:`D (label 6) — wrong. This likely corresponds to the vagina, which functions as the birth canal and copulatory canal, not the site of implantation.`}},

27:{ans:"C",pct:0.79,
concept:`Contraceptive methods can act at different stages — preventing gamete maturation/release (hormonal methods), acting as physical barriers, avoiding fertile periods, or preventing implantation.`,
opts:{
A:`A (using diaphragm) — wrong. A diaphragm is a physical barrier that blocks sperm from entering the uterus; it does not affect gamete production, which continues normally.`,
B:`B (using rhythm method) — wrong. This method relies on avoiding intercourse during the fertile period (around ovulation); it does not stop the ovary from producing and releasing a mature egg.`,
C:`C (intake of contraceptive pills) — correct. Contraceptive pills contain synthetic oestrogen and/or progesterone, which suppress the release of FSH and LH from the pituitary gland. This prevents follicle development and ovulation, meaning no mature egg (mature gamete) is produced or released for that cycle.`,
D:`D (using intrauterine device) — wrong. An IUD works mainly by preventing implantation of a fertilised egg in the uterus (and may also affect sperm motility); it does not prevent the formation of mature gametes themselves.`}},

28:{ans:"B",pct:0.58,
concept:`When comparing reproductive structures across species, the comparison should be based on functional equivalence rather than superficial similarity.`,
opts:{
A:`A (anther — sperm) — wrong. The anther is the structure that produces pollen grains (containing male gametes); it is functionally more comparable to the testis (which produces sperm), not to the sperm cell itself.`,
B:`B (pollen tube — penis) — correct. The pollen tube grows down through the style to deliver the male gamete (sperm nucleus) to the ovule for fertilisation. The penis is the organ that delivers sperm (male gametes) into the female reproductive tract during copulation. Both structures function specifically as the means of transporting/delivering the male gamete to enable fertilisation.`,
C:`C (carpel — uterus) — wrong. The carpel is the entire female reproductive structure of the flower, comprising stigma, style, and ovary; this is a broader structure than the uterus alone, which is only the site of implantation and fetal development in humans, so the two are not functionally equivalent.`,
D:`D (petal — vagina) — wrong. Petals primarily function to attract pollinators (often via colour and scent) and have no equivalent role to the vagina, which serves as the copulatory canal and birth canal.`}},

29:{ans:"B",pct:0.46,
concept:`Primary sexual characteristics relate directly to the reproductive organs and their core reproductive functions (e.g. gamete production), while secondary sexual characteristics are other physical features that develop at puberty under the influence of sex hormones but are not directly involved in gamete production.`,
opts:{
A:`A (growth of beard) — wrong, this IS a secondary sexual characteristic. Facial hair growth develops under testosterone influence at puberty but is not directly involved in gamete production.`,
B:`B (production of sperms) — correct, this is NOT a secondary sexual characteristic. Sperm production is a primary sexual characteristic, since it is the core reproductive function carried out directly by the testes.`,
C:`C (broadening of shoulders) — wrong, this IS a secondary sexual characteristic. This is a physical body change driven by testosterone, unrelated to gamete production itself.`,
D:`D (enlargement of larynx) — wrong, this IS a secondary sexual characteristic. This causes voice deepening due to testosterone and is a secondary physical change, not a reproductive function.`}},

30:{ans:"C",pct:0.35,
concept:`Phototropism refers to the growth response of a plant organ to the direction of light. Shoots typically show positive phototropism (growing toward light), while roots typically show negative phototropism (growing away from light).`,
opts:{
A:`A — wrong because it includes statement (1), incorrectly attributing the root's water absorption function to phototropism rather than geotropism/hydrotropism.`,
B:`B — wrong because it includes statement (1), incorrectly attributing the root's water absorption function to phototropism rather than geotropism/hydrotropism.`,
C:`C — (2) and (3) only — correct. (3) The shoot's positive phototropism allows it to grow toward light, positioning leaves to maximise light capture for photosynthesis. (2) The root's negative phototropism causes it to grow away from light and downward into the soil, which in turn allows the root system to properly anchor the plant and provide mechanical support. (1) is excluded because a root's ability to obtain water from the soil is primarily related to its response to gravity (geotropism) and moisture gradients (hydrotropism), not to its response to light.`,
D:`D — wrong because it includes statement (1), incorrectly attributing the root's water absorption function to phototropism rather than geotropism/hydrotropism.`}},

31:{ans:"A",pct:0.90,
concept:`Arteries are structurally adapted to withstand and maintain the high pressure of blood pumped directly from the heart, distinguishing them from veins (which have large lumens for blood return) and capillaries (thin walls for exchange).`,
opts:{
A:`A (thick muscular wall to withstand high blood pressure) — correct. Blood leaving the heart via arteries is under high pressure due to ventricular contraction. Arteries have a thick wall containing smooth muscle and elastic fibres, allowing them to withstand this high pressure without bursting, and to help maintain pressure as blood is pushed onward.`,
B:`B (thick muscular wall to generate high blood pressure) — wrong. The high blood pressure is generated by the heart's contraction (the pump), not by the artery wall itself; the arterial wall withstands and helps maintain pressure, but does not generate it.`,
C:`C (large lumen to slow down the blood flow) — wrong. Arteries actually have a relatively small lumen compared to veins, and this feature is not a means of “slowing” blood flow — that characteristic (large lumen, low resistance) is typical of veins, not arteries.`,
D:`D (large lumen to accommodate more blood) — wrong. Again, arteries have a comparatively small lumen; a large lumen for accommodating greater blood volume is a feature of veins, which store more blood at any given time.`}},

32:{ans:"D",pct:0.75,
concept:`Identifying blood vessel type and blood composition requires linking structural features (thick muscular wall = artery) with the organ it serves; vessels connected to the lungs are part of the pulmonary circulation.`,
opts:{
A:`A (oxygenated blood towards the heart) — wrong. This describes the pulmonary vein, not an artery; also, this represents flow toward the heart, in the opposite direction described.`,
B:`B (oxygenated blood towards the lungs) — wrong. Blood travelling toward the lungs has not yet undergone gas exchange there, so it must still be deoxygenated, not oxygenated.`,
C:`C (deoxygenated blood towards the heart) — wrong. This describes the direction of the vena cava (a vein) returning deoxygenated blood to the heart, not an artery carrying blood toward the lungs.`,
D:`D (deoxygenated blood towards the lungs) — correct. Since blood vessel X has been identified as an artery (from Q31) and it connects to the lungs, it must be the pulmonary artery, which is the only artery in the body carrying deoxygenated blood, from the right ventricle of the heart towards the lungs for gas exchange.`}},

33:{ans:"C",pct:0.76,
concept:`Blood pressure generated by the heart depends on the thickness of the muscular wall of each chamber; the chamber that pumps blood over the greatest distance and against the greatest resistance develops the highest pressure.`,
opts:{
A:`A (left atrium) — wrong. Atria have relatively thin walls since they only need to push blood a short distance into the adjoining ventricles, generating much lower pressure.`,
B:`B (right atrium) — wrong. Similarly, the right atrium has a thin wall and generates low pressure, only moving blood into the right ventricle.`,
C:`C (left ventricle) — correct. The left ventricle has the thickest muscular wall of all four chambers because it must generate enough force to pump oxygenated blood through the entire systemic circulation (the whole body), overcoming considerable resistance and distance. This results in the highest blood pressure of any chamber.`,
D:`D (right ventricle) — wrong. The right ventricle's wall, while thicker than the atria, is thinner than the left ventricle's, since it only needs to pump blood the shorter distance to the lungs (pulmonary circulation), which has much lower resistance than the systemic circulation.`}},

34:{ans:"C",pct:0.74,
concept:`Egg contains mainly protein (albumin), and chemical digestion of protein by protease enzymes begins in the stomach, where pepsin is active in the acidic environment.`,
opts:{
A:`A (mouth) — wrong. In the mouth, only mechanical digestion (chewing) occurs along with the action of salivary amylase on starch; no enzyme in saliva digests protein.`,
B:`B (oesophagus) — wrong. The oesophagus is simply a muscular tube that transports food to the stomach via peristalsis; no digestive enzymes are secreted or act here.`,
C:`C (stomach) — correct. The stomach secretes gastric juice containing pepsin (a protease) and hydrochloric acid, which together begin the chemical breakdown of proteins (such as egg albumin) into shorter polypeptide chains. This is the first site of protein digestion.`,
D:`D (small intestine) — wrong. While further protein digestion continues in the small intestine (via trypsin and other proteases from the pancreas), this is not where chemical digestion of protein begins — that occurs earlier, in the stomach.`}},

35:{ans:"B",pct:0.71,
concept:`The immune response is divided into humoral immunity (mediated by antibodies produced by B lymphocytes/plasma cells, effective against pathogens in body fluids) and cell-mediated immunity (mediated by T lymphocytes acting directly on infected or foreign cells).`,
opts:{
A:`A (blood clotting) — wrong. Blood clotting is a non-specific protective mechanism to prevent blood loss and pathogen entry at a wound; it is not part of the specific immune response (humoral or cell-mediated).`,
B:`B (production of antibodies) — correct. Antibody production by plasma cells (differentiated B lymphocytes) is the defining feature of the humoral immune response, as antibodies circulate in blood plasma and lymph to neutralise pathogens and toxins.`,
C:`C (phagocytosis of pathogens) — wrong. Phagocytosis is carried out by phagocytes (e.g. macrophages, neutrophils) as part of the non-specific (innate) immune response, not the humoral response.`,
D:`D (production of memory T cells) — wrong. T cells, including memory T cells, are part of the cell-mediated immune response, not the humoral (antibody-based) response.`}},

36:{ans:"B",pct:0.70,
concept:`Inflammation at a wound site involves increased capillary permeability and blood flow, leading to leakage of plasma into surrounding tissues, forming tissue fluid, which causes localised swelling.`,
opts:{
A:`A (accumulation of bacteria at the wound) — wrong. While bacteria may be present at a wound and can trigger an immune/inflammatory response, bacterial accumulation itself is not the direct cause of swelling; the swelling results from fluid leakage, not bacterial mass.`,
B:`B (accumulation of tissue fluid at the wound) — correct. In response to injury, chemicals (e.g. histamine) released at the wound site increase the permeability of nearby capillaries, causing blood plasma to leak out into the surrounding tissue spaces, forming excess tissue fluid, which results in visible swelling (oedema).`,
C:`C (increased phagocytosis at the wound) — wrong. Increased phagocytic activity helps to destroy pathogens and clear debris at the wound, but this cellular process does not itself directly cause the visible swelling.`,
D:`D (increased blood flow to the capillaries around the wound) — wrong. While increased blood flow (causing redness and heat) is part of the inflammatory response, the swelling specifically results from the leakage of fluid out of the capillaries into the tissues, not simply from more blood flowing through the vessels.`}}
},

/* ==================== 2013 ==================== */
"2013": {
1:{ans:"D",pct:0.54,
concept:`Different cell types are specialised for specific functions based on their organelle composition. Cells lining the air sacs (alveoli) must be thin and simple to allow efficient gas exchange.`,
opts:{
A:`Option A (P): Incorrect. Cell type P has moderate mitochondria (++), high chloroplasts (++), and moderate endoplasmic reticulum (+). The presence of chloroplasts indicates this is a plant cell involved in photosynthesis, not an animal respiratory cell.`,
B:`Option B (Q): Incorrect. Cell type Q has very high mitochondria (+++), no chloroplasts (−), and moderate ER (+). While this is an animal cell, the very high mitochondrial content suggests high metabolic activity, which is not characteristic of simple gas exchange epithelial cells in alveoli.`,
C:`Option C (R): Incorrect. Cell type R has very high mitochondria (+++), no chloroplasts (−), and very high ER (+++). This profile suggests a highly metabolically active cell involved in protein synthesis and energy production, such as a secretory or muscle cell.`,
D:`Option D (S): Correct. Cell type S has low mitochondria (+), no chloroplasts (−), and low ER (+). This matches simple squamous epithelial cells that line the air sacs — thin and flattened with minimal organelles to reduce diffusion distance and facilitate efficient gas exchange.`}},

2:{ans:"C",pct:0.76,
concept:`Cells producing and secreting protein hormones need extensive rough endoplasmic reticulum for protein assembly and many mitochondria for ATP.`,
opts:{
A:`Option A (P): Incorrect. Cell type P contains chloroplasts, indicating it is a plant cell. Insulin is produced only in animal cells, specifically in the pancreas.`,
B:`Option B (Q): Incorrect. While cell type Q is an animal cell with very high mitochondria (+++), this profile alone doesn't specifically indicate insulin production. The moderate ER doesn't match the expected profile for hormone-secreting cells.`,
C:`Option C (R): Correct. Cell type R has very high mitochondria (+++), no chloroplasts (−), and very high ER (+++). This is characteristic of beta cells in the pancreatic islets of Langerhans. High mitochondria provide energy for insulin synthesis, and abundant rough ER is essential for synthesising this protein hormone.`,
D:`Option D (S): Incorrect. Cell type S has minimal organelles, suggesting a simple structural cell rather than a metabolically active secretory cell.`}},

3:{ans:"C",pct:0.72,
concept:`Photosynthetic cells produce glucose as an immediate product, but convert excess glucose into starch for compact, osmotically inactive storage.`,
opts:{
A:`Option A: Incorrect. Stating that only starch (1) would be found in cell type P is incomplete. Cell type P is a plant cell that performs photosynthesis, so glucose — the immediate product — would also be present.`,
B:`Option B: Incorrect. Cell type P would not contain only glucose (2). Plant cells typically convert excess glucose into starch for storage.`,
C:`Option C: Correct. Cell type P contains both starch (1) and glucose (2). As a photosynthetic cell with chloroplasts, it produces glucose; excess glucose is converted to starch, stored temporarily in chloroplasts or in amyloplasts.`,
D:`Option D: Incorrect. Glycogen (3) is the storage carbohydrate of animal and fungal cells, not plant cells.`}},

4:{ans:"A",pct:0.81,
concept:`DNA nucleotides share the same deoxyribose sugar and phosphate group; only the nitrogenous base varies, creating the genetic code.`,
opts:{
A:`Option A: Correct. The base is the component that varies among different DNA nucleotides — adenine, guanine, cytosine and thymine. The specific sequence of these bases encodes genetic information.`,
B:`Option B: Incorrect. Ribose is not found in DNA nucleotides at all; DNA contains deoxyribose. Ribose is found in RNA, and even there the sugar remains constant.`,
C:`Option C: Incorrect. Deoxyribose is the sugar component of DNA nucleotides and remains the same in all of them.`,
D:`Option D: Incorrect. The phosphate group is also constant across all DNA nucleotides; phosphate groups form the backbone through phosphodiester bonds.`}},

5:{ans:"C",pct:0.41,
concept:`Cell membranes are selectively permeable barriers: the lipid bilayer restricts passage, while proteins facilitate transport, act as receptors, antigens and enzymes.`,
opts:{
A:`Option A: Correct description (so not the answer). Some membrane proteins serve as antigens for cell recognition, allowing the immune system to distinguish self from non-self.`,
B:`Option B: Correct description (so not the answer). Some membrane proteins function as enzymes catalysing metabolic reactions at or near the cell membrane.`,
C:`Option C: Incorrect description — this is the answer. The statement that membrane proteins "act as barriers which prevent the entry of some substances" is wrong. The lipid bilayer itself acts as the primary barrier; membrane proteins instead facilitate or regulate the passage of substances.`,
D:`Option D: Correct description (so not the answer). Some membrane proteins act as carriers/channels transporting ions, glucose and amino acids by facilitated diffusion or active transport.`}},

6:{ans:"A",pct:0.47,
concept:`Anabolic (energy-absorbing, building) versus catabolic (energy-releasing, breaking down) processes, read from an energy level diagram.`,
opts:{
A:`Option A: Correct. The product has a higher energy level than the reactant, indicating that energy must be absorbed for the reaction to proceed. Anabolic reactions build complex molecules from simpler ones and require energy input (e.g. protein synthesis, photosynthesis).`,
B:`Option B: Incorrect. While correctly identifying this as anabolic, the reasoning is wrong — the graph shows energy is absorbed, not released.`,
C:`Option C: Incorrect. This is not catabolic. Catabolic reactions break down complex molecules and release energy; the graph shows energy increasing from reactant to product.`,
D:`Option D: Incorrect. Not catabolic — the product energy level is higher than the reactant, not lower.`}},

7:{ans:"B",pct:0.44,
concept:`Enzymes lower the activation energy by providing an alternative reaction pathway, but do not change the energy levels of the reactants or the products.`,
opts:{
A:`Option A: Incorrect. This graph shows a different starting energy level for the reactant with and without enzyme. Both curves must start and end at the same energy levels.`,
B:`Option B: Correct. Without the enzyme the activation energy is higher (taller energy barrier); with the enzyme the activation energy is lowered, while reactant and product energy levels remain unchanged.`,
C:`Option C: Incorrect. This graph shows the product energy level changing when the enzyme is absent. Enzymes do not change the thermodynamics (ΔG) of a reaction.`,
D:`Option D: Incorrect. Similar to C, it incorrectly shows different product energy levels, and implies the activation energy is unchanged.`}},

8:{ans:"C",pct:0.42,
concept:`In the Calvin cycle, carbon fixation by RuBisCO does not directly consume ATP; the reduction step and the regeneration of RuBP both require ATP from the light reactions.`,
opts:{
A:`Option A: Incorrect. While (2) reduction of the 3-C compound requires ATP, (1) fixation of carbon dioxide does not directly require ATP. The carboxylation catalysed by RuBisCO does not consume ATP.`,
B:`Option B: Incorrect. Statement (1) is wrong as explained. Statement (3) regeneration of the CO₂ acceptor does require ATP, but the combination is invalid.`,
C:`Option C: Correct. Both (2) and (3) require ATP. Reduction of 3-phosphoglycerate to G3P requires ATP and NADPH; regeneration of RuBP requires ATP to phosphorylate ribulose-5-phosphate. Process (1) fixation does not directly require ATP.`,
D:`Option D: Incorrect. Process (1) carbon fixation does not require ATP input. Only (2) and (3) do.`}},

9:{ans:"D",pct:null,
concept:`The light-dependent reactions produce ATP (photophosphorylation), oxygen (photolysis of water) and NADPH (electron transport chain).`,
opts:{
A:`Option A: Incorrect. ATP (1) and oxygen (2) are produced, but this is incomplete since NADPH is also produced.`,
B:`Option B: Incorrect. ATP (1) and NADPH (3) are correct, but this wrongly excludes oxygen (2), which is definitely produced during photolysis of water.`,
C:`Option C: Incorrect. Oxygen (2) and NADPH (3) are produced, but this wrongly excludes ATP (1), synthesised through chemiosmosis via ATP synthase in the thylakoid membrane.`,
D:`Option D: Correct. All three — (1) ATP, (2) oxygen and (3) NADPH — are produced during the photochemical (light-dependent) reactions.`}},

10:{ans:"D",pct:0.67,
concept:`Oxygen is required as the final electron acceptor in oxidative phosphorylation; CO₂ is released mainly during the Krebs cycle (and the link reaction).`,
opts:{
A:`Option A: Incorrect. Carbon dioxide is not released during glycolysis. CO₂ is released when pyruvate is decarboxylated to acetyl CoA and during the Krebs cycle.`,
B:`Option B: Incorrect. Although the pairing with the Krebs cycle for CO₂ is reasonable, this option is incomplete/misleading because oxidative phosphorylation is the stage that requires oxygen as the final electron acceptor.`,
C:`Option C: Incorrect. Glycolysis occurs in the cytoplasm and does not produce CO₂ — it produces pyruvate. The pairing is therefore misleading.`,
D:`Option D: Correct. Oxidative phosphorylation requires oxygen as the final electron acceptor, with oxygen combining with electrons and H⁺ to form water. Carbon dioxide is released during the Krebs cycle when intermediates are decarboxylated (the Krebs cycle is the major site of CO₂ production).`}},

11:{ans:"C",pct:0.35,
concept:`The genetic code: codons are base triplets on mRNA, contain uracil instead of thymine, are degenerate (redundant), and three of them are stop codons.`,
opts:{
A:`Option A: Incorrect. Codons are on mRNA, which contains uracil instead of thymine — so bases are A, C, G, U, not T.`,
B:`Option B: Incorrect. A codon is a base triplet on mRNA. The complementary triplet on tRNA is the anticodon.`,
C:`Option C: Correct. The genetic code is degenerate: most amino acids are specified by more than one codon (e.g. leucine has six codons). 64 codons code for only 20 amino acids.`,
D:`Option D: Incorrect. Three codons (UAA, UAG, UGA) are stop codons and code for no amino acid; they terminate translation.`}},

12:{ans:"C",pct:0.80,
concept:`Chargaff's rules: A pairs with T and G pairs with C, so %A = %T and %G = %C, and all four percentages total 100%.`,
opts:{
A:`Option A: Incorrect. 60% is the combined G + C total, not C alone.`,
B:`Option B: Incorrect. 40% is the total A + T (20% A + 20% T).`,
C:`Option C: Correct. A pairs with T, so T = 20%. A + T = 40%, leaving G + C = 60%. Since G = C, C = 30%.`,
D:`Option D: Incorrect. 20% would only be true if C paired with A, which it does not — C pairs with G.`}},

13:{ans:"B",pct:0.84,
concept:`ABO blood groups involve multiple alleles (I^A, I^B, i) with I^A and I^B codominant and both dominant over i; probabilities are found using a Punnett square.`,
opts:{
A:`Option A: Incorrect. AB is possible because I^A and I^B are codominant and both parents carry one of these alleles.`,
B:`Option B: Correct. Only the I^A I^B combination (1 of 4 equally likely outcomes) gives blood type AB, so probability = 1/4. Sex is irrelevant as ABO is autosomal.`,
C:`Option C: Incorrect. 1/2 would require one parent to be homozygous for I^A or I^B.`,
D:`Option D: Incorrect. 3/4 is the probability of *not* having type O.`}},

14:{ans:"A",pct:0.80,
concept:`Sexual reproduction (meiosis + fertilisation) generates genetic variation; asexual reproduction (mitosis) produces genetically identical clones.`,
opts:{
A:`Option A: Correct. Each seed develops from a separate fertilisation involving a different ovule and pollen nucleus. Independent assortment, crossing over and random fertilisation make each seed genetically unique.`,
B:`Option B: Incorrect. Stigmas are somatic (body) tissue of one flower, produced by mitosis — genetically identical.`,
C:`Option C: Incorrect. Petals are also somatic tissue of the same plant, formed by mitosis, so genetically identical.`,
D:`Option D: Incorrect. Buds on a tuber arise by mitosis (vegetative/asexual propagation) and are clones of the parent plant.`}},

15:{ans:"B",pct:0.47,
concept:`Pedigree analysis: two unaffected parents producing affected offspring proves the trait is recessive (both parents are heterozygous carriers).`,
opts:{
A:`Option A: Incorrect. In cross Y both parents are normal and all offspring are normal — no affected offspring appear, so nothing about dominance can be deduced.`,
B:`Option B: Correct. In cross Z, two normal parents produce affected children. The affected allele must have been carried hidden in both heterozygous parents, so the affected phenotype is recessive and normal is dominant.`,
C:`Option C: Incorrect. Cross X (affected female × normal male) gives all normal offspring, but this is consistent with either pattern, so it is not conclusive.`,
D:`Option D: Incorrect. Although cross Z is conclusive, cross X is not, so the combination is wrong.`}},

16:{ans:"D",pct:0.55,
concept:`Tracing alleles through a pedigree: affected individuals of a recessive trait are homozygous recessive (aa), and their normal children must be carriers (Aa).`,
opts:{
A:`Option A: Incorrect. Individual 1 must be heterozygous (Aa), not homozygous, because he is the offspring of an affected mother (aa) and must have inherited one recessive allele from her.`,
B:`Option B: Incorrect. Individual 1 cannot be homozygous (AA) because his affected mother (aa) must pass a recessive allele to him.`,
C:`Option C: Incorrect. Individual 1 cannot be "homozygous or heterozygous" — he must be heterozygous (Aa). Individual 2 being homozygous (AA) is possible but not certain.`,
D:`Option D: Correct. Individual 1 must be heterozygous (Aa) because he inherited one recessive allele from his affected mother (aa) and one dominant allele from his normal father. Individual 2 could be either homozygous dominant (AA) or heterozygous (Aa).`}},

17:{ans:"B",pct:0.71,
concept:`Monozygotic (identical) twins come from one fertilised egg and share 100% of DNA; dizygotic (fraternal) twins come from two separate eggs and share only 50%, like ordinary siblings.`,
opts:{
A:`Option A: Incorrect. If individuals 3 and 4 developed from the same fertilised egg, they would have identical genotypes. But the pedigree shows individual 3 is affected while individual 4 is normal.`,
B:`Option B: Correct. Since individuals 3 and 4 show different phenotypes, they must be dizygotic (non-identical) twins from different fertilised eggs. Both parents are heterozygous (Aa), so children can be AA, Aa or aa.`,
C:`Option C: Incorrect. The trait in this pedigree shows discontinuous variation (affected or normal, no intermediates), characteristic of single-gene inheritance, not polygenic continuous variation.`,
D:`Option D: The statement about discontinuous variation is true in itself, but it does not explain the relationship between individuals 3 and 4. Option B is the specifically correct answer.`}},

18:{ans:"D",pct:0.32,
concept:`In meiosis I, homologous chromosome pairs separate, halving the chromosome number; each chromosome still consists of two sister chromatids joined at the centromere.`,
opts:{
A:`Option A: Incorrect. The diagram shows meiosis, not mitosis. Paired homologous chromosomes (bivalents) with chiasmata are characteristic of meiosis I.`,
B:`Option B: Incorrect as worded — the diagram represents metaphase I/anaphase I of meiosis I rather than a general "first meiotic division" statement.`,
C:`Option C: Incorrect. X and Y are not homologous chromosomes; they appear to be sister chromatids of the same chromosome joined at the centromere.`,
D:`Option D: Correct. The diagram shows anaphase I of meiosis I during egg cell formation. At the end of meiosis I each daughter cell receives one chromosome from each homologous pair, with each chromosome still consisting of two sister chromatids.`}},

19:{ans:"B",pct:0.59,
concept:`Gene (point) mutations — substitution, addition or deletion of individual nucleotides — are the ultimate source of new alleles and of sequence divergence between species.`,
opts:{
A:`Option A: Incorrect. Crossing over exchanges segments between homologous chromosomes within one individual; it reshuffles existing alleles but does not create new sequences.`,
B:`Option B: Correct. Gene mutation (point mutation) is the most probable cause. P→Q shows one base substitution; P→R shows three; R→S shows one. Accumulated point mutations lead to sequence divergence between related species.`,
C:`Option C: Incorrect. Random fertilisation shuffles existing alleles in a population but does not create new DNA sequences.`,
D:`Option D: Incorrect. Chromosomal mutation involves large-scale changes (deletions, duplications, inversions, translocations), not the precise single-base differences observed.`}},

20:{ans:"A",pct:0.78,
concept:`Molecular phylogeny: the fewer the nucleotide differences between two organisms, the more recent their common ancestor.`,
opts:{
A:`Option A: Correct. P and Q differ by only one nucleotide, and R and S differ by only one nucleotide. The tree correctly shows P with Q and R with S as sister pairs, with the two lineages diverging earlier from a more ancient common ancestor.`,
B:`Option B: Incorrect. This tree groups P with R (3 differences) and Q with S (4 differences) — these are not the most similar pairs.`,
C:`Option C: Incorrect. It groups Q and P correctly but fails to show R and S (only 1 difference apart) as a closely related pair.`,
D:`Option D: Incorrect. It groups Q and R as most closely related, but they differ by 4 nucleotides, and it separates P from Q even though they differ by only 1.`}},

21:{ans:"D",pct:0.54,
concept:`Eubacteria are prokaryotes (no membrane-bound organelles), whereas Protista are eukaryotes (nucleus and mitochondria present).`,
opts:{
A:`Option A: Incorrect. The size relationship is reversed — Protista are typically larger (10–100 µm or more) while Eubacteria are typically 1–10 µm.`,
B:`Option B: Incorrect. Eubacteria do have cell walls (peptidoglycan). Some protists have cell walls and others do not, so this is too absolute.`,
C:`Option C: Incorrect. Protista are eukaryotes and DO have true membrane-bound nuclei, so "absence of true nucleus" for Protista is wrong.`,
D:`Option D: Correct. Eubacteria are prokaryotes and lack mitochondria (respiration occurs at the cell membrane); Protista are eukaryotes and possess mitochondria for aerobic respiration.`}},

22:{ans:"A",pct:0.60,
concept:`For natural selection to cause evolution, variations must be heritable; non-heritable (acquired) variations cannot change the gene pool of future generations.`,
opts:{
A:`Option A: Correct — this is NOT related to evolution by natural selection. Non-inheritable variations caused by environmental factors cannot be passed to the next generation and therefore cannot contribute to evolutionary change.`,
B:`Option B: Incorrect (this IS related). Competition for limited resources drives differential survival and reproduction, the mechanism of natural selection.`,
C:`Option C: Incorrect (this IS related). Environmental change creates new selection pressures, leading to changes in allele frequencies over time.`,
D:`Option D: Incorrect (this IS related). Inherited variation provides the raw material on which natural selection acts.`}},

23:{ans:"D",pct:0.48,
concept:`Osmosis is the movement of water across a semi-permeable membrane from higher to lower water potential; the rise in solution level shows net water movement into the cavity.`,
opts:{
A:`Option A: Incorrect. Water was not drawn mainly from cells in contact with the sucrose solution; the sucrose level rose because water entered from outside the cavity.`,
B:`Option B: Incorrect. This describes the initial setup rather than the mechanism — water continues to move from the distilled water through the potato cells into the cavity.`,
C:`Option C: Incorrect. Water does not move "along the cell wall" as the primary mechanism; the main route is through cells via osmosis across semi-permeable cell membranes.`,
D:`Option D: Correct. Water moved from the distilled water (high water potential) through the cell membranes of the potato cells into the cavity containing 10% sucrose (lower water potential), causing the level to rise.`}},

24:{ans:"A",pct:0.65,
concept:`Plant cells in hypotonic solution become turgid; in hypertonic solution they lose water and become flaccid, and in extreme cases plasmolysed.`,
opts:{
A:`Option A: Correct. By the end of the experiment the cell has lost water to the sucrose solution, becoming flaccid — the membrane pulls away slightly from the wall, the vacuole shrinks and turgor pressure falls, without full plasmolysis.`,
B:`Option B: Incorrect. This shows almost no change, i.e. the cell remaining turgid, which does not reflect the expected water loss.`,
C:`Option C: Incorrect. This shows severe plasmolysis, which would not be expected from 10% sucrose over one day in potato cells.`,
D:`Option D: Incorrect. Similar to C, extreme shrinkage of the protoplast would require a far more concentrated solution or much longer exposure.`}},

25:{ans:"B",pct:0.24,
concept:`A steeper water potential (concentration) gradient produces a stronger osmotic driving force, so more water moves and the final level is higher.`,
opts:{
A:`Option A: Incorrect. 5% sucrose gives a smaller water potential gradient, a weaker driving force and therefore a LOWER final level.`,
B:`Option B: Correct. 20% sucrose creates a larger water potential gradient between the cavity and the distilled water, so more water moves in and the solution level rises higher after 1 day.`,
C:`Option C: Incorrect. The potato skin is not the semi-permeable membrane controlling osmosis; the cell membranes of the living cells are. Removing all skin would not raise the final level.`,
D:`Option D: Incorrect. Although (2) would raise the level, (3) would not, so the combination is wrong.`}},

26:{ans:"B",pct:0.33,
concept:`Only small, non-polar, lipid-soluble molecules cross membranes by simple diffusion; polar or charged molecules need carrier or channel proteins.`,
opts:{
A:`Option A: Incorrect. Amino acids are polar, charged molecules absorbed mainly by active transport and facilitated diffusion (co-transport with sodium ions).`,
B:`Option B: Correct. Fatty acids (and monoglycerides) are non-polar and hydrophobic, so they dissolve in and pass through the lipid bilayer without transport proteins or energy input.`,
C:`Option C: Incorrect. Monosaccharides are polar; glucose and galactose use sodium-glucose co-transporters, fructose uses facilitated diffusion via GLUT5.`,
D:`Option D: Incorrect. Nucleotides are large, charged molecules and require specific transport proteins.`}},

27:{ans:"B",pct:0.64,
concept:`Cone cells concentrated at the fovea provide sharp, detailed colour vision in bright light; rod cells in peripheral regions detect dim light.`,
opts:{
A:`Option A: Incorrect. The explanation attributes brightness perception solely to cone location, which is not the correct reasoning for this image.`,
B:`Option B: Correct. X appears sharper because cone cells are concentrated at position X1 (the fovea). In good daylight cones are active and provide high visual acuity and colour vision; the fovea has the highest cone density.`,
C:`Option C: Incorrect. During daytime cone cells predominate. In bright daylight rods are saturated, so a black-and-white explanation is inappropriate.`,
D:`Option D: Incorrect. Any blurring of Y would be due to fewer cone cells in peripheral regions, not because of rod cell activity during daytime.`}},

28:{ans:"A",pct:0.55,
concept:`Accommodation: for near vision the ciliary muscles contract and the elastic lens becomes more convex. Loss of elasticity with age (presbyopia) impairs near vision.`,
opts:{
A:`Option A: Correct. When the lens becomes less elastic with age it cannot be thickened fully. To focus on nearby objects the lens must become more convex, so reduced elasticity makes near focusing difficult — this is presbyopia.`,
B:`Option B: Incorrect. The mechanism is wrong: the lens does not need to be "pulled thin" for near vision; it becomes thinner for distant vision.`,
C:`Option C: Incorrect. Loss of lens elasticity primarily affects near vision, not distant vision.`,
D:`Option D: Incorrect. The mechanism is reversed — the lens is pulled thin for distant vision when the ciliary muscles relax.`}},

29:{ans:"C",pct:0.62,
concept:`Sound is transmitted from air vibrations to the tympanic membrane, then through the ear ossicles (which amplify) to the oval window and the fluid of the cochlea.`,
opts:{
A:`Option A: Incorrect. The pinna's primary function is collecting and funnelling sound waves into the ear canal, not protection in the sense described.`,
B:`Option B: Incorrect. The eardrum converts sound waves into mechanical vibrations; amplification (about 20×) occurs through the lever action of the three ossicles.`,
C:`Option C: Correct. The ear bones (malleus, incus, stapes) transmit vibrations from the eardrum to the oval window of the cochlea and, through their lever mechanism and the size difference between eardrum and oval window, amplify them.`,
D:`Option D: Incorrect. The oval window sets the cochlear fluid in motion; the round window acts as a pressure relief valve.`}},

30:{ans:"C",pct:0.07,
concept:`Air flows from high to low pressure: lung pressure below atmospheric = inspiration (volume increasing); pressure equal to atmospheric = flow stops (volume at a maximum or minimum).`,
opts:{
A:`Option A: Incorrect. At point P the pressure is at atmospheric and beginning to fall — the start of inspiration, so lung volume is near its minimum, not largest.`,
B:`Option B: Incorrect. At point Q the pressure is lowest, so air is still flowing in; this is mid-inspiration, and volume continues to increase.`,
C:`Option C: Correct. At point R the pressure returns to atmospheric after inspiration. Air flow has stopped, so the lungs have finished filling and lung volume is at its maximum before expiration begins.`,
D:`Option D: Incorrect. At point S the pressure returns to atmospheric after expiration, so lung volume is at its minimum.`}},

31:{ans:"B",pct:0.64,
concept:`Arteries and arterioles have thick muscular walls; veins have thinner muscular walls; capillaries have no muscle at all, only endothelium.`,
opts:{
A:`Option A: Incorrect. Arterioles (1) do have smooth muscle, but capillaries (2) do not — they consist only of a single layer of endothelial cells and a basement membrane.`,
B:`Option B: Correct. Arterioles (1) have smooth muscle allowing vasoconstriction and vasodilation, and veins (3) also have smooth muscle (less than arteries) assisting venous return.`,
C:`Option C: Incorrect. Capillaries (2) lack muscle in their walls.`,
D:`Option D: Incorrect. Including capillaries (2) makes the option wrong.`}},

32:{ans:"B",pct:0.47,
concept:`Antibiotics are antimicrobial chemicals produced by microorganisms or made synthetically; they are not cells and are not antibodies.`,
opts:{
A:`Option A: Incorrect. Antibiotics cannot engulf pathogens — phagocytosis is carried out by white blood cells.`,
B:`Option B: Correct. Antibiotics can be produced by fungi. Penicillin, the first antibiotic discovered, is produced by the fungus Penicillium notatum. Many antibiotics are natural products of fungi and bacteria.`,
C:`Option C: Incorrect. Antibiotics do not bind to specific antigens — that is the function of antibodies. Antibiotics target bacterial structures or metabolic processes.`,
D:`Option D: Incorrect. Lymphocytes produce antibodies or coordinate immune responses; they do not produce antibiotics.`}},

33:{ans:"A",pct:0.79,
concept:`Blood glucose homeostasis: during fasting, blood glucose falls, glucagon secretion rises and insulin secretion is suppressed.`,
opts:{
A:`Option A: Correct. Glucagon concentration increases during fasting. Alpha cells of the pancreatic islets detect low blood glucose and secrete glucagon, which promotes glycogenolysis and gluconeogenesis in the liver.`,
B:`Option B: Incorrect. Glucose concentration will decrease, not increase, after 24 hours without food.`,
C:`Option C: Incorrect. Glycogen is stored inside liver and muscle cells, not circulating in the blood; during fasting glycogen stores are broken down.`,
D:`Option D: Incorrect. Insulin concentration will decrease. Insulin is secreted in response to high blood glucose, so during fasting its secretion is suppressed.`}},

34:{ans:"C",pct:0.81,
concept:`Type 1 (insulin-dependent) diabetes results from destruction of beta cells and requires insulin injections; Type 2 (non-insulin-dependent) involves insulin resistance and can often be managed by lifestyle changes.`,
opts:{
A:`Option A: Incorrect. The proportions are reversed — Type 1 accounts for about 5–10% of cases, Type 2 about 90–95%.`,
B:`Option B: Incorrect. Type 2 diabetes has a strong genetic component, but lifestyle factors (obesity, poor diet, lack of exercise) are major contributors, so "mainly hereditary" is incomplete.`,
C:`Option C: Correct. Insulin-dependent diabetes requires regular insulin injections because the beta cells cannot produce insulin. Non-insulin-dependent diabetes may be controlled through proper diet, exercise and weight loss, especially in early stages.`,
D:`Option D: Incorrect. The mechanisms are reversed. In Type 1 the body cannot produce insulin; in Type 2 the cells become resistant to insulin.`}},

35:{ans:"D",pct:0.90,
concept:`Semen consists of sperm cells (from the testes) plus seminal fluid from accessory glands (seminal vesicles and prostate).`,
opts:{
A:`Option A: Incorrect. The bladder is not involved in producing semen, and the vas deferens only transports sperm without producing seminal fluid.`,
B:`Option B: Incorrect. Structure 1 does not contribute to semen; while the testis (4) produces sperm, the fluid comes from accessory glands.`,
C:`Option C: Incorrect. The prostate (2) does produce prostatic fluid, but the vas deferens (3) only transports sperm.`,
D:`Option D: Correct. Structure 2 (prostate gland) and structure 4 (testis) are involved in producing the content of semen — the testis produces sperm cells and some fluid, while the prostate secretes alkaline prostatic fluid containing enzymes and nutrients.`}},

36:{ans:"D",pct:0.55,
concept:`Vasectomy cuts the vas deferens, blocking sperm transport only; sperm production, erection and ejaculation all continue.`,
opts:{
A:`Option A: Incorrect. Sperm production (1) and erection (2) continue, but this excludes ejaculation (3), which also continues.`,
B:`Option B: Incorrect. Sperm production (1) and ejaculation (3) continue, but this leaves out erection (2).`,
C:`Option C: Incorrect. Erection (2) and ejaculation (3) continue, but this excludes sperm production (1), which also continues in the testes.`,
D:`Option D: Correct. All three — (1) production of sperms, (2) erection of penis and (3) ejaculation — can still occur. Vasectomy only blocks sperm transport; sperm are still produced (and reabsorbed), erection is a vascular process, and ejaculation still delivers seminal fluid without sperm.`}}
},

/* ==================== 2014 ==================== */
"2014": {
1:{ans:"D",pct:0.64,
concept:`Catabolism vs anabolism. Catabolic reactions break large molecules into smaller ones and release energy; anabolic reactions build large molecules and consume energy. Note that not every biological event is a metabolic reaction at all.`,
opts:{
A:`Option A: Incorrect. Glucose → glycogen is condensation of many glucose units into a polysaccharide — a synthesis (anabolic) reaction requiring energy.`,
B:`Option B: Incorrect. Absorption of glucose is transport of a molecule across the small intestinal epithelium; no chemical bonds are broken, so it is not catabolic.`,
C:`Option C: Incorrect. Emulsification by bile salts is a physical process that breaks large fat droplets into smaller droplets to increase surface area for lipase. No chemical breakdown of the fat molecules occurs.`,
D:`Option D: Correct. Digestion of starch by amylase hydrolyses glycosidic bonds, breaking a polysaccharide into maltose/glucose — a breakdown of a large molecule into smaller ones, i.e. catabolic.`}},

2:{ans:"C",pct:0.32,
concept:`Membrane protein functions in the fluid mosaic model — carriers/channels, receptors, recognition markers and enzymes. Haemoglobin, however, is a soluble protein inside the cytoplasm of red blood cells, not a membrane protein.`,
opts:{
A:`Option A: Incorrect (it does involve membrane proteins). Calcium channels in the presynaptic membrane, and neurotransmitter receptors plus ion channels on the postsynaptic membrane, are all membrane proteins.`,
B:`Option B: Incorrect (it does involve membrane proteins). Glucose is absorbed by active transport and facilitated diffusion via carrier proteins in the epithelial cell membranes of the villi.`,
C:`Option C: Correct answer. Haemoglobin is a globular protein dissolved in the cytoplasm of the red blood cell; oxygen binds to its haem groups. It is not embedded in the plasma membrane, so no membrane protein function is involved.`,
D:`Option D: Incorrect (it does involve membrane proteins). Recognition of pathogens depends on receptor proteins/glycoproteins on lymphocyte and phagocyte surfaces binding to foreign antigens.`}},

3:{ans:"D",pct:0.59,
concept:`Correct microscope procedure — start with low power to locate the specimen, centre the object, then switch to high power and re-focus with the fine adjustment. Field of view and light intensity both decrease at higher power.`,
opts:{
A:`Option A: Incorrect. It stops at low power (10X) only; the question requires observation under high magnification, so the 40X objective must be used.`,
B:`Option B: Incorrect. Starting focusing at 40X is unworkable — the field of view is too small to find the protist, and there is a risk of driving the objective into the slide.`,
C:`Option C: Incorrect. Searching the field with the 40X objective is impractical, and centring is done after searching at low power, not after switching to high power.`,
D:`Option D: Correct. Focus at 10X (1), search at 10X (3), move the slide to centre the protist (5), then focus at 40X (2), and adjust light intensity as needed (6) because high power gives a dimmer image.`}},

4:{ans:"D",pct:0.41,
concept:`Binary fission is asexual reproduction in unicellular organisms: the genetic material replicates and separates, then the cell divides into two roughly equal, genetically identical daughter cells.`,
opts:{
A:`Option A: Incorrect. Organelles are distributed between the two daughter cells, so the amount in each daughter cell is roughly half that of the mother cell (later regenerated as the cell grows).`,
B:`Option B: Incorrect. That describes meiosis. In binary fission the genetic material is replicated first, so each daughter cell receives the same number of chromosomes as the mother cell.`,
C:`Option C: Incorrect. Binary fission produces genetically identical daughter cells; the alleles are the same (barring rare mutation).`,
D:`Option D: Correct. The mother cell divides into two approximately equal halves, so the two daughter cells are similar in size — the defining feature distinguishing binary fission from budding.`}},

5:{ans:"B",pct:0.41,
concept:`Resolving power of the light microscope (~0.2 µm) allows only larger organelles such as the nucleus, chloroplasts and large vacuoles to be seen; sub-microscopic structures need an electron microscope.`,
opts:{
A:`Option A: Incorrect. Ribosomes (~20 nm) are far below the resolution limit of a light microscope.`,
B:`Option B: Correct. Chloroplasts are several micrometres across and pigmented, so they are clearly visible in a photosynthesising protist under high power of a light microscope.`,
C:`Option C: Incorrect. Mitochondria are essentially not resolvable/distinguishable in an unstained temporary mount under an ordinary light microscope.`,
D:`Option D: Incorrect. The endoplasmic reticulum is a system of very thin membranes, only observable by electron microscopy.`}},

6:{ans:"A",pct:0.70,
concept:`Measuring photosynthesis in a closed bell jar: chemical X keeps CO₂ constant, so any change in gas volume is due to net oxygen released. Rate = volume change ÷ time.`,
opts:{
A:`Option A: Correct. Change in reading = 0.4 − 0.1 = 0.3 mL in 30 min, so 0.6 mL per hour. Because CO₂ is held constant by chemical X, the volume increase represents oxygen released.`,
B:`Option B: Incorrect. 0.3 mL is the volume for 30 minutes, not per hour — a unit-conversion error.`,
C:`Option C: Incorrect. The gas volume increase cannot be CO₂ absorption; CO₂ absorbed would decrease volume, and chemical X maintains the CO₂ level anyway.`,
D:`Option D: Incorrect. Wrong gas and wrong time conversion.`}},

7:{ans:"A",pct:0.74,
concept:`Apparent vs actual photosynthesis: gas-exchange methods measure NET oxygen output because the plant respires at the same time. Actual rate = apparent rate + rate of respiration.`,
opts:{
A:`Option A: Correct. The plant respires continuously, using up part of the oxygen made in photosynthesis, so the measured (net) oxygen release underestimates the actual rate.`,
B:`Option B: Incorrect. Transpiration releases water vapour, which would tend to increase gas volume rather than lower the reading.`,
C:`Option C: Incorrect. A temperature rise would expand the gas and increase the reading, giving an overestimate, not an underestimate.`,
D:`Option D: Incorrect. Falling atmospheric pressure would also cause the gas to expand and the index to move further, again giving a higher reading.`}},

8:{ans:"B",pct:0.47,
concept:`A valid control differs in only one variable. To find the actual rate of photosynthesis, the respiration component must be measured separately in the dark and added to the apparent rate.`,
opts:{
A:`Option A: Incorrect. Replacing chemical X with water means CO₂ level is no longer maintained, so volume changes no longer reflect oxygen alone — two variables have changed.`,
B:`Option B: Correct. Identical set-up with chemical X but enclosed in a light-proof box: photosynthesis stops, so the volume decrease measures oxygen consumed by respiration only. Adding this to the apparent rate gives the actual rate of photosynthesis.`,
C:`Option C: Incorrect. Removing the plant altogether leaves nothing to respire; this only checks for physical/apparatus changes.`,
D:`Option D: Incorrect. A chemical that absorbs oxygen removes the very gas being measured, and CO₂ is no longer controlled.`}},

9:{ans:"B",pct:0.70,
concept:`Temperature and enzyme activity: below the optimum, a higher temperature gives a steeper initial rate. Temperature affects the rate, not the final amount of product — with fixed substrate, both curves plateau at the same level.`,
opts:{
A:`Option A: Incorrect. It shows a lower final product amount at 25 °C. Since neither temperature denatures the enzyme, all the substrate is eventually converted.`,
B:`Option B: Correct. The 35 °C curve rises more steeply (nearer the optimum), while the 25 °C curve rises more slowly but eventually reaches the same final amount of product, as substrate quantity is the limiting factor.`,
C:`Option C: Incorrect. Same error as A — the 25 °C curve plateaus at a lower product amount.`,
D:`Option D: Incorrect. It shows 35 °C being slower and yielding less product, which would imply denaturation at 35 °C — below the optimum of human enzymes (~37 °C).`}},

10:{ans:"A",pct:0.50,
concept:`Establishing dominance: when two contrasting parental phenotypes are crossed and all F₁ offspring show one phenotype, that phenotype is dominant.`,
opts:{
A:`Option A: Correct. In Cross I, normal wing female × cut wing male gives 100% normal wing F₁ (both sexes). The cut wing allele must be present in the F₁ yet is not expressed, so normal wing is dominant. This is the most direct evidence.`,
B:`Option B: Incorrect. The F₂ here is not a clean 3:1 across both sexes (cut wing appears only in males, indicating X-linkage). It is weaker, indirect evidence than the uniform F₁.`,
C:`Option C: Incorrect. A numerical majority does not by itself establish dominance, since numbers depend on parental genotypes.`,
D:`Option D: Incorrect. Equal numbers of normal and cut wing males in F₂ shows 1:1 segregation in males, evidence relating to sex linkage, not which allele is dominant.`}},

11:{ans:"A",pct:0.31,
concept:`Sex linkage: a gene on the X-chromosome shows criss-cross inheritance. Reciprocal crosses giving different results in the two sexes is the classic signature of X-linkage.`,
opts:{
A:`Option A: Correct. Cut wing female × normal wing male gave all normal wing F₁ females but all cut wing F₁ males. Males are XY and get their single X from the mother, so the cut wing allele must be carried on the X-chromosome. If the gene were autosomal, the F₁ of both sexes would be identical.`,
B:`Option B: Incorrect. Independent assortment concerns two or more different gene pairs; wing shape is controlled by a single gene.`,
C:`Option C: Incorrect. A male cannot be heterozygous for an X-linked gene since he has only one X.`,
D:`Option D: Incorrect. The 1:1:1:1 F₂ ratio is exactly what X-linkage predicts; it argues against, not for, an autosomal location.`}},

12:{ans:"B",pct:0.80,
concept:`ABO blood groups: I^A and I^B are codominant and both dominant over I^O. Blood group AB requires genotype I^A I^B — one allele from each parent.`,
opts:{
A:`Option A: Incorrect. It includes (2) AB × O, which cannot give AB. An O parent can only donate I^O, so offspring are group A or group B.`,
B:`Option B: Correct. (1) A × B: if both parents are heterozygous (I^A I^O × I^B I^O), a child can receive I^A and I^B, giving AB. (3) AB × AB gives AB offspring in ¼ of cases.`,
C:`Option C: Incorrect. Includes AB × O, which cannot produce AB, and omits the valid A × B cross.`,
D:`Option D: Incorrect. Same problem — AB × O never yields group AB offspring.`}},

13:{ans:"C",pct:0.83,
concept:`Height is a continuously varying, polygenic character strongly influenced by environment, especially nutrition. Genetic change in a large population is far too slow to shift a mean by 10 cm in ~90 years.`,
opts:{
A:`Option A: Incorrect. Mutations are random and mostly harmful or neutral; pollutants cannot direct mutations towards a specific advantageous trait.`,
B:`Option B: Incorrect. Spontaneous mutation occurs at a very low rate and could not spread through an entire national population within a few generations.`,
C:`Option C: Correct. Improved diet — more protein, calcium, vitamins and total energy during childhood — allows fuller expression of the growth potential set by the genotype. This environmental effect acts within one generation.`,
D:`Option D: Incorrect. Natural selection requires differential survival and reproduction over many generations; in a developed country with low mortality there is no such strong selection pressure.`}},

14:{ans:"A",pct:0.45,
concept:`ATP yield in respiration: glycolysis gives a small net gain of ATP; the Krebs cycle produces ATP directly. Reduction of pyruvate to lactic acid produces no ATP — it only regenerates NAD.`,
opts:{
A:`Option A: Correct. Both glycolysis (net 2 ATP per glucose) and the Krebs cycle produce ATP.`,
B:`Option B: Incorrect. Includes (3), the conversion of pyruvate to lactic acid, which yields no ATP; it consumes reduced NAD to oxidise it back to NAD.`,
C:`Option C: Incorrect. Same error with (3), and it wrongly excludes glycolysis, the ATP-yielding step of anaerobic respiration.`,
D:`Option D: Incorrect. Statement (3) does not generate ATP, so not all three are correct. This is the most common misconception — students confuse "allows glycolysis to keep making ATP" with "makes ATP itself".`}},

15:{ans:"D",pct:0.35,
concept:`Domain Eukarya includes all organisms whose cells have a true membrane-bound nucleus — Protista, Fungi, Plantae and Animalia. Only prokaryotes fall outside Eukarya.`,
opts:{
A:`Option A: Incorrect. It excludes the mouse, an animal, which is certainly eukaryotic.`,
B:`Option B: Incorrect. It excludes Amoeba. Being unicellular does not make an organism prokaryotic — Amoeba is a protist with a nucleus and membrane-bound organelles.`,
C:`Option C: Incorrect. It excludes yeast, which is a unicellular fungus and therefore eukaryotic.`,
D:`Option D: Correct. Yeast (Fungi), Amoeba (Protista) and mouse (Animalia) all have nucleated cells, so all three belong to domain Eukarya.`}},

16:{ans:"A",pct:0.71,
concept:`Transcription occurs in the nucleus: one DNA strand acts as template and RNA polymerase assembles complementary RNA nucleotides into mRNA. Amino acids are involved only later, in translation.`,
opts:{
A:`Option A: Correct. DNA is the template and mRNA is the product, so both are directly involved in transcription.`,
B:`Option B: Incorrect. Amino acids play no part in transcription; they are the building blocks used in translation.`,
C:`Option C: Incorrect. It omits DNA, the essential template, and wrongly includes amino acids.`,
D:`Option D: Incorrect. Including amino acids confuses transcription with translation.`}},

17:{ans:"B",pct:0.81,
concept:`Using a dichotomous key — at each numbered step, choose the one alternative that matches the specimen and follow the direction given, until a species name is reached.`,
opts:{
A:`Option A: Incorrect for Fish Y. Fish Y has one eye on each side (1b → 3) and no spots on the body (3b → 5), so step 4 (chin whiskers) is never reached and Pseudupeneus maculatus cannot be the answer.`,
B:`Option B: Correct. Fish X lies flat with both eyes on the top of the head (1a → 2) and has a short, blunt tail (2b) → Bothus mancus. Fish Y has one eye on each side (1b → 3), no spots (3b → 5) but clear stripes (5a) → Holocentrus rufus.`,
C:`Option C: Incorrect. Aetobatus narinari requires a long whip-like tail, which Fish X does not have; and Fish Y does have stripes, so it is not Parapriacanthus guentheri.`,
D:`Option D: Incorrect. Fish X lacks the whip-like tail, and Sphoeroides spengleri is reached only via the "spots plus no chin whiskers" route, which does not apply to the striped Fish Y.`}},

18:{ans:"A",pct:0.31,
concept:`Reliable evidence for phylogeny comes from inherited features: comparative anatomy (homologous internal structures) and molecular data (DNA or amino acid sequences). Similar habitats and behaviours may arise by convergent evolution.`,
opts:{
A:`Option A: Correct. (1) Amino acid sequences of the same functional protein reflect the underlying DNA base sequence, providing direct molecular evidence of common ancestry. (2) Internal body structures reveal homologous structures inherited from a common ancestor.`,
B:`Option B: Incorrect. Includes (3). Two unrelated fish living in the same habitat may develop analogous features by convergent evolution, so habitat and behaviour are unreliable indicators.`,
C:`Option C: Incorrect. It includes the unreliable habitat/behaviour comparison and omits the strongest evidence, molecular sequence data.`,
D:`Option D: Incorrect. (3) is not valid phylogenetic evidence, so not all three are acceptable.`}},

19:{ans:"C",pct:0.14,
concept:`DNA fingerprinting compares patterns of DNA fragment lengths from variable non-coding regions. It identifies or matches samples; it does NOT read the actual order of bases (that is DNA sequencing).`,
opts:{
A:`Option A: Incorrect (it is an application). Forensic science matches DNA profiles from crime-scene samples with those of suspects, and is also used in paternity testing.`,
B:`Option B: Incorrect (it is an application). Profiles can reveal marker patterns associated with inherited disorders, allowing screening of individuals or families.`,
C:`Option C: Correct answer. Sequencing the human genome determines the precise base sequence of all the DNA, which requires sequencing technology, not fingerprinting. Fingerprinting only compares banding patterns of fragments. Only 14% of candidates chose this — most did not distinguish profiling from sequencing.`,
D:`Option D: Incorrect (it is an application). DNA profiles are used to authenticate species of medicinal herbs and to detect adulterants in Chinese medicines.`}},

20:{ans:"D",pct:0.78,
concept:`Most water vapour leaves a leaf through the stomata, which are far more numerous in the lower epidermis. Light causes guard cells to become turgid and open the stomata, so both curves rise with light intensity and then level off.`,
opts:{
A:`Option A: Incorrect. Air spaces in the spongy mesophyll help water vapour move within the leaf, but vapour still cannot escape without stomata. The limiting factor is the number of stomata.`,
B:`Option B: Incorrect. Greater exposure of the upper epidermis to light and heat would tend to increase evaporation there, so this cannot explain the lower rate.`,
C:`Option C: Incorrect. A lower temperature below the leaf would reduce evaporation from the lower surface — the opposite of the observed result.`,
D:`Option D: Correct. The upper epidermis has far fewer stomata than the lower epidermis, so fewer pores are available for water vapour to diffuse out, giving a consistently lower transpiration rate at all light intensities.`}},

21:{ans:"D",pct:0.65,
concept:`A weight potometer measures water loss directly as the fall in mass over time. Blocking one surface with vaseline confines the measured loss to the other surface.`,
opts:{
A:`Option A: Incorrect. Counting stomata measures stomatal density, a structural feature, not the rate of water loss.`,
B:`Option B: Incorrect. Bubbles emerging from a leaf in warm water indicate air escaping through stomata; this shows the presence and relative number of stomata, not the rate of water vapour loss.`,
C:`Option C: Incorrect. A bubble potometer measures water uptake, and shining light on one surface does not restrict water loss to that surface.`,
D:`Option D: Correct. Vaseline on the upper epidermis blocks its stomata, so the weight loss recorded is transpiration through the lower epidermis; repeating with the lower surface coated gives the upper epidermis rate. Only one variable is changed each time.`}},

22:{ans:"C",pct:0.73,
concept:`Transpiration is the loss of water vapour mainly through the stomata of leaves, so the total rate depends chiefly on total leaf surface area (number and size of leaves).`,
opts:{
A:`Option A: Incorrect. Height affects the distance water must be transported, but it is not itself the site of evaporation.`,
B:`Option B: Incorrect. Roots absorb water. Extensive roots allow lost water to be replaced, but they do not cause water loss.`,
C:`Option C: Correct. A tree has vastly more leaves, hence a far greater total number of stomata and greater total leaf surface area, so much more water vapour diffuses out per unit time.`,
D:`Option D: Incorrect. Xylem is the transport tissue; a large amount of xylem enables a high transpiration rate to be sustained but is not the cause of it.`}},

23:{ans:"A",pct:0.61,
concept:`Mitochondria are the sites of aerobic respiration. Cells with high energy demands — such as those carrying out active transport — contain more mitochondria.`,
opts:{
A:`Option A: Correct. Root hair cells actively transport mineral ions such as nitrate into the cell against the concentration gradient, a highly energy-demanding process, so they are densely packed with mitochondria.`,
B:`Option B: Incorrect. Leaf epidermal cells are mainly protective, usually non-photosynthetic and metabolically relatively inactive.`,
C:`Option C: Incorrect. Spongy mesophyll cells photosynthesise and respire, but they do not perform large amounts of active transport.`,
D:`Option D: Incorrect. Palisade mesophyll cells are packed with chloroplasts, not mitochondria; much of their ATP requirement in the light is met by photosynthesis itself.`}},

24:{ans:"A",pct:0.63,
concept:`The human permanent dental formula is i 2/2, c 1/1, pm 2/2, m 3/3 — a total of 32 teeth, counted outward from the midline in each half jaw.`,
opts:{
A:`Option A: Correct. 2123/2123 corresponds to 2 incisors, 1 canine, 2 premolars and 3 molars in each half jaw, matching the X-ray.`,
B:`Option B: Incorrect. 2132 would mean 3 premolars and only 2 molars.`,
C:`Option C: Incorrect. 3212 reverses the sequence and implies 3 incisors and 1 premolar per half jaw.`,
D:`Option D: Incorrect. 2312 implies 3 canines per half jaw; humans have only one canine on each side of each jaw.`}},

25:{ans:"B",pct:0.47,
concept:`Physical (mechanical) digestion breaks food into smaller pieces or droplets without changing its chemical nature — chewing, churning by the stomach, and emulsification of fats by bile.`,
opts:{
A:`Option A: Incorrect. Structure 3 is the large intestine, where water and mineral salts are reabsorbed and faeces are formed; no digestion of either kind occurs there.`,
B:`Option B: Correct. Structure 1 is the stomach, whose muscular walls churn food into chyme, and structure 4 is the gall bladder, which stores and releases bile that emulsifies fats into small droplets.`,
C:`Option C: Incorrect. It includes the large intestine (3) and omits the churning action of the stomach.`,
D:`Option D: Incorrect. Adding the large intestine (3) to the correct pair makes the answer wrong.`}},

26:{ans:"A",pct:0.62,
concept:`Fat digestion requires bile (produced by the liver) and pancreatic juice (containing lipase). The key word is "producing" — the gall bladder only stores bile, and salivary glands act on starch.`,
opts:{
A:`Option A: Correct. Structure 2 is the pancreas, which produces pancreatic juice containing lipase, and structure 5 is the liver, which produces bile for emulsification.`,
B:`Option B: Incorrect. Structure 6 is the salivary gland, which secretes salivary amylase for starch digestion; it has no role in fat digestion.`,
C:`Option C: Incorrect. It omits the pancreas, the source of lipase, and includes the salivary gland.`,
D:`Option D: Incorrect. It adds the salivary gland, whose secretion does not act on fat.`}},

27:{ans:"B",pct:0.62,
concept:`During inhalation the diaphragm contracts and flattens, thoracic volume increases and lung pressure falls below atmospheric; during exhalation the diaphragm relaxes and pressure rises above atmospheric.`,
opts:{
A:`Option A: Incorrect. Over RT the pressure begins above 760 mmHg (exhalation) and only later falls below it, so the period covers both phases.`,
B:`Option B: Correct. Between S and U the curve lies below the atmospheric pressure of 760 mmHg. Lung pressure lower than atmospheric means the thoracic cavity is expanding — the diaphragm muscles are contracting during inhalation.`,
C:`Option C: Incorrect. From T to V the pressure rises from the minimum through 760 up to a maximum, so it includes exhalation, when the diaphragm is relaxing.`,
D:`Option D: Incorrect. From U to W the pressure is above atmospheric, so air is being forced out; the diaphragm is relaxed and doming upwards.`}},

28:{ans:"C",pct:0.53,
concept:`Day 1 of the menstrual cycle is the first day of menstruation. Ovulation occurs around day 14, and the fertile period is the few days around ovulation (ovum survives 1–2 days, sperm 2–3 days).`,
opts:{
A:`Option A: Incorrect. The lining starts breaking down around 28/3, so this is menstruation (days 1–4). No ovum is present.`,
B:`Option B: Incorrect. 4/4 to 8/4 is early in the follicular phase, when the follicle is still developing and the lining is at its thinnest. Ovulation has not yet occurred.`,
C:`Option C: Correct. Counting from 28/3 as day 1, ovulation is expected around 10–11/4 (about day 14), and the graph shows the lining thickening rapidly. Copulation between 11/4 and 15/4 coincides with the presence of a newly released ovum, so fertilisation and implantation are most likely.`,
D:`Option D: Incorrect. By 18/4 to 21/4 the ovum released at ovulation has already degenerated, so fertilisation cannot occur even though the lining is thick.`}},

29:{ans:"C",pct:0.78,
concept:`The placenta is the exchange organ between maternal and foetal blood, taking over functions that organs of the newborn will later perform — gas exchange (like the lungs) and nutrient supply (like the small intestine).`,
opts:{
A:`Option A: Incorrect. It includes (1). Bone provides support and protection, makes blood cells and stores calcium — the placenta does not perform structural support functions.`,
B:`Option B: Incorrect. Again includes bone, and the gas exchange role is wrongly omitted.`,
C:`Option C: Correct. (2) Like the lungs, the placenta allows oxygen to diffuse into and carbon dioxide out of the foetal blood; (3) like the small intestine, it transfers dissolved food substances into the foetal blood.`,
D:`Option D: Incorrect. Statement (1) is invalid, so not all three roles apply.`}},

30:{ans:"D",pct:0.69,
concept:`Only about 10% of energy passes between trophic levels, so eating producers directly supports more people. Livestock farming also generates large greenhouse gas emissions.`,
opts:{
A:`Option A: Incorrect. Faster growth of vegetables relates to food supply and yield, not environmental protection.`,
B:`Option B: Incorrect. Farm animals are domesticated species, not endangered ones, so a vegetarian diet does not directly protect endangered species.`,
C:`Option C: Incorrect. It is biologically inaccurate: plants also respire and consume oxygen. The main environmental issue is greenhouse gas emission, not oxygen balance.`,
D:`Option D: Correct. Livestock farming releases large amounts of carbon dioxide (and methane), and requires clearing of forests for pasture and feed crops, which further reduces carbon fixation. Reducing meat consumption therefore lowers greenhouse gas emissions.`}},

31:{ans:"D",pct:0.51,
concept:`Predator and prey populations oscillate out of phase, with the predator peak lagging behind the prey peak. Because energy is lost between trophic levels, the predator population is always much smaller.`,
opts:{
A:`Option A: Incorrect. Amplitude of fluctuation does not identify the predator. P (the prey) actually shows the larger swings.`,
B:`Option B: Incorrect. A low minimum value does not indicate a predator; a large prey population can also crash to very low numbers.`,
C:`Option C: Incorrect. It is P, not Q, that fluctuates more widely, so the reasoning contradicts the graph even though the identification of Q as predator happens to be right.`,
D:`Option D: Correct. Q consistently peaks at a lower number than P, and its peaks lag slightly behind those of P. A predator population must be smaller than its prey population because of energy loss along the food chain.`}},

32:{ans:"C",pct:0.61,
concept:`Active immunity: the body's own lymphocytes are stimulated by antigens to make antibodies and memory cells (long-lasting). Passive immunity: ready-made antibodies are received from another source (immediate but short-lived).`,
opts:{
A:`Option A: Incorrect. The type is wrong. Although antibodies are produced by white blood cells, in this case they were made by the mother, so the infant's immunity is passive.`,
B:`Option B: Incorrect. The statement about antibodies attacking pathogens is true of all antibodies and does not distinguish active from passive immunity; the classification "active" is wrong.`,
C:`Option C: Correct. The infant merely receives the mother's antibodies, so its own lymphocytes are not stimulated and no memory cells are produced. This is why the protection is temporary — the defining feature of passive immunity.`,
D:`Option D: Incorrect. The classification "passive" is right but the explanation is wrong — the antibodies received act immediately; they do not wait for a second exposure.`}},

33:{ans:"B",pct:0.45,
concept:`In the nitrogen cycle, decomposition (putrefaction) by saprophytic bacteria and fungi breaks down proteins and nitrogenous waste, releasing ammonium compounds back into the soil.`,
opts:{
A:`Option A: Incorrect. Nitrification is the oxidation of ammonium compounds to nitrites and then nitrates in the soil; the nitrogen is already outside the organisms before this step.`,
B:`Option B: Correct. Decomposers digest the organic nitrogen-containing compounds (proteins, urea) in dead organisms and excreta, releasing ammonium compounds into the soil — the step that returns nitrogen from organisms to the environment.`,
C:`Option C: Incorrect. Denitrification reduces soil nitrates to nitrogen gas under anaerobic conditions; it removes nitrogen from soil to atmosphere.`,
D:`Option D: Incorrect. Nitrogen fixation is the opposite direction — atmospheric nitrogen is converted into nitrogenous compounds.`}},

34:{ans:"D",pct:0.54,
concept:`Skeletal muscles work in antagonistic pairs and can only pull, never push. Maintaining a static posture still requires contraction of the muscles holding the joints in position.`,
opts:{
A:`Option A: Incorrect. 1 and 2 are the posterior muscles (hamstrings and calf). With the knee held straight and the heel pressed down, these are the relaxed/stretched members of the pairs.`,
B:`Option B: Incorrect. It includes 1, the hamstring group. Contracting the hamstrings would bend the knee, but the knee is extended.`,
C:`Option C: Incorrect. It includes 2, the calf muscle. Contraction of the calf muscle would raise the heel, but the heel is pressed towards the mat.`,
D:`Option D: Correct. Muscle 4, the anterior thigh muscle (quadriceps), contracts to keep the knee straight, and muscle 3, the anterior lower-leg muscle, contracts to pull the foot upwards towards the shin so the heel can press down.`}},

35:{ans:"B",pct:0.58,
concept:`A flexor contracts to decrease the angle at a joint; an extensor contracts to increase it. At the ankle, raising the foot towards the shin is flexion.`,
opts:{
A:`Option A: Incorrect. It includes 2, the calf muscle, which pulls the heel upward and straightens the ankle joint — this is an extensor.`,
B:`Option B: Correct. Muscle 1, the posterior thigh muscle (hamstrings), bends the knee, and muscle 3, the anterior lower-leg muscle, bends the ankle by raising the foot. Both decrease the angle of their joints and are flexors.`,
C:`Option C: Incorrect. Both named muscles are extensors: 2 straightens the ankle and 4 (quadriceps) straightens the knee.`,
D:`Option D: Incorrect. It includes 4, the quadriceps, the extensor of the knee joint. Note that "contracting" and "flexor" are not the same idea — an extensor also contracts when it is doing the work.`}},

36:{ans:"C",pct:0.77,
concept:`In a fair test of whether auxins promote growth, the only variable that may differ between the two set-ups is the presence of auxins; everything else must be identical.`,
opts:{
A:`Option A: Incorrect. Two variables differ: one coleoptile has its own cut tip replaced (living tissue) while the other has an agar block. There is no auxin-free agar control.`,
B:`Option B: Incorrect. Both set-ups receive agar blocks containing auxins, so there is no control lacking auxin and no valid comparison.`,
C:`Option C: Correct. Both coleoptiles are decapitated and both carry an agar block; the only difference is that one block contains auxins and the other does not. Greater elongation in the auxin-treated coleoptile therefore supports the hypothesis, and the plain agar block rules out any effect of the agar itself.`,
D:`Option D: Incorrect. The two set-ups differ in more than one factor — one coleoptile is intact and unilaterally illuminated while the other is decapitated with an auxin block. Unequal light also introduces phototropism.`}}
}

};
