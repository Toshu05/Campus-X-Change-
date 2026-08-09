/* =============================================================
   CampusXchange — How it works / Sell an item
   All content lives in the CONFIG blocks below. Edit freely.
   ============================================================= */

/* ---------- 1. How-it-works steps ---------- */
const STEPS = [
  { icon: "upload",  title: 'Click "Sell an item"', text: "Get started by clicking the Sell an item button." },
  { icon: "camera",  title: "Add photos",           text: "Upload up to 6 clear photos of your item." },
  { icon: "form",    title: "Fill in details",      text: "Add description, price, quality, category and area." },
  { icon: "shield2", title: "Review & publish",     text: "Review your listing and publish it for others." },
  { icon: "chat2",   title: "Connect",              text: "Buyers will contact you through chat." },
  { icon: "box",     title: "Hand over & done!",    text: "Meet, exchange and complete the deal." },
];

/* ---------- 2. Listing photos (swap URLs with your own) ---------- */
const PHOTOS = [
  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=70",
];

/* ---------- 3. Sidebar tips ---------- */
const TIPS = [
  { icon: "camera", tint: "var(--tint-blue)",   color: "var(--blue)",  title: "Use clear, well-lit photos", text: "Good photos get more clicks." },
  { icon: "pencil", tint: "var(--tint-violet)", color: "#6d5bd0",      title: "Write honest description",   text: "Mention condition, features and any flaws." },
  { icon: "tag",    tint: "var(--tint-orange)", color: "#d98324",      title: "Set a fair price",           text: "Check similar listings to price it right." },
  { icon: "chat2",  tint: "var(--tint-green)",  color: "var(--green)", title: "Respond quickly",            text: "Fast replies = happy buyers." },
  { icon: "pin",    tint: "var(--tint-cyan)",   color: "#2a8c9c",      title: "Meet in safe places",        text: "Prefer public places when meeting." },
];

/* ---------- inline SVG icon library ---------- */
const S = (p, extra = "") =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ${extra}>${p}</svg>`;

const ICONS = {
  pin: S('<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
  chevron: S('<path d="M6 9.5 12 15.5 18 9.5"/>'),
  chat: S('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12Z"/>'),
  chat2: S('<path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.3-4.6A7.5 7.5 0 1 1 20 11.5Z"/><path d="M9 11h6M9 14h3"/>'),
  bell: S('<path d="M18 15V10a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 15Z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
  menu: S('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  shield: S('<path d="M12 3.5 19 6v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-2.5Z"/><path d="m9 12 2.2 2.2L15.2 10"/>'),
  shield2: S('<path d="M12 3.5 19 6v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-2.5Z"/><path d="m9 12 2.2 2.2L15.2 10"/>'),
  upload: S('<path d="M6.5 17.5A4 4 0 0 1 7 9.6 5.5 5.5 0 0 1 17.8 10a3.8 3.8 0 0 1 .2 7.5"/><path d="M12 20v-8"/><path d="m9 15 3-3 3 3"/>'),
  camera: S('<path d="M4 8.5h3l1.4-2h7.2L17 8.5h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.5" r="3"/>'),
  form: S('<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4"/>'),
  box: S('<path d="M20.5 8.2 12 12 3.5 8.2 12 4.5l8.5 3.7Z"/><path d="M3.5 8.2v7.6L12 19.5l8.5-3.7V8.2"/><path d="M12 12v7.5"/>'),
  arrow: S('<path d="M5 12h13"/><path d="m13 6.5 6 5.5-6 5.5"/>'),
  "arrow-w": S('<path d="M5 12h13"/><path d="m13 6.5 6 5.5-6 5.5"/>'),
  draft: S('<path d="M5 5.5A1.5 1.5 0 0 1 6.5 4h7L19 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-13Z"/><path d="M9 12.5h6M9 16h4"/>'),
  x: S('<path d="M6 6l12 12M18 6 6 18"/>', 'stroke-width="2.4"'),
  plus: S('<path d="M12 5.5v13M5.5 12h13"/>'),
  tick: S('<path d="m5 12.5 4.5 4.5L19 7"/>', 'stroke-width="3"'),
  info: S('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/>'),
  eye: S('<path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12S18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/>'),
  heart: S('<path d="M12 19.5s-7-4.4-7-9a3.9 3.9 0 0 1 7-2.4A3.9 3.9 0 0 1 19 10.5c0 4.6-7 9-7 9Z"/>'),
  "heart-on": S('<path d="M12 19.5s-7-4.4-7-9a3.9 3.9 0 0 1 7-2.4A3.9 3.9 0 0 1 19 10.5c0 4.6-7 9-7 9Z" fill="currentColor"/>'),
  pencil: S('<path d="M4.5 19.5h4L19 9a2.1 2.1 0 0 0-3-3L5.5 16.5l-1 3Z"/>'),
  tag: S('<path d="M12.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v6.5L11 21 3 13l9.5-9.5Z"/><circle cx="16" cy="8" r="1.3"/>'),
  instagram: S('<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.4"/><path d="M16.8 7.4v.2"/>'),
  linkedin: S('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 10.5V16M8 8v.2M12 16v-3.2a2 2 0 0 1 4 0V16"/>'),
  twitter: S('<path d="M20 6.4a6.4 6.4 0 0 1-2 .7 3.2 3.2 0 0 0-5.5 2.2v.7A8.9 8.9 0 0 1 5 6.6s-3 6.9 4 10a9 9 0 0 1-5 1.4c7 4 15 0 15-9.2a3.4 3.4 0 0 0 0-.6c.6-.6 1.2-1.2 1.5-2Z"/>'),
  youtube: S('<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="m11 9.8 4 2.2-4 2.2V9.8Z"/>'),
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function paintIcons(root = document) {
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

/* ---------- render: steps ---------- */
$("#steps").innerHTML = STEPS.map(
  (s, i) => `
  <div class="step">
    <div class="step__ico">${ICONS[s.icon]}</div>
    <div class="step__num">${i + 1}</div>
    <div class="step__title">${s.title}</div>
    <p class="step__text">${s.text}</p>
  </div>`
).join("");

/* ---------- render: tips ---------- */
$("#tips").innerHTML = TIPS.map(
  (t) => `
  <div class="tip">
    <span class="tip__ico" style="background:${t.tint};color:${t.color}">${ICONS[t.icon]}</span>
    <div><strong>${t.title}</strong><p>${t.text}</p></div>
  </div>`
).join("");

/* ---------- photos (add / remove, max 6) ---------- */
const MAX_PHOTOS = 6;
let photos = [...PHOTOS];

function renderPhotos() {
  const cells = photos
    .map(
      (src, i) => `
    <div class="photo">
      <img src="${src}" alt="Item photo ${i + 1}" loading="lazy" />
      <button class="photo__x" type="button" data-remove="${i}" aria-label="Remove photo">${ICONS.x}</button>
    </div>`
    )
    .join("");

  const add =
    photos.length < MAX_PHOTOS
      ? `<button class="photo photo--add" type="button" id="addPhoto"><div>${ICONS.plus}<span>Add photo</span></div></button>`
      : "";

  $("#photos").innerHTML = cells + add;
  renderPreview();
}

$("#photos").addEventListener("click", (e) => {
  const rm = e.target.closest("[data-remove]");
  if (rm) {
    photos.splice(+rm.dataset.remove, 1);
    renderPhotos();
    return;
  }
  if (e.target.closest("#addPhoto")) filePicker.click();
});

// hidden file input so "Add photo" really works
const filePicker = Object.assign(document.createElement("input"), {
  type: "file",
  accept: "image/*",
  multiple: true,
});
filePicker.style.display = "none";
document.body.appendChild(filePicker);
filePicker.addEventListener("change", () => {
  [...filePicker.files].slice(0, MAX_PHOTOS - photos.length).forEach((f) => {
    photos.push(URL.createObjectURL(f));
  });
  filePicker.value = "";
  renderPhotos();
});

/* ---------- condition segment ---------- */
$$("#condition button").forEach((b) =>
  b.addEventListener("click", () => {
    $$("#condition button").forEach((o) => o.classList.remove("is-on"));
    b.classList.add("is-on");
    renderPreview();
  })
);

/* ---------- listing preference radios ---------- */
$$("#prefs .radio").forEach((r) =>
  r.addEventListener("click", () => {
    $$("#prefs .radio").forEach((o) => o.classList.remove("is-on"));
    r.classList.add("is-on");
  })
);

/* ---------- live preview ---------- */
const money = (v) => "₹" + (Number(String(v).replace(/[^\d]/g, "")) || 0).toLocaleString("en-IN");

function renderPreview() {
  const title = $("#title").value.trim() || "Your item title";
  const desc = $("#desc").value.trim();

  $("#pvTitle").textContent = title;
  $("#pvPrice").textContent = money($("#price").value);
  $("#pvNeg").style.display = $("#negotiable").checked ? "" : "none";
  $("#pvCond").textContent = $("#condition .is-on").textContent;
  $("#pvMeta").textContent = `${$("#category").value} · ${$("#area").value}, ${$("#city").value}`;
  $("#pvDesc").textContent = desc.replace(/\n+/g, " ");
  $("#descCount").textContent = $("#desc").value.length;

  const hero = photos[0] || "";
  $("#pvImage").src = hero;
  $("#pvImage").alt = title;

  const shown = photos.slice(0, 4);
  const extra = photos.length - shown.length;
  $("#pvThumbs").innerHTML =
    shown.map((s) => `<div><img src="${s}" alt="" loading="lazy" /></div>`).join("") +
    (photos.length ? `<div>+${extra > 0 ? extra : 2}</div>` : "");
}

["#title", "#price", "#desc", "#category", "#area", "#city", "#negotiable"].forEach((sel) =>
  $(sel).addEventListener("input", renderPreview)
);

/* ---------- heart toggle ---------- */
$("#heart").addEventListener("click", (e) => {
  const b = e.currentTarget;
  b.classList.toggle("is-on");
  b.innerHTML = b.classList.contains("is-on") ? ICONS["heart-on"] : ICONS.heart;
});

/* ---------- draft + submit ---------- */
$("#saveDraft").addEventListener("click", () => toast("Draft saved"));

$("#sellForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!$("#title").value.trim() || !$("#price").value.trim() || !$("#desc").value.trim()) {
    toast("Please fill the required fields");
    return;
  }
  if (!photos.length) {
    toast("Add at least one photo");
    return;
  }
  toast("Listing ready — review & publish!");
});

/* ---------- boot ---------- */
paintIcons();
renderPhotos();
renderPreview();
