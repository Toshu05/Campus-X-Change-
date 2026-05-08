(function () {
  "use strict";

  // ---- State ----
  const state = {
    step: "details", // "details" | "otp" | "success"
    name: "",
    email: "",
    college: "",
    cooldown: 0,
  };
  let cooldownTimer = null;

  // ---- Elements ----
  const $ = (sel) => document.querySelector(sel);
  const formDetails = $("#form-details");
  const formOtp = $("#form-otp");
  const successEl = $("#success");

  const nameInput = $("#name");
  const collegeInput = $("#college");
  const emailInput = $("#email");
  const errorDetails = $("#error-details");

  const otpEmailEl = $("#otp-email");
  const otpSlots = Array.from(document.querySelectorAll(".otp-slot"));
  const errorOtp = $("#error-otp");

  const btnSend = $("#btn-send");
  const btnVerify = $("#btn-verify");
  const btnResend = $("#btn-resend");
  const resendLabel = $("#resend-label");
  const resendIcon = $("#resend-icon");
  const btnEdit = $("#btn-edit");
  const btnSignout = $("#btn-signout");

  const step1 = $("#step1");
  const step2 = $("#step2");
  const successName = $("#success-name");
  const successCollege = $("#success-college");

  // ---- Helpers ----
  function isEduEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) &&
           /\.(edu|ac\.[a-z]{2,}|edu\.[a-z]{2,})$/i.test(val);
  }

  function setError(el, msg) {
    el.textContent = msg || "";
  }

  function render() {
    formDetails.classList.toggle("hidden", state.step !== "details");
    formOtp.classList.toggle("hidden", state.step !== "otp");
    successEl.classList.toggle("hidden", state.step !== "success");

    step1.classList.toggle("active", state.step !== "details");
    step2.classList.toggle("active", state.step === "success");
  }

  function startCooldown(seconds) {
    state.cooldown = seconds;
    updateResend();
    clearInterval(cooldownTimer);
    cooldownTimer = setInterval(() => {
      state.cooldown = Math.max(0, state.cooldown - 1);
      updateResend();
      if (state.cooldown === 0) clearInterval(cooldownTimer);
    }, 1000);
  }

  function updateResend() {
    if (state.cooldown > 0) {
      btnResend.disabled = true;
      resendLabel.textContent = `Resend in ${state.cooldown}s`;
    } else {
      btnResend.disabled = false;
      resendLabel.textContent = "Resend OTP";
    }
  }

  function getOtpValue() {
    return otpSlots.map((s) => s.value).join("");
  }

  function clearOtp() {
    otpSlots.forEach((s) => (s.value = ""));
    otpSlots[0].focus();
  }

  // ---- Step 1: send OTP ----
  formDetails.addEventListener("submit", async (e) => {
    e.preventDefault();
    setError(errorDetails, "");

    state.name = nameInput.value.trim();
    state.college = collegeInput.value.trim();
    state.email = emailInput.value.trim();

    if (!state.name) return setError(errorDetails, "Please enter your name.");
    if (!state.college) return setError(errorDetails, "Please enter your college name.");
    if (!isEduEmail(state.email))
      return setError(errorDetails, "Use your college email (ending in .edu or .ac.* ).");

    btnSend.disabled = true;
    btnSend.querySelector(".btn-label").textContent = "Sending code…";
    await new Promise((r) => setTimeout(r, 900));
    btnSend.disabled = false;
    btnSend.querySelector(".btn-label").textContent = "Send OTP";

    state.step = "otp";
    otpEmailEl.textContent = state.email;
    render();
    clearOtp();
    startCooldown(30);
  });

  // ---- OTP slot behavior ----
  otpSlots.forEach((slot, idx) => {
    slot.addEventListener("input", (e) => {
      const v = e.target.value.replace(/\D/g, "").slice(0, 1);
      e.target.value = v;
      if (v && idx < otpSlots.length - 1) otpSlots[idx + 1].focus();
    });
    slot.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && idx > 0) {
        otpSlots[idx - 1].focus();
      }
    });
    slot.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "");
      text.split("").slice(0, otpSlots.length).forEach((ch, i) => (otpSlots[i].value = ch));
      const next = Math.min(text.length, otpSlots.length - 1);
      otpSlots[next].focus();
    });
  });

  // ---- Resend ----
  btnResend.addEventListener("click", async () => {
    if (state.cooldown > 0) return;
    setError(errorOtp, "");
    btnResend.disabled = true;
    resendIcon.classList.add("spin");
    await new Promise((r) => setTimeout(r, 700));
    resendIcon.classList.remove("spin");
    startCooldown(30);
  });

  // ---- Edit details ----
  btnEdit.addEventListener("click", () => {
    state.step = "details";
    render();
  });

  // ---- Verify ----
  formOtp.addEventListener("submit", async (e) => {
    e.preventDefault();
    setError(errorOtp, "");
    const code = getOtpValue();
    if (code.length !== 4) return setError(errorOtp, "Enter the 4-digit code.");

    btnVerify.disabled = true;
    btnVerify.querySelector(".btn-label").textContent = "Verifying…";
    await new Promise((r) => setTimeout(r, 900));
    btnVerify.disabled = false;
    btnVerify.querySelector(".btn-label").textContent = "Verify & continue";

    successName.textContent = state.name.split(" ")[0];
    successCollege.textContent = state.college;
    state.step = "success";
    render();
  });

  // ---- Sign out ----
  btnSignout.addEventListener("click", () => {
    state.step = "details";
    clearOtp();
    render();
  });

  // ---- Initial render ----
  render();
})();