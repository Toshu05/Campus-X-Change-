/* =============================================================
   CampusXchange — Communities page
   All content lives in the data blocks below. Edit freely.
   ============================================================= */

/* ---------- 1. Hero stats ---------- */
const STATS = [
  { icon: "bank",   value: "25+",   label: "Colleges" },
  { icon: "people", value: "120+",  label: "Communities" },
  { icon: "users",  value: "15K+",  label: "Students" },
  { icon: "cal",    value: "500+",  label: "Active events" },
];

/* ---------- 2. Interest chips ---------- */
const INTERESTS = [
  { icon: null,      label: "All" },
  { icon: "cap",     label: "Academics" },
  { icon: "code",    label: "Tech" },
  { icon: "ball",    label: "Sports" },
  { icon: "palette", label: "Arts & Culture" },
  { icon: "case",    label: "Business" },
  { icon: "target",  label: "Competitions" },
  { icon: "book",    label: "Study Groups" },
  { icon: "people",  label: "More" },
];

/* ---------- 3. City communities ---------- */
const COMMUNITIES = [
  {
    icon: "chess", color: "#6d5bd0", title: "Chess Community",
    members: "2.8K members", colleges: "18 colleges",
    text: "Play, learn and compete with chess lovers across Bengaluru.",
    groups: [
      { name: "Enpassant", college: "ABESEC", c: "#c0392b" },
      { name: "MOVE_MAKERS", college: "AKGEC", c: "#2c6fb5" },
      { name: "Checkmate", college: "KIET", c: "#1d8a5b" },
    ],
    more: "+14 more",
  },
  {
    icon: "code", color: "#1668c9", title: "Developers Community",
    members: "4.3K members", colleges: "22 colleges",
    text: "Code, build and grow together. Collaborate on projects and share knowledge.",
    groups: [
      { name: "CodeCache", college: "RVCE", c: "#e0483c" },
      { name: "NullPointers", college: "MSRIT", c: "#2c6fb5" },
      { name: "AlgoX", college: "PESU", c: "#7a4fd0" },
    ],
    more: "+19 more",
  },
  {
    icon: "shuttle", color: "#e08a2a", title: "Badminton Community",
    members: "2.0K members", colleges: "16 colleges",
    text: "Find players, join matches and improve your game.",
    groups: [
      { name: "Smashers", college: "PESU", c: "#1d8a5b" },
      { name: "Net Ninjas", college: "BMSCE", c: "#123a63" },
      { name: "Rally Kings", college: "RVCE", c: "#e0483c" },
    ],
    more: "+13 more",
  },
  {
    icon: "rocket", color: "#12a150", title: "Entrepreneurs Community",
    members: "2.1K members", colleges: "14 colleges",
    text: "Share ideas, find co-founders and build the next big thing.",
    groups: [
      { name: "Founders' Hub", college: "Christ University", c: "#c0392b" },
      { name: "Startup Minds", college: "RVCE", c: "#2c6fb5" },
      { name: "InnovateX", college: "PESU", c: "#e08a2a" },
    ],
    more: "+11 more",
  },
  {
    icon: "camera", color: "#2a8c9c", title: "Photography Community",
    members: "1.7K members", colleges: "12 colleges",
    text: "Shoot, share and learn from student photographers in the city.",
    groups: [
      { name: "Shutterbugs", college: "KIET", c: "#6d5bd0" },
      { name: "FrameIt", college: "MSRIT", c: "#1d8a5b" },
      { name: "LightRoom", college: "BMSCE", c: "#123a63" },
    ],
    more: "+8 more",
  },
];

/* ---------- 4. Events ---------- */
const EVENTS = {
  upcoming: [
    { m: "MAY", d: "18", tag: "Upcoming", glyph: "chess", g1: "#1f2c3d", g2: "#4a5b70", title: "City Chess Tournament", host: "Chess Community", hostColor: "#6d5bd0", hostIcon: "chess", place: "RV College of Engineering", time: "10:00 AM – 6:00 PM", going: "120 going" },
    { m: "MAY", d: "21", tag: "Upcoming", glyph: "code", g1: "#0f2f4d", g2: "#1668c9", title: "Web Dev Bootcamp Workshop", host: "Developers Community", hostColor: "#1668c9", hostIcon: "code", place: "Online (Google Meet)", time: "5:00 PM – 8:00 PM", going: "88 going" },
    { m: "MAY", d: "24", tag: "Upcoming", glyph: "shuttle", g1: "#1d7a4f", g2: "#79c47c", title: "Badminton League 2025", host: "Badminton Community", hostColor: "#e08a2a", hostIcon: "shuttle", place: "BMSCE Sports Complex", time: "9:00 AM – 5:00 PM", going: "156 going" },
    { m: "MAY", d: "27", tag: "Upcoming", glyph: "mic", g1: "#3a1d5e", g2: "#a04ec9", title: "Startup Pitch Fest", host: "Entrepreneurs Community", hostColor: "#12a150", hostIcon: "rocket", place: "PES University Auditorium", time: "2:00 PM – 7:00 PM", going: "46 going" },
    { m: "MAY", d: "30", tag: "Upcoming", glyph: "camera", g1: "#2b2b2b", g2: "#6b6257", title: "Photography Walk", host: "Photography Community", hostColor: "#2a8c9c", hostIcon: "camera", place: "Cubbon Park", time: "7:00 AM – 10:00 AM", going: "63 going" },
  ],
  ongoing: [
    { m: "MAY", d: "12", tag: "Ongoing", glyph: "target", g1: "#0f2f4d", g2: "#2a8c9c", title: "Inter-College Hackathon", host: "Developers Community", hostColor: "#1668c9", hostIcon: "code", place: "MSRIT Innovation Lab", time: "Runs till 14 May", going: "210 going" },
    { m: "MAY", d: "10", tag: "Ongoing", glyph: "book", g1: "#3d2b12", g2: "#c08b3e", title: "GATE Study Marathon", host: "Study Groups", hostColor: "#6d5bd0", hostIcon: "book", place: "Online (Discord)", time: "Daily 8:00 PM", going: "134 going" },
    { m: "MAY", d: "09", tag: "Ongoing", glyph: "palette", g1: "#4a1d3a", g2: "#c4568f", title: "Campus Art Exhibition", host: "Arts & Culture", hostColor: "#e08a2a", hostIcon: "palette", place: "Christ University Gallery", time: "11:00 AM – 6:00 PM", going: "78 going" },
    { m: "MAY", d: "08", tag: "Ongoing", glyph: "ball", g1: "#123a2a", g2: "#3f9e6b", title: "Football Premier Week", host: "Sports Community", hostColor: "#12a150", hostIcon: "ball", place: "RVCE Ground", time: "4:00 PM – 7:00 PM", going: "165 going" },
    { m: "MAY", d: "07", tag: "Ongoing", glyph: "case", g1: "#122b4a", g2: "#4a6f9e", title: "Case Study Challenge", host: "Business Community", hostColor: "#123a63", hostIcon: "case", place: "Online", time: "Submissions open", going: "92 going" },
  ],
};

/* ---------- 5. City activity ---------- */
const ACTIVITY = [
  { av: "E", c: "#c0392b", who: "Enpassant", tagline: "(ABESEC)", action: "posted an update", ago: "2h ago", text: "Registration open for Inter-College Rapid Chess Tournament \u265F", likes: 24, comments: 3 },
  { av: "M", c: "#2c6fb5", who: "MOVE_MAKERS", tagline: "(AKGEC)", action: "shared an event", ago: "3h ago", text: "Friendly Match this Saturday! Join now", likes: 18, comments: 2 },
  { av: "C", c: "#e0483c", who: "CodeCache", tagline: "(RVCE)", action: "posted a resource", ago: "5h ago", text: "DSA Roadmap for Placements 2025", likes: 36, comments: 6 },
  { av: "S", c: "#1d8a5b", who: "Startup Minds", tagline: "(RVCE)", action: "posted an update", ago: "6h ago", text: "Looking for UI/UX Designer for our team!", likes: 22, comments: 4 },
  { av: "P", c: "#6d5bd0", who: "Photography Club", tagline: "(KIET)", action: "shared photos", ago: "7h ago", text: "Sunset Walk at Nandi Hills \u26F0", pics: ["#5b6f8c,#c9a06a", "#3f5d7a,#e0b078", "#26405e,#8fb0cc"], likes: 31, comments: 5 },
];

/* ---------- 6. Popular groups ---------- */
const GROUPS = [
  { icon: "brain",   color: "#1f2c3d", name: "AI/ML Enthusiasts", meta: "Tech \u00b7 3.1K members" },
  { icon: "case",    color: "#2c6fb5", name: "Placement Prep Club", meta: "Academics \u00b7 2.7K members" },
  { icon: "palette", color: "#c0392b", name: "Design Circle", meta: "Arts \u00b7 1.8K members" },
  { icon: "robot",   color: "#3b2f6d", name: "Robotics Club", meta: "Tech \u00b7 1.9K members" },
  { icon: "chart",   color: "#1d8a5b", name: "Finance & Markets", meta: "Business \u00b7 1.6K members" },
  { icon: "mic",     color: "#e08a2a", name: "Public Speaking", meta: "Soft skills \u00b7 1.2K members" },
];

/* ---------- inline SVG icon library ---------- */
const S = (p, extra = "") =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ${extra}>${p}</svg>`;

const ICONS = {
  pin: S('<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
  chevron: S('<path d="M6 9.5 12 15.5 18 9.5"/>'),
  "chevron-right": S('<path d="M9.5 6 15.5 12 9.5 18"/>'),
  arrow: S('<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>'),
  chat: S('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12Z"/>'),
  bell: S('<path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7Z"/><path d="M10.5 19.5a2 2 0 0 0 3 0"/>'),
  menu: S('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  search: S('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),
  bank: S('<path d="M3 10h18L12 4 3 10Z"/><path d="M5 10v8M10 10v8M14 10v8M19 10v8"/><path d="M3 20h18"/>'),
  people: S('<circle cx="9" cy="9" r="3.2"/><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5"/><path d="M16.5 8.2a3 3 0 0 1 0 5.6"/><path d="M18 19c-.2-1.7-.7-3-1.6-4"/>'),
  users: S('<circle cx="12" cy="8" r="3.4"/><path d="M5 20c.8-3.7 3.6-5.6 7-5.6s6.2 1.9 7 5.6"/>'),
  cal: S('<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/>'),
  cap: S('<path d="m12 5 9 4-9 4-9-4 9-4Z"/><path d="M7 11v4c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4"/>'),
  code: S('<path d="m8.5 8-4 4 4 4"/><path d="m15.5 8 4 4-4 4"/><path d="m13.5 6-3 12"/>'),
  ball: S('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5c2.5 3 2.5 14 0 17"/><path d="M3.8 9.5c4 1.6 12.4 1.6 16.4 0"/>'),
  palette: S('<path d="M12 20a8 8 0 1 1 8-8c0 2-1.6 2.6-3 2.6h-1.4a1.9 1.9 0 0 0-1.3 3.2c.4.5.2 2.2-2.3 2.2Z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="15.8" cy="10.6" r="1"/>'),
  case: S('<rect x="3" y="7.5" width="18" height="12" rx="2.5"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>'),
  target: S('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'),
  book: S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5h15"/>'),
  chess: S('<path d="M9.5 8.5h5l-.7 3.2h-3.6L9.5 8.5Z"/><circle cx="12" cy="5.6" r="2"/><path d="M9 15.5c.5-2 5.5-2 6 0"/><path d="M7 20h10l-.6-3H7.6L7 20Z"/>'),
  shuttle: S('<path d="m14 4 6 6-6.4 7.6a4 4 0 0 1-5.7.2l-1.7-1.7a4 4 0 0 1 .2-5.7L14 4Z"/><path d="m4 20 3-3"/><path d="M10 6.5 17.5 14"/>'),
  rocket: S('<path d="M13.5 4.5C17 6 19 9.5 19 13l-3.5 3-4-4L14.5 8"/><path d="M9.5 12.5 5 14l1.5-4.5L11 8"/><path d="M8 16c-1.5.6-2.5 2-2.5 4 2 0 3.4-1 4-2.5"/>'),
  camera: S('<path d="M4 8.5h3l1.5-2h7L17 8.5h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.5" r="3.2"/>'),
  mic: S('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 12a6.5 6.5 0 0 0 13 0"/><path d="M12 18.5V21"/>'),
  brain: S('<path d="M9.5 5a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 10a2.6 2.6 0 0 0 1.4 2.3A2.6 2.6 0 0 0 6 14.5C6 16.4 7.6 18 9.5 18H12V5H9.5Z"/><path d="M14.5 5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 10a2.6 2.6 0 0 1-1.4 2.3A2.6 2.6 0 0 1 18 14.5c0 1.9-1.6 3.5-3.5 3.5H12"/>'),
  robot: S('<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4v4"/><circle cx="9.2" cy="13" r="1.2"/><circle cx="14.8" cy="13" r="1.2"/><path d="M2.5 12v3M21.5 12v3"/>'),
  chart: S('<path d="M4 19h16"/><path d="M7 19v-6M12 19V6M17 19v-9"/>'),
  heart: S('<path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"/>'),
  "heart-on": S('<path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z" fill="currentColor"/>'),
  bookmark: S('<path d="M6.5 4h11v16l-5.5-4-5.5 4V4Z"/>'),
  "bookmark-on": S('<path d="M6.5 4h11v16l-5.5-4-5.5 4V4Z" fill="currentColor"/>'),
  comment: S('<path d="M20.5 12a7.5 7.5 0 0 1-10.9 6.7L4.5 20l1.3-4.6A7.5 7.5 0 1 1 20.5 12Z"/>'),
  dots: S('<circle cx="12" cy="5.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="18.5" r="1.2" fill="currentColor" stroke="none"/>'),
  clock: S('<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 1.8"/>'),
  instagram: S('<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".9" fill="currentColor"/>', 'width="15" height="15"'),
  linkedin: S('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2 2 0 0 1 4 0V17"/>', 'width="15" height="15"'),
  twitter: S('<path d="M20 6.5a7 7 0 0 1-2.1.7 3.4 3.4 0 0 0 1.5-1.9 7 7 0 0 1-2.2.9 3.4 3.4 0 0 0-5.9 3.1A9.7 9.7 0 0 1 4.4 5.6a3.4 3.4 0 0 0 1 4.6 3.3 3.3 0 0 1-1.5-.4 3.4 3.4 0 0 0 2.7 3.4 3.4 3.4 0 0 1-1.5.1 3.4 3.4 0 0 0 3.2 2.4A6.9 6.9 0 0 1 4 17.2a9.7 9.7 0 0 0 5.2 1.5c6.3 0 9.8-5.3 9.8-9.8v-.5A6.8 6.8 0 0 0 20 6.5Z"/>', 'width="15" height="15"'),
  youtube: S('<rect x="3" y="6" width="18" height="12" rx="4"/><path d="m10.5 9.5 5 2.5-5 2.5v-5Z"/>', 'width="15" height="15"'),
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function hydrateIcons(root = document) {
  $$("[data-ico]", root).forEach((el) => {
    const name = el.getAttribute("data-ico");
    if (ICONS[name]) el.insertAdjacentHTML("afterbegin", ICONS[name]);
    el.removeAttribute("data-ico");
  });
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("is-on"), 2200);
}

/* ---------- hero artwork (inline SVG skyline + avatar network) ---------- */
const NODES = [
  { x: 26, y: 12, c: "#c0392b", i: "P" },
  { x: 8,  y: 32, c: "#2c6fb5", i: "R" },
  { x: 21, y: 58, c: "#6d5bd0", i: "S" },
  { x: 76, y: 10, c: "#1d8a5b", i: "A" },
  { x: 88, y: 38, c: "#123a63", i: "K" },
  { x: 74, y: 62, c: "#e08a2a", i: "N" },
];

function renderHero() {
  const art = $("#heroArt");
  const bars = [];
  let x = 0;
  const seeds = [58, 96, 40, 120, 72, 150, 46, 104, 62, 132, 50, 88, 116, 44, 78];
  seeds.forEach((h, i) => {
    bars.push(`<rect x="${x}" y="${190 - h}" width="${22 + (i % 3) * 8}" height="${h}" rx="3" fill="#dbe8f5"/>`);
    x += 34 + (i % 3) * 6;
  });
  const links = NODES.map((n) => {
    const x1 = (n.x / 100) * 545 + 23, y1 = (n.y / 100) * 300 + 23;
    return `<path d="M ${x1} ${y1} Q ${(x1 + 272) / 2} ${(y1 + 130) / 2 - 30} 272 138" stroke="#8fb4d8" stroke-width="1.4" stroke-dasharray="5 5" fill="none" opacity=".85"/>`;
  }).join("");

  art.insertAdjacentHTML("afterbegin", `
    <svg class="city" viewBox="0 0 545 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#eef6ff"/><stop offset="1" stop-color="#e2eefa"/>
      </linearGradient></defs>
      <rect width="545" height="300" fill="url(#sky)"/>
      <g transform="translate(0,86)">${bars.join("")}</g>
      <rect y="276" width="545" height="24" fill="#d3e6d6"/>
      <g fill="#e9d9bd" stroke="#d8c39f">
        <rect x="196" y="196" width="150" height="80" rx="4"/>
        <rect x="236" y="170" width="70" height="30" rx="4"/>
        <path d="M271 142c14 10 22 18 22 28h-44c0-10 8-18 22-28Z"/>
      </g>
      <g fill="#8fc79a">
        <circle cx="60" cy="264" r="18"/><circle cx="112" cy="270" r="14"/>
        <circle cx="436" cy="266" r="16"/><circle cx="486" cy="272" r="12"/>
      </g>
      ${links}
    </svg>
  `);

  NODES.forEach((n) => {
    const el = document.createElement("span");
    el.className = "node";
    el.style.left = n.x + "%";
    el.style.top = n.y + "%";
    el.style.background = `linear-gradient(140deg, ${n.c}, ${n.c}bb)`;
    el.textContent = n.i;
    art.appendChild(el);
  });
}

/* ---------- renderers ---------- */
function renderStats() {
  $("#stats").innerHTML = STATS.map((s) => `
    <div class="stat">
      <span class="stat__ico">${ICONS[s.icon]}</span>
      <div><b>${s.value}</b><span>${s.label}</span></div>
    </div>`).join("");
}

function renderChips() {
  $("#chips").innerHTML = INTERESTS.map((c, i) => `
    <button type="button" class="chip${i === 0 ? " is-on" : ""}">
      ${c.icon ? ICONS[c.icon] : ""}${c.label}${c.label === "More" ? ICONS.chevron : ""}
    </button>`).join("");

  $("#chips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip").forEach((c) => c.classList.remove("is-on"));
    b.classList.add("is-on");
    toast(`Showing "${b.textContent.trim()}" communities`);
  });
}

function renderCommunities() {
  $("#communityRail").innerHTML = COMMUNITIES.map((c) => `
    <article class="ccard">
      <div class="ccard__top">
        <span class="ccard__ico" style="background:linear-gradient(140deg, ${c.color}, ${c.color}c0)">${ICONS[c.icon]}</span>
        <div>
          <h3>${c.title}</h3>
          <div class="ccard__meta">${c.members} &nbsp;&bull;&nbsp; ${c.colleges}</div>
        </div>
      </div>
      <p class="ccard__text">${c.text}</p>
      <p class="ccard__label">Top College Groups</p>
      <div class="groups">
        ${c.groups.map((g) => `
          <div class="group">
            <span class="group__logo" style="background:${g.c}">${g.name[0]}</span>
            <div style="min-width:0"><b>${g.name}</b><span>${g.college}</span></div>
          </div>`).join("")}
        <span class="groups__more">${c.more}</span>
      </div>
      <button class="btn btn--green btn--block" type="button" data-join>Join Community</button>
    </article>`).join("");
}

function renderEvents(kind = "upcoming") {
  $("#eventRail").innerHTML = EVENTS[kind].map((e) => `
    <article class="ecard">
      <div class="ecard__media">
        <i style="background:linear-gradient(140deg, ${e.g1}, ${e.g2})"></i>
        <span class="glyph">${ICONS[e.glyph]}</span>
        <span class="date"><u>${e.m}</u><b>${e.d}</b></span>
        <span class="tag">${e.tag}</span>
      </div>
      <div class="ecard__body">
        <h3>${e.title}</h3>
        <div class="ecard__row ecard__row--host">
          <span class="dot" style="background:${e.hostColor}"></span>${e.host}
        </div>
        <div class="ecard__row">${ICONS.pin}${e.place}</div>
        <div class="ecard__row">${ICONS.clock}${e.time}</div>
        <div class="ecard__foot">
          <span class="faces">${["#c0392b", "#2c6fb5", "#1d8a5b", "#6d5bd0", "#e08a2a"].map((c) => `<span style="background:${c}"></span>`).join("")}</span>
          <span>${e.going}</span>
          <button class="savebtn" type="button" data-save aria-label="Save event">${ICONS.bookmark}</button>
        </div>
      </div>
    </article>`).join("");
}

function renderActivity() {
  $("#activityRail").innerHTML = ACTIVITY.map((a) => `
    <article class="acard">
      <div class="acard__head">
        <span class="acard__av" style="background:${a.c}">${a.av}</span>
        <div class="acard__who">
          <b>${a.who} <i>${a.tagline}</i></b>
          <p><em>${a.action}</em> &middot; ${a.ago}</p>
        </div>
        <button class="acard__dots" type="button" aria-label="More">${ICONS.dots}</button>
      </div>
      <p class="acard__text">${a.text}</p>
      ${a.pics ? `<div class="acard__pics">${a.pics.map((p) => {
        const [c1, c2] = p.split(",");
        return `<i style="background:linear-gradient(160deg, ${c1}, ${c2})"></i>`;
      }).join("")}</div>` : ""}
      <div class="acard__foot">
        <button type="button" data-like>${ICONS.heart}<span>${a.likes}</span></button>
        <button type="button">${ICONS.comment}<span>${a.comments}</span></button>
      </div>
    </article>`).join("");
}

function renderGroups() {
  $("#groupRail").innerHTML = GROUPS.map((g) => `
    <article class="gcard">
      <span class="gcard__ico" style="background:linear-gradient(140deg, ${g.color}, ${g.color}c0)">${ICONS[g.icon]}</span>
      <div><b>${g.name}</b><span>${g.meta}</span></div>
    </article>`).join("");
}

function renderCtaArt() {
  $("#ctaArt").innerHTML = `
    <svg viewBox="0 0 300 160" aria-hidden="true">
      <g opacity=".18" fill="#fff">
        <rect x="10" y="60" width="26" height="100" rx="3"/><rect x="46" y="40" width="30" height="120" rx="3"/>
        <rect x="86" y="72" width="24" height="88" rx="3"/><rect x="196" y="52" width="28" height="108" rx="3"/>
        <rect x="234" y="78" width="24" height="82" rx="3"/><rect x="266" y="46" width="26" height="114" rx="3"/>
      </g>
      <g>
        <circle cx="120" cy="62" r="13" fill="#f0c9a0"/><rect x="106" y="78" width="28" height="62" rx="12" fill="#f2a93b"/>
        <circle cx="152" cy="56" r="13" fill="#8c5a3c"/><rect x="138" y="72" width="28" height="68" rx="12" fill="#e7ecf2"/>
        <circle cx="184" cy="62" r="13" fill="#f0c9a0"/><rect x="170" y="78" width="28" height="62" rx="12" fill="#2f8f5b"/>
      </g>
    </svg>`;
}

/* ---------- interactions ---------- */
function wire() {
  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("#search").value.trim();
    toast(q ? `Searching communities for "${q}"…` : "Type something to search.");
  });

  $("#eventTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#eventTabs button").forEach((x) => x.classList.toggle("is-on", x === b));
    renderEvents(b.dataset.tab);
  });

  document.addEventListener("click", (e) => {
    const next = e.target.closest("[data-scroll]");
    if (next) {
      const track = document.getElementById(next.dataset.scroll);
      track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" });
    }

    const join = e.target.closest("[data-join]");
    if (join) {
      const on = join.classList.toggle("is-joined");
      join.textContent = on ? "Joined \u2713" : "Join Community";
      toast(on ? "You joined the community." : "You left the community.");
    }

    const save = e.target.closest("[data-save]");
    if (save) {
      const on = save.classList.toggle("is-on");
      save.innerHTML = on ? ICONS["bookmark-on"] : ICONS.bookmark;
    }

    const like = e.target.closest("[data-like]");
    if (like) {
      const on = like.classList.toggle("is-on");
      const n = like.querySelector("span");
      n.textContent = String(Number(n.textContent) + (on ? 1 : -1));
      like.querySelector("svg").outerHTML = on ? ICONS["heart-on"] : ICONS.heart;
    }

    const t = e.target.closest("[data-toast]");
    if (t) toast(t.dataset.toast);
  });
}

/* ---------- boot ---------- */
renderHero();
renderStats();
renderChips();
renderCommunities();
renderEvents();
renderActivity();
renderGroups();
renderCtaArt();
hydrateIcons();
wire();
