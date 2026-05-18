/* ── ICARIES 2026 — Vanilla JS ──────────────────────────── */

// ── DATA ─────────────────────────────────────────────────
let DATA = { authors: {}, committee: {}, dates: {} };

async function loadData() {
  const [authors, committee, dates] = await Promise.all([
    fetch('./data/authors.json').then(r => r.json()),
    fetch('./data/committee.json').then(r => r.json()),
    fetch('./data/dates.json').then(r => r.json()),
  ]);
  DATA = { authors, committee, dates };
}

// ── ASSETS ───────────────────────────────────────────────
const ASSETS = {
  logo:         './assets/logo.jpeg',
  prmitr:       './assets/prmitr.webp',
  ambadevi:     './assets/ambadevi.jpg',
  chikhaldara:  './assets/chikhaldara.png',
  melghat:      './assets/melghat.png',
  upperwardha:  './assets/upperwardha.png',
  shegao:       './assets/shegao.jpg',
  semadoh:      './assets/semadoh.jpg',
  connectivity: './assets/connectivity.png',
  landmark:     './assets/landmark.avif',
  primePark:    './assets/prime-park.avif',
};

// ── SVG ICONS ────────────────────────────────────────────
const IC = {
  loc:  `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  cal:  `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  arr:  `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  mail: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  info: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  user: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  phone:`<svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,
  upArrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V7"/><path d="M6.5 12.5 12 7l5.5 5.5"/></svg>`,
};

// ── PROGRAM TRACKS ────────────────────────────────────────
const PROGRAM_TRACKS = [
  { title: "Computing and Processing", topics: ["Computer Architecture and Organization","Parallel, Distributed, and High-Performance Computing","Cloud, Edge, and Fog Computing","Operating Systems and Middleware","Embedded and Real-Time Systems","Green and Energy-Efficient Computing","Quantum Computing and Simulators","Compiler Design and Optimization","System and Software Security","Digital Signal Processing (DSP)","Image and Video Processing","Computer Vision and Pattern Recognition"] },
  { title: "Artificial Intelligence and Machine Learning", topics: ["Machine Learning Algorithms and Theory","Deep Learning and Neural Networks","Natural Language Processing","Computer Vision and Pattern Recognition","Reinforcement and Multi-Agent Learning","Generative AI and Foundation Models","Explainable and Trustworthy AI","AI for Cyber Security","Adversarial Machine Learning and AI Security"] },
  { title: "Data Science and Analytics", topics: ["Big Data Analytics and Platforms","Data Mining and Knowledge Discovery","Statistical Modeling and Predictive Analytics","Time-Series and Streaming Analytics","Data Visualization and Visual Analytics","Business Intelligence and Decision Support","Graph Analytics and Network Science","Data Engineering and Data Pipelines","Data Privacy and Secure Analytics","Privacy-Preserving Data Mining"] },
  { title: "Communication and Networking", topics: ["Wireless and Mobile Communication (5G/6G)","Internet of Things (IoT) and Sensor Networks","Computer Networks and Protocol Development","Software-Defined Networking (SDN) and NFV","Network Performance, QoS, and Traffic Engineering","Vehicular, Ad Hoc, and Mesh Networks","Network and Communication Security"] },
  { title: "Robotics and Automation", topics: ["Robotics Systems and Architectures","Control Systems and Automation","Autonomous Robots and Vehicles","Industrial Robotics and Smart Manufacturing","Swarm and Multi-Robot Systems","Robot Perception, Localization, and SLAM","Cyber-Physical Systems Security","Secure and Safe Autonomous Systems"] },
];

// ── CITY GALLERY ──────────────────────────────────────────
const CITY_GALLERY = [
  { src: ASSETS.ambadevi,    alt: "Ambadevi Temple",            desc: "A historic Hindu temple dedicated to Goddess Amba.",                            mapQuery: "Ambadevi Temple, Amravati, Maharashtra" },
  { src: ASSETS.chikhaldara, alt: "Chikhaldara Hill Station",   desc: "Scenic hill station renowned as the only hill station in the Vidarbha region.", mapQuery: "Chikhaldara Hill Station, Chikhaldara, Maharashtra" },
  { src: ASSETS.melghat,     alt: "Melghat Tiger Reserve",      desc: "Among the first nine tiger reserves of India notified in 1973 under Project Tiger.", mapQuery: "Melghat Tiger Reserve, Amravati, Maharashtra" },
  { src: ASSETS.upperwardha, alt: "Upper Wardha Dam",           desc: "Known as Nal Damayanti Sagar, a major earthfill gravity dam on the Wardha River.", mapQuery: "Upper Wardha Dam, Amravati, Maharashtra" },
  { src: ASSETS.shegao,      alt: "Shri Gajanan Maharaj Mandir",desc: "A highly revered pilgrimage site and Samadhi shrine of saint Shri Gajanan Maharaj.", mapQuery: "Shri Gajanan Maharaj Mandir, Shegaon, Maharashtra" },
  { src: ASSETS.semadoh,     alt: "Semadoh Elephant Ride",      desc: "Offers elephant safari rides to explore the dense Satpura forest and observe wildlife.", mapQuery: "Semadoh, Melghat, Maharashtra" },
];

// CONTACTS and OPER_GROUPS are derived from loaded JSON data — see renderContact() and renderCommittee()

// ── ROUTING ──────────────────────────────────────────────
const PAGES = new Set(['committee','author-guidelines','program','venue','contact']);

function getRoute() {
  return window.location.hash.replace(/^#\/?/, '');
}

function goPage(key) {
  window.location.hash = key ? `#/${key}` : '#/';
}

function goSection(sectionId) {
  const route = getRoute();
  if (PAGES.has(route)) {
    window.location.hash = '#/';
    setTimeout(() => scrollToSection(sectionId), 120);
  } else {
    scrollToSection(sectionId);
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?${new URLSearchParams({api:'1', query}).toString()}`;
}

// ── RENDER HELPERS ────────────────────────────────────────
function navLink(key, label, onClick) {
  const route = getRoute();
  const active = (PAGES.has(route) ? route : (getRoute() || 'home')) === key ? 'active' : '';
  return `<a href="/" data-nav="${key}" class="${active}" data-action="${onClick}">${label}</a>`;
}

function membersGrid(list, showRole = true) {
  return list.map(m => `
    <div class="member-card reveal">
      ${showRole && m.role ? `<span class="member-role">${m.role}</span>` : ''}
      <div class="member-name">${m.name}</div>
      ${m.org ? `<div class="member-org">${m.org}</div>` : ''}
    </div>`).join('');
}

function groupSection(label, list, divider = true) {
  if (!list.length) return '';
  return `
    <div class="group-label">${label}</div>
    <div class="members-grid">${membersGrid(list, true)}</div>
    ${divider ? '<div class="divider"></div>' : ''}`;
}

// ── NAVBAR HTML ───────────────────────────────────────────
function renderNavbar() {
  return `
    <nav id="navbar">
      <div class="nav-inner">
        <div class="nav-brand" data-action="home-brand" role="button" tabindex="0">
          <div class="nav-logo-wrap"><img src="${ASSETS.logo}" alt="PRMITR"/></div>
          <div>
            <span class="nav-brand-name">ICARIES 2026</span>
            <span class="nav-brand-sub">PRMITR Badnera</span>
          </div>
        </div>
        <ul class="nav-links">
          <li><a href="/" data-nav="home"               data-goto-section="home">Home</a></li>
          <li class="nav-dropdown">
            <a href="/" data-nav="about-conference" data-goto-section="about-conference">About</a>
            <ul class="dropdown-menu">
              <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
              <li><a href="/" data-goto-section="about-institute">About Institute</a></li>
              <li><a href="/" data-goto-section="about-city">About City</a></li>
            </ul>
          </li>
          <li><a href="/" data-goto-page="committee">Committee</a></li>
          <li><a href="/" data-goto-page="author-guidelines">For Authors</a></li>
          <li><a href="/" data-goto-page="program">Program</a></li>
          <li><a href="/" data-goto-page="venue">Venue</a></li>
          <li><a href="/" data-goto-page="contact">Contact</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="mobile-nav">
      <ul>
        <li><a href="/" data-goto-section="home">Home</a></li>
        <li class="mobile-nav-group">
          <span class="mobile-nav-label">About</span>
          <ul class="mobile-submenu">
            <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
            <li><a href="/" data-goto-section="about-institute">About Institute</a></li>
            <li><a href="/" data-goto-section="about-city">About City</a></li>
          </ul>
        </li>
        <li><a href="/" data-goto-page="committee">Committee</a></li>
        <li><a href="/" data-goto-page="author-guidelines">For Authors</a></li>
        <li><a href="/" data-goto-page="program">Program</a></li>
        <li><a href="/" data-goto-page="venue">Venue</a></li>
        <li><a href="/" data-goto-page="contact">Contact</a></li>
      </ul>
    </div>`;
}

// ── PAGE: HOME ────────────────────────────────────────────
function renderHome() {
  const datesRows = DATA.dates.dates.map(d => `
    <div class="date-card reveal">
      <div class="date-label">${d.label}</div>
      <div class="date-val">${d.date}</div>
    </div>`).join('');

  const galleryCards = CITY_GALLERY.map(g => `
    <div class="city-card reveal" data-modal-src="${g.src}" data-modal-alt="${g.alt}">
      <div class="city-thumb">
        <img src="${g.src}" alt="${g.alt}" loading="lazy"/>
        <div class="city-overlay"><span class="expand-icon">+</span></div>
      </div>
      <div class="city-info">
        <h3>${g.alt}</h3>
        <p>${g.desc}</p>
        <div class="city-actions">
          <button type="button" class="map-btn map-btn-primary" data-map-query="${g.mapQuery}">Map</button>
        </div>
      </div>
    </div>`).join('');

  return `
    <!-- HERO -->
    <section id="home" class="section home-hero" style="padding-top:3.5rem;padding-bottom:3.5rem;text-align:center">
      <div class="hero-inner section-inner">
        <h1 class="hero-title">
          International Conference on Automation<br>and Resilient Innovative Expert System
          <span class="blue">ICARIES 2026</span>
        </h1>
        <p class="hero-sponsored">Hosted by Prof. Ram Meghe Institute of Technology &amp; Research, Badnera</p>
        <div class="hero-meta">
          <div class="hero-meta-item">${IC.cal} Date - coming soon</div>
          <div class="hero-meta-item">${IC.loc} PRMITR&amp;R, Amravati - INDIA</div>
        </div>
        <div class="hero-btns">
          <button class="btn btn-blue" data-goto-page="author-guidelines">${IC.arr} Call for Papers</button>
          <button class="btn btn-outline-blue">Submit Paper ${IC.arr}</button>
        </div>
      </div>
    </section>

    <!-- ABOUT CONFERENCE -->
    <section id="about-conference" class="section alt">
      <div class="section-inner">
        <div class="welcome-grid">
          <div>
            <span class="sec-eyebrow">About the Conference</span>
            <h2 class="sec-title">Welcome To ICARIES 2026</h2>
            <div class="sec-bar"></div>
            <div class="welcome-text">
              <p>The conference theme focuses on the development of advanced engineering and computing solutions that enhance the reliability, robustness, and adaptability of modern technological infrastructures. As technological systems become increasingly interconnected and complex, ensuring their ability to withstand disruptions, maintain performance, and recover from failures has become a critical research priority. The conference aims to explore innovative approaches in computing and processing, including intelligent algorithms, artificial intelligence, machine learning, and scalable cloud and edge computing architectures. It also addresses advancements in communication, networking, and broadcasting, emphasizing secure, fault-tolerant, and resilient communication frameworks. Additionally, the theme highlights progress in robotics and control systems, particularly in autonomous systems and adaptive control. By bringing together researchers, academicians, and industry professionals, the conference provides a platform to share emerging technologies and interdisciplinary research that contribute to the design of reliable and resilient technological systems for future applications.</p>
              <p>ICARIES provides a dynamic platform for researchers, academics, industry professionals, and policymakers to exchange ideas, present their latest research findings, and explore innovative solutions in the realms of intelligent computing and sustainable technology. This interdisciplinary conference aims to foster collaboration and knowledge sharing across a range of specialized tracks.</p>
              <p>ICARIES 2026 is organized in hybrid mode, bolstering the global presence of the event. Delegates will be able to decide whether to attend physically or virtually.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPORTANT DATES -->
    <section id="dates" class="section">
      <div class="section-inner">
        <div style="text-align:center">
          <span class="sec-eyebrow">Mark Your Calendar</span>
          <h2 class="sec-title">Important <span class="blue">Dates</span></h2>
          <div class="sec-bar center"></div>
        </div>
        <div class="dates-grid" style="margin-top:2.5rem">${datesRows}</div>
      </div>
    </section>

    <!-- SPEAKERS -->
    <section id="speakers" class="section alt">
      <div class="section-inner">
        <div style="text-align:center">
          <span class="sec-eyebrow">Keynote Speakers</span>
          <h2 class="sec-title">Distinguished <span class="blue">Speakers</span></h2>
          <div class="sec-bar center"></div>
          <p class="sec-sub" style="margin:0 auto">Leading minds in Automation &amp; Intelligent Expert Systems</p>
        </div>
        <div class="speakers-grid">
          ${[1,2,3].map(i=>`
          <div class="spk-card reveal">
            <div class="spk-photo">${IC.user}</div>
            <div class="spk-info">
              <span class="spk-badge">Keynote Speaker</span>
              <div class="spk-name">Coming Soon</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ABOUT INSTITUTE -->
    <section id="about-institute" class="section alt">
      <div class="section-inner">
        <div class="about-grid">
          <div class="reveal">
            <span class="sec-eyebrow">About the Institute</span>
            <h2 class="sec-title">Prof. Ram Meghe Institute of Technology and Research (PRMITR)</h2>
            <div class="sec-bar"></div>
            <div class="about-text">
              <p>The Vidarbha Youth Welfare Society's Prof. Ram Meghe Institute of Technology &amp; Research, Badnera-Amravati (an Autonomous Institute and formerly well known as College of Engineering Badnera), is a leading technological institute from Vidarbha. Established in the year 1983, the institute has a prestigious standing amongst the topmost Technical Institutes of Maharashtra.</p>
              <p>PRMITR has a legacy of 43 years in terms of research collaboration and student engagement in multiple UG courses like Computer Science and Engineering, Civil Engineering, Information Technology, Electronics and Telecommunication Engineering, Artificial Intelligence and Data Science, Computer Science and Engineering-IOT and Mechanical Engineering.</p>
              <p>The institute is approved by AICTE, New Delhi, accredited by National Assessment and Accreditation Council (NAAC), Bangalore with Grade 'A+' and some of its UG programmes are accredited thrice (03) by the National Board of Accreditation (NBA), New Delhi. The institute is recognized by Directorate of Technical Education (DTE Mumbai), Govt. of Maharashtra and affiliated to Sant Gadge Baba Amravati University, Amravati.</p>
            </div>
          </div>
          <div class="about-img reveal">
            <img src="${ASSETS.prmitr}" alt="PRMITR Campus"/>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT CITY / VENUE -->
    <section id="venue" class="section">
      <div class="section-inner">
        <div class="venue-copy">
          <div id="about-city">
            <span class="sec-eyebrow">The Host City</span>
            <h2 class="sec-title">About Amravati City</h2>
            <div class="sec-bar"></div>
            <div class="about-text">
              <p>Amravati, often called the cultural capital of Vidarbha, is a significant city in Maharashtra. It is renowned for its historical temples, particularly the Ambadevi Temple, and serves as an educational hub with several universities and colleges.</p>
              <p>The city holds a rich heritage and is a gateway to Melghat Tiger Reserve, offering both urban amenities and proximity to natural beauty. Amravati is strategically located and well-connected, making it an ideal venue for international intellectual gatherings.</p>
            </div>

            <div class="city-highlights">
              <div class="city-highlight-card reveal">
                <img src="${ASSETS.shegao}" alt="Historical Legacy" class="highlight-img"/>
                <div class="highlight-info"><h4>Historical Legacy</h4><p>Rich in history, known as the 'Indrapuri' with monuments dating back centuries.</p></div>
              </div>
              <div class="city-highlight-card reveal">
                <img src="${ASSETS.connectivity}" alt="Connectivity" class="highlight-img"/>
                <div class="highlight-info"><h4>Connectivity</h4><p>Excellent rail (Badnera Junction) and road links, with Nagpur airport nearby.</p></div>
              </div>
              <div class="city-highlight-card reveal">
                <img src="${ASSETS.chikhaldara}" alt="Pleasant Climate" class="highlight-img"/>
                <div class="highlight-info"><h4>Pleasant Climate</h4><p>June–July offers a wonderful monsoon chill and lush green landscapes.</p></div>
              </div>
            </div>

            <div class="city-gallery-title">Explore Beautiful <span class="blue">Amravati</span></div>
            <div class="city-gallery">${galleryCards}</div>
          </div>
        </div>
      </div>
    </section>`;
}

// ── PAGE: COMMITTEE ───────────────────────────────────────
function renderCommittee() {
  const { organizing, technical, publication, advisory, plagiarism, operational } = DATA.committee;
  // Derive unique ordered group labels directly from the data
  const operGroups = (() => {
    const seen = new Set();
    const roles = operational.map(m => m.role).filter(r => r && !seen.has(r) && seen.add(r));
    return roles.map((role, i) => {
      const members = operational.filter(m => m.role === role);
      return members.length ? groupSection(role, members, i < roles.length - 1) : '';
    }).join('');
  })();

  return `
    <section class="section section-tight">
      <div class="section-inner">
        <div class="section-heading">
          <span class="sec-eyebrow">ICARIES 2026</span>
          <h2 class="sec-title">Organizing Committee</h2>
          <div class="sec-bar"></div>
        </div>
        <div class="members-grid">${membersGrid(organizing, true)}</div>
      </div>
    </section>

    <section class="section alt section-tight">
      <div class="section-inner">
        <div class="section-heading">
          <span class="sec-eyebrow">ICARIES 2026</span>
          <h2 class="sec-title">Technical and Academics Committee</h2>
          <div class="sec-bar"></div>
        </div>
        ${groupSection('Technical Committee', technical)}
        ${groupSection('Publication Committee', publication)}
        ${groupSection('Advisory Committee', advisory)}
        ${groupSection('Plagiarism &amp; AI Checking Committee', plagiarism, false)}
      </div>
    </section>

    <section class="section section-tight">
      <div class="section-inner">
        <div class="section-heading">
          <span class="sec-eyebrow">ICARIES 2026</span>
          <h2 class="sec-title">Operations and Logistics Committee</h2>
          <div class="sec-bar"></div>
        </div>
        ${operGroups}
      </div>
    </section>`;
}

// ── PAGE: AUTHOR GUIDELINES ───────────────────────────────
function renderAuthorGuidelines() {
  const { guidelines, notes, submitPoints } = DATA.authors;
  const datesRows = DATA.dates.dates.map(d => `
    <tr><td>${d.label}</td><td>${d.date}</td></tr>`).join('');

  return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">For Researchers</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Author Guidelines</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.9rem;margin-top:.3rem">Please follow these instructions carefully to ensure your submission is processed correctly.</p>
      </div>
    </div>
    <div class="section">
      <div class="authors-wrap">
        <ul class="g-list">
          ${guidelines.map((g, i) => `
          <li class="g-item">
            <div class="g-num">${i + 1}</div>
            <div class="g-text">${g}</div>
          </li>`).join('')}
        </ul>

        <div class="notes-box">
          <div class="notes-title">${IC.info} Important Notes</div>
          <ul class="notes-list">
            ${notes.map(n => `<li class="${n.highlight ? 'hl' : ''}">${n.text}</li>`).join('')}
          </ul>
        </div>

        <div style="margin:2.5rem 0">
          <div class="dtable-title">Important Dates</div>
          <table class="dtable"><tbody>${datesRows}</tbody></table>
        </div>

        <div class="submit-box">
          <div class="submit-title">Submit Research Paper</div>
          <p class="submit-desc">Authors are invited to submit their original and unpublished research papers in the prescribed format. All submissions will undergo a peer-review process.</p>
          <ul class="submit-list">
            ${submitPoints.map(p => `<li>${p}</li>`).join('')}
          </ul>
          <div class="submit-btns">
            <button class="btn btn-blue">Submit Paper ${IC.arr}</button>
            <button type="button" class="btn btn-outline-blue" onclick="window.open('https://www.ieee.org/conferences/publishing/templates','_blank','noopener,noreferrer')">Download Template</button>
          </div>
        </div>
      </div>
    </div>`;
}

// ── PAGE: PROGRAM ─────────────────────────────────────────
function renderProgram() {
  const tracks = PROGRAM_TRACKS.map(t => `
    <article class="program-track-card reveal">
      <h3 class="track-title">${t.title}</h3>
      <ul class="track-topics">
        ${t.topics.map(tp => `<li class="track-topic">${tp}</li>`).join('')}
      </ul>
    </article>`).join('');

  return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Program Tracks</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Technical Themes &amp; Topics</h1>
        <div class="sec-bar"></div>
        <p class="program-intro" style="color:rgba(255,255,255,.5);font-size:.95rem">The ICARIES 2026 program is organized into specialized technical themes, each guided by industry and academic chairs, with a curated set of topic clusters for submissions and sessions.</p>
      </div>
    </div>
    <section class="section">
      <div class="section-inner">
        <div class="program-tracks-grid">${tracks}</div>
      </div>
    </section>`;
}

// ── PAGE: VENUE ───────────────────────────────────────────
function renderVenue() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8!2d77.75355!3d20.8782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent('Prof. Ram Meghe Institute of Technology and Research, Badnera')}!5e0!3m2!1sen!2sin!4v1`;
  return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Visit PRMITR</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Venue Information</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.95rem;margin-top:.4rem">Join us at PRMITR, Badnera, and experience a vibrant venue that inspires learning, collaboration, and innovation.</p>
      </div>
    </div>

    <section class="section">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Conference Venue</span>
          <h2 class="sec-title">Location</h2>
          <div class="sec-bar center"></div>
          <p class="venue-section-copy">The conference venue is centered around the PRMITR campus in Badnera, giving visitors direct access to the event location with a cleaner and more focused venue experience.</p>
        </div>
        <div class="locations-grid locations-grid-single">
          <article class="location-card location-card-featured">
            <div class="location-map-mini">
              <iframe width="100%" height="240" style="border:none;border-radius:12px" loading="lazy" allowfullscreen src="${mapSrc}"></iframe>
            </div>
            <div class="location-card-body">
              <h3 class="location-card-title">Prof. Ram Meghe Institute of Technology and Research</h3>
              <p class="location-card-address">Badnera, Amravati, Maharashtra, India</p>
              <p class="location-card-desc">State-of-the-art campus hosting the ICARIES 2026 conference.</p>
              <a href="${mapsUrl('Prof. Ram Meghe Institute of Technology and Research, Badnera')}" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue" style="margin-top:1rem;display:inline-block">${IC.arr} View Full Map</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Stay Nearby</span>
          <h2 class="sec-title">Accommodation</h2>
          <div class="sec-bar center"></div>
          <p class="venue-section-copy">Choose from recommended hotels near the conference venue, with convenient booking access.</p>
        </div>
        <div class="hotel-grid">
          <article class="hotel-card">
            <div class="hotel-card-img"><img src="${ASSETS.primePark}" alt="Prime Park Hotel, Amravati"/></div>
            <div class="hotel-card-body">
              <h3 class="hotel-card-title">Prime Park</h3>
              <p class="hotel-card-desc">A premium stay option with spacious rooms, hearty breakfasts, and trusted hotel comforts.</p>
              <a href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=202002181549124515" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue hotel-btn">Visit</a>
            </div>
          </article>
          <article class="hotel-card">
            <div class="hotel-card-img"><img src="${ASSETS.landmark}" alt="Landmark Continental Hotel, Amravati"/></div>
            <div class="hotel-card-body">
              <h3 class="hotel-card-title">Landmark Continental</h3>
              <p class="hotel-card-desc">Modern rooms and easy access to local dining with comfortable amenities and friendly service.</p>
              <a href="https://www.makemytrip.com/hotels/landmark_continental-details-amravati.html" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue hotel-btn">Visit</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Travel Planning</span>
          <h2 class="sec-title">Transportation Modes</h2>
          <div class="sec-bar center"></div>
        </div>
        <div class="transport-journey">
          <div class="journey-stage">
            <h3 class="stage-title">Stage 1: Reach Nagpur</h3>
            <p class="stage-subtitle">Choose your preferred mode of transport to reach Nagpur</p>
            <div class="transport-grid">
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-plane"></i></div>
                <h4 class="transport-name">Aeroplane</h4>
                <p class="transport-detail"><strong>Dr. Ambedkar International Airport</strong></p>
                <p class="transport-desc">International airport with flights from major Indian and international cities. Located ~80 km from city center.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-train-subway"></i></div>
                <h4 class="transport-name">Train</h4>
                <p class="transport-detail"><strong>Nagpur Central Station</strong></p>
                <p class="transport-desc">Well-connected railway hub. Regular trains from Delhi, Mumbai, Kolkata, and other major cities.</p>
              </article>
            </div>
          </div>
          <div class="journey-divider">
            <div class="divider-line"></div>
            <div class="divider-text">↓</div>
            <div class="divider-line"></div>
          </div>
          <div class="journey-stage">
            <h3 class="stage-title">Stage 2: Nagpur to Amravati</h3>
            <p class="stage-subtitle">Distance: ~150 km | Estimated travel time: ~3 hours</p>
            <div class="transport-grid">
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-car"></i></div>
                <h4 class="transport-name">Cab</h4>
                <p class="transport-detail"><strong>Most Convenient</strong></p>
                <p class="transport-desc">Private cab or taxi services available. Door-to-door convenience. Recommended for comfort and flexible timing.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-bus"></i></div>
                <h4 class="transport-name">Bus</h4>
                <p class="transport-detail"><strong>Budget Friendly</strong></p>
                <p class="transport-desc">Regular bus services from Nagpur to Amravati. AC and non-AC options available. Frequent departures throughout the day.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-train-subway"></i></div>
                <h4 class="transport-name">Train</h4>
                <p class="transport-detail"><strong>Reliable &amp; Comfortable</strong></p>
                <p class="transport-desc">Regional trains available from Nagpur Junction to Badnera Junction (10 km from Amravati). Check schedules in advance.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

// ── PAGE: CONTACT ─────────────────────────────────────────
function renderContact() {
  const cards = DATA.authors.contacts.map(c => `
    <article class="contact-card reveal">
      <div class="contact-card-icon">${IC.user}</div>
      <h3 class="contact-card-title">${c.name}</h3>
      <div class="contact-card-detail"><strong>Email:</strong> ${c.email}</div>
      <div class="contact-card-detail"><strong>Mobile:</strong> ${c.mobile}</div>
    </article>`).join('');

  return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Contact Information</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Conference Contacts</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.95rem;margin-top:.4rem">Reach out to our organizing team for conference and author support.</p>
      </div>
    </div>
    <section class="section">
      <div class="section-inner">
        <div class="contact-grid">${cards}</div>
      </div>
    </section>`;
}

// ── FOOTER ────────────────────────────────────────────────
function renderFooter() {
  return `
    <footer id="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand-col">
            <div class="footer-logo-wrap">
              <img src="${ASSETS.logo}" alt="ICARIES 2026" class="footer-logo-img"/>
              <div>
                <span class="footer-brand-name">ICARIES 2026</span>
                <span class="footer-brand-tag">PRMITR, Badnera</span>
              </div>
            </div>
            <p class="footer-desc">ICARIES 2026 focuses on innovative and resilient technologies in intelligent computing, communication, and automation. The conference brings together researchers, academicians, and industry experts to share ideas and advancements in sustainable and reliable technological systems. It will be conducted in hybrid mode at PRMITR, Badnera.</p>
          </div>
          <div class="footer-col">
            <h4>Conference</h4>
            <ul>
              <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
              <li><a href="/" data-goto-section="speakers">Keynote Speakers</a></li>
              <li><a href="/" data-goto-section="dates">Important Dates</a></li>
              <li><a href="/" data-goto-page="committee">Committees</a></li>
              <li><a href="/" data-goto-section="venue">Venue &amp; Travel</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>For Authors</h4>
            <ul>
              <li><a href="/" data-goto-page="author-guidelines">Call for Papers</a></li>
              <li><a href="/" data-goto-page="author-guidelines">Submission Guidelines</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <div class="footer-c-item">${IC.loc}<span>Prof. Ram Meghe Institute of Technology and Research, Badnera-Amravati, MH, India</span></div>
            <div class="footer-c-item">${IC.mail}<span>principal@mitra.ac.in</span></div>
            <div class="footer-c-item">${IC.phone}<span>0721-2681246</span></div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <div><span>© 2026 ICARIES — Prof. Ram Meghe Institute of Technology &amp; Research, Badnera. All rights reserved.</span></div>
          </div>
        </div>
      </div>
    </footer>`;
}

// ── MODAL ─────────────────────────────────────────────────
function renderModal(src, alt) {
  return `
    <div class="modal-overlay" id="img-modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close" aria-label="Close modal">×</button>
        <img src="${src}" alt="${alt}"/>
        <div class="modal-caption">${alt}</div>
      </div>
    </div>`;
}

function openModal(src, alt) {
  let modal = document.getElementById('img-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', renderModal(src, alt));
    modal = document.getElementById('img-modal');
  } else {
    modal.querySelector('img').src = src;
    modal.querySelector('img').alt = alt;
    modal.querySelector('.modal-caption').textContent = alt;
    modal.style.display = 'flex';
  }
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('img-modal');
  if (modal) modal.style.display = 'none';
}

// ── SCROLL TOP BUTTON ─────────────────────────────────────
function renderScrollTop() {
  return `<button id="scroll-top-btn" aria-label="Scroll to top">${IC.upArrow}</button>`;
}

// ── INTERSECTION OBSERVER ─────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal, .g-item').forEach(el => obs.observe(el));
}

// ── ACTIVE NAV UPDATE ─────────────────────────────────────
function updateActiveNav() {
  const route = getRoute();
  const active = PAGES.has(route) ? route : '';
  document.querySelectorAll('[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === (active || 'home'));
  });
}

// ── RENDER MAIN ───────────────────────────────────────────
function renderMain() {
  const route = getRoute();
  const main = document.getElementById('main-content');
  if (!main) return;

  if (route === 'committee')         main.innerHTML = renderCommittee();
  else if (route === 'author-guidelines') main.innerHTML = renderAuthorGuidelines();
  else if (route === 'program')      main.innerHTML = renderProgram();
  else if (route === 'venue')        main.innerHTML = renderVenue();
  else if (route === 'contact')      main.innerHTML = renderContact();
  else                               main.innerHTML = renderHome();

  window.scrollTo({ top: 0, behavior: 'auto' });
  updateActiveNav();
  initReveal();
  bindMainEvents();
}

// ── EVENT BINDING ─────────────────────────────────────────
function bindMainEvents() {
  // city gallery cards → modal
  document.querySelectorAll('[data-modal-src]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.modalSrc, el.dataset.modalAlt));
  });
  // map buttons (stop propagation so card click doesn't fire)
  document.querySelectorAll('[data-map-query]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      window.open(mapsUrl(btn.dataset.mapQuery), '_blank', 'noopener,noreferrer');
    });
  });
  // any goto-page / goto-section inside main
  document.querySelectorAll('[data-goto-page]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); goPage(el.dataset.gotoPage); });
  });
  document.querySelectorAll('[data-goto-section]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); goSection(el.dataset.gotoSection); });
  });
}

function bindNavEvents() {
  // hamburger
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  ham?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
  });

  // nav brand
  document.querySelector('[data-action="home-brand"]')?.addEventListener('click', () => {
    goSection('home');
    mobileNav.classList.remove('open');
    ham.classList.remove('open');
  });

  // close mobile nav on any nav link click
  const closeMenu = () => {
    mobileNav.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
  };

  document.querySelectorAll('#navbar [data-goto-page], #mobile-nav [data-goto-page]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); closeMenu(); goPage(el.dataset.gotoPage); });
  });
  document.querySelectorAll('#navbar [data-goto-section], #mobile-nav [data-goto-section]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); closeMenu(); goSection(el.dataset.gotoSection); });
  });

  // scroll → navbar shadow + scroll-top btn
  const navbar = document.getElementById('navbar');
  const scrollBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
    scrollBtn?.classList.toggle('show', window.scrollY > 300);
  });

  scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── INIT ──────────────────────────────────────────────────
async function init() {
  await loadData();

  const root = document.getElementById('root');
  root.innerHTML = `
    ${renderNavbar()}
    <main id="main-content"></main>
    ${renderFooter()}
    ${renderScrollTop()}`;

  renderMain();
  bindNavEvents();

  window.addEventListener('hashchange', () => {
    renderMain();
    updateActiveNav();
  });
}

document.addEventListener('DOMContentLoaded', init);
