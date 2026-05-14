
/* ─ DATA ─ */
const papers = [
  {title:"Multimedia Programming Final Exam",subject:"Multimedia",year:2024,level:"Final Year",tag:"tag-mm",label:"Multimedia"},
  {title:"Networking Protocols & Security",  subject:"Networking",year:2024,level:"Year 3",   tag:"tag-net",label:"Networking"},
  {title:"Software Development Principles",  subject:"Software",  year:2024,level:"Year 2",   tag:"tag-sd", label:"Software Dev"},
  {title:"Interactive Media & Animation",    subject:"Multimedia",year:2023,level:"Year 2",   tag:"tag-mm", label:"Multimedia"},
  {title:"LAN/WAN Architecture & Routing",   subject:"Networking",year:2023,level:"Year 3",   tag:"tag-net",label:"Networking"},
  {title:"Data Structures & Algorithms",     subject:"Software",  year:2023,level:"Year 1",   tag:"tag-sd", label:"Software Dev"},
  {title:"Audio/Video Processing Techniques",subject:"Multimedia",year:2022,level:"Year 3",   tag:"tag-mm", label:"Multimedia"},
  {title:"Cloud Infrastructure & DevOps",    subject:"Networking",year:2022,level:"Final Year",tag:"tag-net",label:"Networking"},
  {title:"OOP & Design Patterns",            subject:"Software",  year:2022,level:"Year 2",   tag:"tag-sd", label:"Software Dev"},
  {title:"Web Multimedia & CSS Animation",   subject:"Multimedia",year:2021,level:"Year 1",   tag:"tag-mm", label:"Multimedia"},
  {title:"Network Security & Penetration",   subject:"Networking",year:2021,level:"Final Year",tag:"tag-net",label:"Networking"},
  {title:"Software Testing & QA",            subject:"Software",  year:2021,level:"Year 3",   tag:"tag-sd", label:"Software Dev"},
];

const markSchemes = [
  {title:"Multimedia Programming Final — Mark Scheme",subject:"Multimedia",year:2024,level:"Final Year",pages:12,tag:"tag-mm", label:"Multimedia"},
  {title:"Networking Protocols — Mark Scheme",        subject:"Networking",year:2024,level:"Year 3",   pages:8, tag:"tag-net",label:"Networking"},
  {title:"Software Development Principles — Marks",   subject:"Software",  year:2024,level:"Year 2",   pages:10,tag:"tag-sd", label:"Software Dev"},
  {title:"Interactive Media Exam — Mark Scheme",      subject:"Multimedia",year:2023,level:"Year 2",   pages:9, tag:"tag-mm", label:"Multimedia"},
  {title:"LAN/WAN Architecture — Mark Scheme",        subject:"Networking",year:2023,level:"Year 3",   pages:7, tag:"tag-net",label:"Networking"},
  {title:"Data Structures — Examiner Report",         subject:"Software",  year:2023,level:"Year 1",   pages:6, tag:"tag-sd", label:"Software Dev"},
  {title:"Audio/Video Processing — Mark Scheme",      subject:"Multimedia",year:2022,level:"Year 3",   pages:11,tag:"tag-mm", label:"Multimedia"},
  {title:"Cloud Infrastructure — Mark Scheme",        subject:"Networking",year:2022,level:"Final Year",pages:13,tag:"tag-net",label:"Networking"},
  {title:"OOP & Design Patterns — Mark Scheme",       subject:"Software",  year:2022,level:"Year 2",   pages:8, tag:"tag-sd", label:"Software Dev"},
];

const subjectData = {
  mm:{
    key:"mm",icon:"🎨",color:"#f472b6",name:"Multimedia Programming",
    desc:"Covers the design and development of multimedia applications including graphics, 2D/3D animation, audio/video processing, interactive media, and web-based multimedia delivery systems.",
    papers:780,schemes:62,years:"2018–2024",subj:"Multimedia",
    topics:[
      {name:"Digital Graphics & Imaging",count:"142 papers"},
      {name:"2D & 3D Animation",count:"118 papers"},
      {name:"Audio Processing",count:"96 papers"},
      {name:"Video Production",count:"104 papers"},
      {name:"Interactive Media",count:"132 papers"},
      {name:"Web Multimedia (HTML5/CSS)",count:"88 papers"},
      {name:"Game Design Basics",count:"100 papers"},
    ],
    syllabus:[
      {t:"Introduction to Multimedia Systems",d:"History, types, components, and applications of multimedia technology."},
      {t:"Digital Image Representation",d:"Bitmap vs vector, colour models (RGB/CMYK/HSV), compression (JPEG, PNG, GIF)."},
      {t:"Animation Principles & Techniques",d:"Frame-by-frame, tweening, rigging, timeline tools, and 3D transformations."},
      {t:"Audio Engineering Fundamentals",d:"Waveforms, sampling rates, codecs (MP3/AAC/FLAC), editing and mixing."},
      {t:"Video Production & Encoding",d:"Resolution, frame rates, codecs (H.264/H.265), streaming protocols."},
      {t:"Interactive Media & UI Design",d:"HCI principles, event-driven programming, accessibility standards."},
      {t:"Multimedia Project Management",d:"Planning, asset pipelines, cross-platform deployment, testing."},
    ]
  },
  net:{
    key:"net",icon:"🌐",color:"#38bdf8",name:"Networking",
    desc:"Explores theory and practice of computer networking — from physical layer transmission to application protocols, network security, cloud systems, and enterprise infrastructure design.",
    papers:910,schemes:74,years:"2017–2024",subj:"Networking",
    topics:[
      {name:"OSI & TCP/IP Models",count:"168 papers"},
      {name:"IP Addressing & Subnetting",count:"145 papers"},
      {name:"Routing & Switching",count:"132 papers"},
      {name:"Network Security",count:"156 papers"},
      {name:"Wireless & Mobile Networks",count:"110 papers"},
      {name:"Cloud & Virtualisation",count:"98 papers"},
      {name:"Network Troubleshooting",count:"101 papers"},
    ],
    syllabus:[
      {t:"Network Fundamentals",d:"Topologies, transmission media, bandwidth, latency, and network devices."},
      {t:"OSI Model & Protocol Stacks",d:"Seven-layer model, encapsulation, PDUs, and layer responsibilities."},
      {t:"IP Addressing & Subnetting",d:"IPv4/IPv6, CIDR notation, NAT, DHCP, subnetting calculations."},
      {t:"Routing Protocols",d:"Static vs dynamic routing, RIP, OSPF, BGP, convergence."},
      {t:"Switching & VLANs",d:"MAC addressing, STP, VLAN configuration, inter-VLAN routing."},
      {t:"Network Security",d:"Firewalls, IDS/IPS, VPNs, cryptography, common attack vectors."},
      {t:"Cloud & Software-Defined Networking",d:"Virtualisation, SDN concepts, AWS/Azure fundamentals, containerisation."},
    ]
  },
  sd:{
    key:"sd",icon:"💻",color:"#a78bfa",name:"Software Development",
    desc:"Covers the full software development lifecycle — from requirements analysis and system design through coding, testing, version control, deployment, and maintenance using modern methodologies.",
    papers:730,schemes:58,years:"2018–2024",subj:"Software",
    topics:[
      {name:"Algorithms & Complexity",count:"128 papers"},
      {name:"Data Structures",count:"116 papers"},
      {name:"Object-Oriented Programming",count:"134 papers"},
      {name:"Software Engineering",count:"108 papers"},
      {name:"Testing & QA",count:"92 papers"},
      {name:"Databases & SQL",count:"88 papers"},
      {name:"Version Control & DevOps",count:"64 papers"},
    ],
    syllabus:[
      {t:"Problem Solving & Algorithms",d:"Flowcharts, pseudocode, time/space complexity, sorting & searching."},
      {t:"Data Structures",d:"Arrays, linked lists, stacks, queues, trees, graphs, hash tables."},
      {t:"Object-Oriented Programming",d:"Classes, inheritance, polymorphism, encapsulation, design patterns."},
      {t:"Software Development Lifecycle",d:"Waterfall, Agile, Scrum, requirements engineering, UML modelling."},
      {t:"Testing & Quality Assurance",d:"Unit, integration, system testing; TDD, automated testing frameworks."},
      {t:"Databases & SQL",d:"Relational models, normalisation, SQL queries, transactions, ORMs."},
      {t:"Version Control & Deployment",d:"Git workflows, CI/CD pipelines, containerisation, cloud deployment."},
    ]
  }
};

/* ─ THEME ─ */
function toggleTheme(){
  const h=document.documentElement;
  h.dataset.theme=h.dataset.theme==='dark'?'light':'dark';
  localStorage.setItem('theme',h.dataset.theme);
}
(()=>{const s=localStorage.getItem('theme');if(s)document.documentElement.dataset.theme=s;})();

/* ─ SPA ─ */
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function goTo(id){
  showPage('home');
  setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),50);
}

/* ─ SUBJECT PAGE ─ */
function openSubjectPage(key){
  const d=subjectData[key];
  const sp=papers.filter(p=>p.subject===d.subj);
  const sm=markSchemes.filter(m=>m.subject===d.subj);

  const paperCards=sp.map(p=>`
    <div class="paper-card">
      <div class="paper-top"><span class="paper-subj-tag tag-${key}">${p.label}</span><span class="paper-year">${p.year}</span></div>
      <div class="paper-title">${p.title}</div>
      <div class="paper-info"><span>📋 ${p.level}</span><span>📄 PDF</span></div>
      <div class="paper-actions"><button class="paper-download">⬇ Download</button><button class="paper-preview">👁 Preview</button></div>
    </div>`).join('');

  const markCards=sm.map(m=>`
    <div class="marks-card">
      <div class="marks-badge">✅ Mark Scheme</div>
      <h4>${m.title}</h4>
      <div class="marks-meta">${m.year} · ${m.level} · ${m.pages} pages</div>
      <div class="marks-actions"><button class="marks-dl">⬇ Download</button><button class="marks-view">👁 View</button></div>
    </div>`).join('');

  const topicCards=d.topics.map(t=>`
    <div class="topic-chip" style="--chip-c:${d.color}">
      <div>${t.name}</div><div class="topic-num">${t.count}</div>
    </div>`).join('');

  const syllabus=d.syllabus.map((s,i)=>`
    <div class="syllabus-item">
      <div class="syl-num">${i+1}</div>
      <div class="syl-content"><h5>${s.t}</h5><p>${s.d}</p></div>
    </div>`).join('');

  document.getElementById('subjPageContent').innerHTML=`
    <button class="subj-back" onclick="showPage('home')">← Back to Home</button>
    <div class="subj-hero">
      <div class="subj-hero-glow" style="background:radial-gradient(circle,${d.color},transparent)"></div>
      <span class="subj-big-icon">${d.icon}</span>
      <h1>${d.name}</h1>
      <p>${d.desc}</p>
      <div class="subj-stats">
        <div class="subj-stat"><div class="subj-stat-num" style="color:${d.color}">${d.papers}</div><div class="subj-stat-label">Past Papers</div></div>
        <div class="subj-stat"><div class="subj-stat-num" style="color:${d.color}">${d.schemes}</div><div class="subj-stat-label">Mark Schemes</div></div>
        <div class="subj-stat"><div class="subj-stat-num" style="color:${d.color}">${d.years}</div><div class="subj-stat-label">Years Available</div></div>
        <div class="subj-stat"><div class="subj-stat-num" style="color:${d.color}">${d.topics.length}</div><div class="subj-stat-label">Topics</div></div>
      </div>
    </div>
    <div class="subj-tabs">
      <button class="subj-tab active" onclick="switchSubjTab(this,'sp-papers')">📄 Papers</button>
      <button class="subj-tab" onclick="switchSubjTab(this,'sp-marks')">✅ Mark Schemes</button>
      <button class="subj-tab" onclick="switchSubjTab(this,'sp-topics')">🗂 Topics</button>
      <button class="subj-tab" onclick="switchSubjTab(this,'sp-syllabus')">📋 Syllabus</button>
    </div>
    <div id="sp-papers"><div class="papers-grid">${paperCards}</div></div>
    <div id="sp-marks" style="display:none"><div class="marks-grid">${markCards}</div></div>
    <div id="sp-topics" style="display:none"><div class="topics-grid">${topicCards}</div></div>
    <div id="sp-syllabus" style="display:none"><div class="syllabus-list">${syllabus}</div></div>
  `;
  showPage('subject');
}

function switchSubjTab(btn,panelId){
  document.querySelectorAll('.subj-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  ['sp-papers','sp-marks','sp-topics','sp-syllabus'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.style.display=id===panelId?'block':'none';
  });
}

/* ─ PAPERS ─ */
function paperCardHTML(p){
  return`<div class="paper-card">
    <div class="paper-top"><span class="paper-subj-tag ${p.tag}">${p.label}</span><span class="paper-year">${p.year}</span></div>
    <div class="paper-title">${p.title}</div>
    <div class="paper-info"><span>📋 ${p.level}</span><span>📄 PDF</span></div>
    <div class="paper-actions"><button class="paper-download">⬇ Download</button><button class="paper-preview">👁 Preview</button></div>
  </div>`;
}
function renderPapers(filter){
  const g=document.getElementById('papersGrid');
  if(!g)return;
  const list=filter==='all'?papers:papers.filter(p=>p.subject===filter);
  g.innerHTML=list.map(paperCardHTML).join('');
}
function setFilter(btn,filter){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); renderPapers(filter);
}

/* ─ MARK SCHEMES ─ */
function marksCardHTML(m){
  return`<div class="marks-card">
    <div class="marks-badge">✅ Mark Scheme</div>
    <h4>${m.title}</h4>
    <div class="marks-meta">${m.year} · ${m.level} · ${m.pages} pages</div>
    <div class="marks-actions"><button class="marks-dl">⬇ Download</button><button class="marks-view">👁 View</button></div>
  </div>`;
}
function renderMarks(filter){
  const g=document.getElementById('marksGrid');
  if(!g)return;
  const list=filter==='all'?markSchemes:markSchemes.filter(m=>m.subject===filter);
  g.innerHTML=list.map(marksCardHTML).join('');
}
function setMarksFilter(btn,filter){
  document.querySelectorAll('.marks-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); renderMarks(filter);
}

/* ─ SEARCH ─ */
function doSearch(){
  const val=document.getElementById('searchInput').value.trim();
  if(!val){alert('Please enter a search term.');return;}
  const terms=val.toLowerCase().split(' ');
  const match=x=>terms.some(t=>x.title.toLowerCase().includes(t)||x.subject.toLowerCase().includes(t)||String(x.year).includes(t));
  const fp=papers.filter(match);
  const fm=markSchemes.filter(match);
  const g=document.getElementById('papersGrid');
  if(!fp.length&&!fm.length){
    g.innerHTML=`<div style="color:var(--muted);padding:40px;grid-column:1/-1;text-align:center;font-size:15px">No results for "<strong style="color:var(--text)">${val}</strong>". Try another search.</div>`;
  }else{
    g.innerHTML=fp.map(paperCardHTML).join('')+fm.map(m=>`
      <div class="paper-card">
        <div class="paper-top"><span class="paper-subj-tag ${m.tag}">${m.label}</span><span class="paper-year">${m.year}</span></div>
        <div class="marks-badge" style="margin:0">✅ Mark Scheme</div>
        <div class="paper-title">${m.title}</div>
        <div class="paper-info"><span>📋 ${m.level}</span><span>${m.pages} pages</span></div>
        <div class="paper-actions"><button class="marks-dl">⬇ Download</button><button class="marks-view">👁 View</button></div>
      </div>`).join('');
  }
  document.getElementById('papers').scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector('.filter-btn').classList.add('active');
}
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch();});

/* ─ UPLOAD ─ */
function setUploadType(btn,type){
  document.querySelectorAll('.upload-type-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('submitBtn').textContent=type==='paper'?'Submit Paper for Review':'Submit Mark Scheme for Review';
}
document.getElementById('fileInput').addEventListener('change',function(){
  if(this.files[0])document.querySelector('.drop-text').innerHTML=`<strong>✅ ${this.files[0].name}</strong> selected`;
});
function submitPaper(e){
  e.preventDefault();
  document.getElementById('successMsg').style.display='block';
  e.target.reset();
  document.querySelector('.drop-text').innerHTML='<strong>Click to upload</strong> or drag &amp; drop<br>PDF, DOC, DOCX up to 20MB';
  setTimeout(()=>document.getElementById('successMsg').style.display='none',5000);
}

/* ─ MODAL ─ */
function openModal(tab){document.getElementById('modalOverlay').classList.add('open');switchTab(tab);}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
function closeModalOutside(e){if(e.target.id==='modalOverlay')closeModal();}
function switchTab(tab){
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab'+tab[0].toUpperCase()+tab.slice(1)).classList.add('active');
  const l=tab==='login';
  document.getElementById('modalTitle').textContent=l?'Welcome Back':'Create an Account';
  document.getElementById('modalDesc').textContent=l?'Sign in to access your saved papers and downloads.':'Join thousands of students and teachers on ExamArchive.';
}

/* ─ MOBILE ─ */
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');}

/* ─ INIT ─ */
renderPapers('all');
renderMarks('all');
