// data.jsx — content (from resume + portfolio repo)

const HERO = {
  name: "Jericho Mordasiewicz",
  title: "Nanotechnology Engineering",
  blurb: "Hi, I'm Jericho, a 3rd Year Nanotechnology Engineering student at the University of Waterloo. This site shows my projects, coauthorships, and internship timeline in a more thorough way than a resume allows. Cheers!",
};

const NOW = [
  { k: "Graduation Date", v: "April 2028" },
  { k: "Program",  v: "Nanotech Eng., U. Waterloo" },
  { k: "GPA",      v: "3.6 / 4.0" },
];

const CONTACT = [
  { label: "Email",    href: "mailto:jericho@mordasiewicz.com" },
  { label: "GitHub",   href: "https://github.com/jeriExe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jericho-mordasiewicz" },
];

// Internships, content from resume
const JOBS = [
  {
    id: "fl-hardware",
    company: "Formlabs",
    role: "Print Process Hardware R&D Engineering Intern",
    location: "Somerville, MA",
    date: "Jan 2026 – Apr 2026",
    shortDate: "Jan 26",
    current: false,
    logo: "uploads/formlabs_logo.png",
    tags: ["Hardware", "DOE", "Python", "SQLite"],
    bullets: [
      "Designed and ran experiments (DOE) across material configurations to debug hardware on next-gen SLA printers",
      "Implemented motor control routines to execute optimal force-paths, improving print quality across the resin portfolio",
      "Improved force-measurement sensitivity 2x by implementing a real-time peak-picking algorithm for in-situ acquisition",
      "Mapped force, temperature, and ultrasonic sensor data with SQLite and Python to diagnose layer-level failure modes",
      "Cut next-gen film diagnostic runtime from 30min to 10min by reworking the collection pipeline and clearing tech debt",
    ],
  },
  {
    id: "fl-optimization",
    company: "Formlabs",
    role: "Print Optimization Intern",
    location: "Somerville, MA",
    date: "Sep 2025 – Jan 2026",
    shortDate: "Sep 25",
    logo: "uploads/formlabs_logo.png",
    tags: ["Materials", "Python", "Product"],
    bullets: [
      "Partnered with software, product, and materials teams to ship a new resin on the Form 4 product line",
      "Tuned print settings via JSON slicer configs for next-gen materials, achieving 100% validation print success",
      "Built Python tooling for electromechanical sensor logs to identify root causes of print failures and increase yield",
      "Drove print setting handoffs to production, shortening the cycle from formulation lock to a release-ready profile",
    ],
  },
  {
    id: "nm-materials",
    company: "Nano and Micro Systems Lab (NMSL)",
    role: "Materials R&D Engineering Intern",
    location: "Waterloo, ON",
    date: "Jan 2025 – Apr 2025",
    shortDate: "Jan 25",
    logo: "uploads/nm_darkmode.png",
    tags: ["Cleanroom", "Electrochem", "QA"],
    bullets: [
      "Developed clean room quality assurance (QA) protocols, allowing a 150% increase in device production volume",
      "Optimized material composition and spray coating for working electrodes with a 95% process yield",
      "Conducted root cause analysis with electrochemical methods (CV, EIS), eliminating photoanode degradation",
    ],
  },
  {
    id: "nm-process",
    company: "Nano and Micro Systems Lab (NMSL)",
    role: "Process Development Engineering Intern",
    location: "Waterloo, ON",
    date: "Apr 2024 – Aug 2024",
    shortDate: "Apr 24",
    logo: "uploads/nm_darkmode.png",
    tags: ["Process Flow", "DFM", "SOPs"],
    bullets: [
      "Created a TiO2 deposition process, increasing device yield by 15% and reducing manufacturing time by 40%",
      "Designed and implemented DFM practices, reducing QA runtime from 7h to 4h, documented with SOPs",
    ],
  },
];

// Featured projects from docs/projects/*.md
const RAW = "uploads/";

const PROJECTS = [
  {
    id: "tio2",
    title: "Controlled Laser-Induced Defect Engineering in TiO\u2082 Enhances Charge Separation and Solar Driven Activity",
    short: "Laser-Induced Defect Engineering in TiO\u2082",
    sub: "Solar panels & water sensing photoanode thin films",
    status: "Published",
    span: "span-2-2",
    img: "uploads/fs_laser_full.jpg",
    images: [
      { src: "uploads/fs_laser_full.jpg", alt: "Femtosecond laser setup used for defect engineering" },
      { src: "uploads/degraded .jpg",  alt: "Photoanode degradation during testing" },
    ],
    paragraphs: [
      "My role focused on developing laser-induced defect TiO\u2082 photoanodes for applications in solar energy conversion, organic pollutant oxidation (breaking down harmful chemicals), and wastewater sensing. Key objectives included achieving uniform defect engineering, preventing photoanode degradation, and ensuring reliable fabrication for industrial adoption.",
      "Using root cause analysis with cyclic voltammetry (CV) and electrochemical impedance spectroscopy (EIS), I identified and mitigated degradation mechanisms in TiO\u2082, enabling stable performance. I optimized spray-coating deposition parameters (e.g., material composition, pressure, and surface treatment) to control film quality, nanosecond-pulsed TiO\u2082 for Ti\u00b3\u207a/oxygen vacancies, and femtosecond-pulsed TiO\u2082 for surface-localized Ti\u00b3\u207a/oxygen vacancies. Batch-to-batch variability was addressed through Python-driven data analysis, which correlated process inputs with material properties. Standardized protocols were then developed to ensure reproducibility across academic and industrial settings.",
    ],
    tech: [
      "Electrochemical methods: CV, LSV, EIS, for redox couples, (ir)reversible capacitive effects, double layer charging, approximate electrochemical surface area, and solar light",
      "Nanosecond/femtosecond pulsed lasers to tailor TiO\u2082 defect profiles",
      "Spray coating, optimized for 95% throughput with controlled porosity/thickness",
      "Data acquisition with BioLogic and analysis with Python for quality analysis and control",
      "Material characterization with SEM, and XRD to validate defect states (Ti\u00b3\u207a, oxygen vacancies), UV-vis for pollutant oxidation behavior",
    ],
    results: [
      "Eliminated photoanode degradation, enabling the material to be photocatalytically tested",
      "Achieved 95% throughput in electrode fabrication via spray-coating optimization",
      "Reduced batch variability by 70%, process design validated for small scale",
      "Published :D",
    ],
  },
  {
    id: "deposition",
    title: "Photoanode Thin Film Deposition Process Design",
    short: "Thin Film Deposition Process Design",
    sub: "MANTECH COD thin films, focused on yield & adhesion",
    status: "Publication Pending",
    span: "span-2-2",
    img: "uploads/PeCOD.jpg",
    imageLayout: "bento",
    images: [
      { src: "uploads/before.jpg", alt: "Before implementation of deposition process" },
      { src: "uploads/after.jpg",  alt: "After implementation of deposition process" },
      { src: "uploads/PeCOD.jpg",  alt: "MANTECH PeCOD L50, IoT around the deposited thin films" },
    ],
    paragraphs: [
      "My role was to develop a deposition process for MANTECH's chemical oxygen demand (COD) biosensors. I wanted to achieve a uniform coating of the photoanode material on the substrate, increase yield, and improve adhesion (thereby lifetime of the sensor).",
      "My two main focuses were on the environmental factors affecting the deposition process (temperature, humidity) as well as the human error/variability observed between batches. I tuned the solution's surface tension to ensure it could be evenly deposited onto the substrate with the desired thickness and porosity.",
      "The initial results were promising but indicated room for improvement in yield and adhesion. To enhance the yield, I adjusted deposition parameters and implemented new quality assurance (QA) steps using data acquisition. The adhesion issues between batches were solved by employing a surface treatment normally used for silicon wafers in the Quantum Nano Fabrication and Characterization Facility (QNFCF) cleanroom. I then created comprehensive standard operating procedures (SOPs) and instructional videos to ensure the process could be consistently replicated for device production.",
    ],
    note: "I signed an NDA with MANTECH and am unable to share the exact details of the deposition process.",
    tech: [
      "UV-VIS spectroscopy to monitor oxidation of reference pollutants",
      "Plasma etching to clean and functionalize the surface for wetability (in cleanroom)",
      "Open source process flow tools to design, test, and ensure QA standards are met",
      "Python for data acquisition, analysis and process optimization",
    ],
    results: [
      "Quality assurance (QA) protocols, allowed a 150% increase in device production volume",
      "Device yield was increased by 15%, manufacturing time reduced by 40%",
      "Environmental factors no longer have drastic (or any observed) affects on yield",
      "MANTECH's in-house average QA runtime was reduced from 6h to 3h due to the film's stable nature",
    ],
  },
  {
    id: "FormJet",
    title: "FormJet, SLA wash & cure",
    short: "FormJet",
    sub: "Formlabs 2026 IAP (MIT, Harvard, Olin) Hackathon: FormJet is a benchtop SLA (resin) 3D printing post-processing station that automates the wash and cure steps.",
    status: "Complete",
    span: "span-2-2",
    img: "uploads/formJet_full_static.jpeg",
    images: [
      { src: "uploads/formJet_full_static.jpeg", alt: "FormJet", aspect: "9/16" },
      { src: "uploads/formJet_group.jpeg", alt: "The Group: Formlabs Friends :)" },
      { src: "uploads/formJet_drain.jpeg", alt: "FormJet Drain Photo" },
      { src: "uploads/formJet_demo_video.mp4", alt: "FormJet Demo Video", aspect: "9/16" },
    ],
    paragraphs: [ 
      "FormJet was a 48 hour Formlabs IAP hackathon project that compresses the multi-step post-processing workflow of washing, drying, and UV curing into a single station. To avoid the open IPA tanks that make can make traditional post-processing hazardous in a workspace, we built a shower style wash system that sprays FormWash solution and then water to rinse the part. The build plate and part are mounted on a rotating theta-z axis while a nozzle traverses z, ensuring uniform coverage. After washing, an array of UV LEDs cure the part while it continues to rotate so it cures evenly. My role on the team comprised of mocking up various CAD models, process flow, and user interaction.",
      "I owned the build plate mount, the enclosure brackets, the run-off drain at the bottom of the chamber, as well as the nozzle and the lead-screw interface that drives it up and down the Z-axis. In hindsight, the nozzle itself is the part I would most want to redo. The spray geometry we settled on under time pressure works, but a more optimized nozzle (something similar to an array of upsized pressure washer nozzles) would allow for better performance under conditions such as high viscosity resins and hard to reach part geometries. The rest of the project came together nicely, and we showed a working wash-and-cure cycle by the end of the 48 hours. (before promptly glueing our nozzle to the lead screw 😭)",
    ],
    tech: [
      "Onshape",
      "Rapid prototyping with SLA 3D printing and laser cutting",
      "Hot glue gun",
    ],
    futureImprovements: [
      "Redesigning the nozzle, as mentioned above, to optimize geometry and allow for higher viscosity resins",
      "Some sort of mount so the part can be washed and cured without the build plate, important for geometries prone to trapping resin and shrinkage during curing",
      "Implement wash and cure profiles across resin types",
      "Heaters and insulation to widen the material portfolio that can be cured sufficiently",
    ],
  },
  {
    id: "crimp",
    title: "CrimpMark, Climbing Grip Strength",
    short: "CrimpMark",
    sub: "Formlabs Fall 2025 Intern Hackathon: Track crimp (small ledge) strength at home without a hangboard or a trip to the climbing gym.",
    status: "Complete",
    span: "span-2-2",
    img: "uploads/crimpmark_web.jpeg",
    imgPosition: "30% top",
    imageLayout: "stack-pair",
    images: [
      { src: "uploads/crimpmark_web.jpeg", alt: "CrimpMark web app: Live force, session max & average" },
      { src: "uploads/crimpmark_full.jpeg", alt: "Device: crimp block, enclosure+loadcell,and Arduino + amp breakout" },
      { src: "uploads/crimpmark_hold.jpeg", alt: "Crimp with offset loading to ensure there's no net moment to rotate the hold" },
      { src: "uploads/crimpmark_engemeering.jpeg", alt: "Last second \"engineering\"" },
    ],
    paragraphs: [
      <React.Fragment>CrimpMark was a project I built during the Formlabs Fall 2025 intern hackathon. The goal was to benchmark crimp progress (force on small ledges) without needing a hangboard mounted to a doorframe or a trip to the climbing gym. The system is an Arduino Uno R4 WiFi reading an HX711 amplifier off a load cell, streamed over bluetooth to a browser app (<a href="https://jeriexe.github.io/crimpmark/" target="_blank" rel="noopener">live app</a>, <a href="https://github.com/jeriExe/crimpmark" target="_blank" rel="noopener">repo</a>) that shows live force (as equivalent mass), average, the session max, and previous session bests. The frontend was built with Claude.</React.Fragment>,
      <React.Fragment>The original plan was a 200kg S-type load cell inline with the crimp, a clean way to do this. What actually ended up showing up was a 2000kg cell (I guess I shouldn't have picked the cheapest one?). I decided to pull a load cell out of a scrapped Form 4 at the office and design an enclosure and footblock around it instead, with a printed half ring acting as the tensile element between the crimp block and the cell. The enclosure and footblock were printed on a Form 4 and Form 4L in Tough 2000V2. Looking back I should've over specced the ring diameter (or done FEA given more time). I pulled hard enough right before demo testing to snap it but saved it with some last second <em>engineering</em>.</React.Fragment>,
    ],
    tech: [
      "Onshape",
      "Arduino Uno R4 WiFi with HX711 amplifier and load cell, flashed via PlatformIO",
      "Web app reading the load cell over bluetooth, requires Chrome or Edge",
      "SLA prints on Form 4 and Form 4L for the enclosure and footblock",
    ],
    futureImprovements: [
      "S-type load cell inline with crimp, integrated with custom pcb and lipo powered. This would remove the need for the footblock and would be much more compact",
      "A thicker o-ring with more cross section margin, after the pre-demo snap",
      "A native app instead of a web app, so sessions log in the background without keeping a browser tab open",
      "A range of crimp blocks (different ledge depths and finger stacked ergonomic profiles)",
    ],
  },
  {
    id: "ink",
    title: "Nano Silver Conductive Inks",
    short: "Nano Silver Conductive Inks",
    sub: "Flexible PCBs for wearable electronics",
    status: "In Progress",
    span: "span-2-2",
    img: "uploads/AgNP.jpg",
    images: [
      { src: "uploads/AgNP.jpg",            alt: "Silver nanoparticle ink — synthesis & decanting" },
      { src: "uploads/uwnrg_chip_render.jpg", alt: "Conductive Hybrid Ink Printer (CHIP) render" },
    ],
    paragraphs: [
      "In this project, I led a design team focused on the synthesis and optimization of conductive inks for additive manufacturing, specifically targeting silver nanoparticle formulations for flexible PCBs in wearable electronics. This ink could be used by the printer the mechanical team was designing (CHIP).",
      "My leadership responsibilities included setting project milestones, aligning team goals, and facilitating R&D, production, and contributing as an IC. I established clear communication channels and coordinated the creation of technical documentation such as SOPs and BOMs to ensure knowledge transfer and process consistency."
    ],
    tech: [
      "SEM/XRD/DLS for nanoparticle morphology, crystalline structure, and size distribution, respectively.",
      "Collaborative tools (Git, Notion) for version control and technical documentation",
      "Python scripts for analyzing conductivity/adhesion test data",
      "General wet lab skills",
      "Thermal sintering ovens with programmable temperature profiles",
    ],
    workingOn: [
      "Conductivity improvements: mainly particles diameter control and mass loading",
      "Viscosity control: Optimizing binder-to-solvent ratios for printhead compatibility",
      "Sintering processes: Literature review and empirical testing",
    ],
  },
];

Object.assign(window, { HERO, NOW, CONTACT, JOBS, PROJECTS });
