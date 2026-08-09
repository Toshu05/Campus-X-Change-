/* CampusXchange — Sign up / Login (front-end demo)
   Accounts are stored in localStorage. OTPs live for 2 minutes; the resend
   button unlocks only after the countdown reaches 00:00. */
const CONFIG = { OTP_TTL: 120, DEMO: true, STORE: "cx.accounts" };

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const accounts = () => JSON.parse(localStorage.getItem(CONFIG.STORE) || "[]");
const saveAccounts = (a) => localStorage.setItem(CONFIG.STORE, JSON.stringify(a));
const norm = (v) => v.trim().toLowerCase().replace(/\s+/g, " ");
const code6 = () => String(Math.floor(100000 + Math.random() * 900000));
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const isPhone = (v) => /^[0-9+\-\s]{10,15}$/.test(v);

/* ---------------- tabs ---------------- */
const panes = { signup: $("#pane-signup"), login: $("#pane-login") };
const tabs = { signup: $("#tab-signup"), login: $("#tab-login") };
function selectTab(which) {
  Object.entries(tabs).forEach(([k, el]) => el.setAttribute("aria-selected", String(k === which)));
  Object.entries(panes).forEach(([k, el]) => el.classList.toggle("active", k === which));
}
Object.entries(tabs).forEach(([k, el]) => el.addEventListener("click", () => selectTab(k)));
$$("[data-goto]").forEach((b) => b.addEventListener("click", () => selectTab(b.dataset.goto)));

/* ---------------- OTP boxes ---------------- */
function wireOtp(root) {
  const boxes = $$("input", root);
  boxes.forEach((box, i) => {
    box.addEventListener("input", () => {
      box.value = box.value.replace(/\D/g, "").slice(0, 1);
      if (box.value && boxes[i + 1]) boxes[i + 1].focus();
    });
    box.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !box.value && boxes[i - 1]) boxes[i - 1].focus();
      if (e.key === "ArrowLeft" && boxes[i - 1]) boxes[i - 1].focus();
      if (e.key === "ArrowRight" && boxes[i + 1]) boxes[i + 1].focus();
    });
    box.addEventListener("paste", (e) => {
      const digits = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6);
      if (!digits) return;
      e.preventDefault();
      digits.split("").forEach((d, k) => { if (boxes[k]) boxes[k].value = d; });
      boxes[Math.min(digits.length, 5)].focus();
    });
  });
  return {
    boxes,
    value: () => boxes.map((b) => b.value).join(""),
    clear: () => boxes.forEach((b) => (b.value = "")),
    setEnabled: (on) => {
      boxes.forEach((b) => (b.disabled = !on));
      root.classList.toggle("locked", !on);
      if (on) boxes[0].focus();
    },
  };
}

/* ---------------- OTP session (2 min) ---------------- */
function makeSession({ timerEl, resendBtn, resendLabel, onExpire }) {
  let code = null, left = 0, tick = null;
  const paint = () => {
    timerEl.textContent = mmss(left);
    resendBtn.disabled = left > 0;
    if (resendLabel) resendLabel.textContent = left > 0 ? "Resend OTP" : (code ? "Resend OTP" : "Send OTP");
  };
  const stop = () => { if (tick) clearInterval(tick); tick = null; };
  return {
    get code() { return code; },
    get active() { return left > 0; },
    start() {
      code = code6(); left = CONFIG.OTP_TTL; stop(); paint();
      tick = setInterval(() => {
        left -= 1; paint();
        if (left <= 0) { stop(); onExpire && onExpire(); }
      }, 1000);
      return code;
    },
    reset() { stop(); code = null; left = 0; paint(); },
  };
}

/* ================= SIGN UP ================= */
const suOtp = wireOtp($("#su-otp"));
const suSession = makeSession({
  timerEl: $("#su-timer"),
  resendBtn: $("#su-resend"),
  onExpire: () => {
    suOtp.setEnabled(false);
    $("#su-otp-err").textContent = "This code expired. Tap Resend OTP to get a new one.";
  },
});
let pending = null;

function sendSignupOtp() {
  const code = suSession.start();
  suOtp.clear();
  suOtp.setEnabled(true);
  $("#su-otp-err").textContent = "";
  $("#su-otp-email").textContent = pending.email;
  $("#su-demo").textContent = CONFIG.DEMO ? `Demo mode — your OTP is ${code}` : "";
  $("#su-demo").classList.toggle("hidden", !CONFIG.DEMO);
}

$("#signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#su-name").value.trim();
  const collegeId = $("#su-id").value.trim();
  const phone = $("#su-phone").value.trim();
  const email = $("#su-email").value.trim();
  const err = $("#su-err");
  if (name.length < 2) return (err.textContent = "Enter your full name.");
  if (collegeId.length < 3) return (err.textContent = "Enter your college ID.");
  if (!isPhone(phone)) return (err.textContent = "Enter a valid phone number.");
  if (!isEmail(email)) return (err.textContent = "Enter your official college email ID.");
  if (accounts().some((a) => norm(a.collegeId) === norm(collegeId)))
    return (err.textContent = "An account already exists for this college ID.");
  err.textContent = "";
  pending = { name, collegeId, phone, email };
  $("#signup-form").classList.add("hidden");
  $("#su-otp-block").classList.remove("hidden");
  sendSignupOtp();
});

$("#su-resend").addEventListener("click", () => {
  const btn = $("#su-resend");
  btn.classList.add("spin");
  setTimeout(() => { btn.classList.remove("spin"); sendSignupOtp(); }, 600);
});

$("#su-verify").addEventListener("click", () => {
  const err = $("#su-otp-err");
  if (!suSession.active) return (err.textContent = "This code expired. Tap Resend OTP to get a new one.");
  const entered = suOtp.value();
  if (entered.length !== 6) return (err.textContent = "Enter all 6 digits.");
  if (entered !== suSession.code) return (err.textContent = "Incorrect code. Please try again.");
  err.textContent = "";
  suSession.reset();
  const list = accounts();
  list.push({ ...pending, verified: true, createdAt: Date.now() });
  saveAccounts(list);
  $("#su-otp-block").classList.add("hidden");
  $("#su-done").classList.remove("hidden");
  $("#su-done-msg").textContent = `${pending.name}, your college email ${pending.email} is verified.`;
});

$("#su-goto-login").addEventListener("click", () => {
  $("#li-name").value = pending?.name || "";
  $("#li-id").value = pending?.collegeId || "";
  selectTab("login");
  $("#li-name").focus();
});

$$('[data-edit="signup"]').forEach((b) => b.addEventListener("click", () => {
  suSession.reset();
  $("#su-otp-block").classList.add("hidden");
  $("#signup-form").classList.remove("hidden");
}));

/* ================= LOGIN ================= */
const liOtp = wireOtp($("#li-otp"));
const liSession = makeSession({
  timerEl: $("#li-timer"),
  resendBtn: $("#li-resend"),
  resendLabel: $("#li-resend-label"),
  onExpire: () => {
    liOtp.setEnabled(false);
    $("#li-err").textContent = "This code expired. Tap Resend OTP to get a new one.";
  },
});

function findAccount() {
  const name = $("#li-name").value.trim();
  const collegeId = $("#li-id").value.trim();
  if (name.length < 2) return { error: "Enter your full name." };
  if (collegeId.length < 3) return { error: "Enter your college ID." };
  const acc = accounts().find((a) => norm(a.collegeId) === norm(collegeId) && norm(a.name) === norm(name));
  if (!acc) return { error: "No verified account matches that name and college ID. Sign up first." };
  return { acc };
}

$("#li-resend").addEventListener("click", () => {
  const { acc, error } = findAccount();
  const err = $("#li-err");
  if (error) return (err.textContent = error);
  err.textContent = "";
  const btn = $("#li-resend");
  btn.classList.add("spin");
  setTimeout(() => {
    btn.classList.remove("spin");
    const code = liSession.start();
    liOtp.clear();
    liOtp.setEnabled(true);
    const demo = $("#li-demo");
    demo.textContent = CONFIG.DEMO ? `Demo mode — OTP sent to ${acc.email}: ${code}` : `OTP sent to ${acc.email}`;
    demo.classList.remove("hidden");
  }, 600);
});

$("#login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const err = $("#li-err");
  const { acc, error } = findAccount();
  if (error) return (err.textContent = error);
  if (!liSession.active) return (err.textContent = "Tap Send OTP to get a code on your college email.");
  const entered = liOtp.value();
  if (entered.length !== 6) return (err.textContent = "Enter all 6 digits.");
  if (entered !== liSession.code) return (err.textContent = "Incorrect code. Please try again.");
  err.textContent = "";
  liSession.reset();
  window.location.href = "../home_page/index.html";
});
