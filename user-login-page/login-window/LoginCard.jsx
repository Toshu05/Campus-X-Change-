import { useEffect, useRef, useState } from "react";
import "./LoginCard.css";

export default function LoginCard() {
  const [step, setStep] = useState("details"); // "details" | "otp" | "success"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef(null);
  const slotRefs = useRef([]);

  useEffect(() => {
    if (cooldown <= 0) return;
    timerRef.current = setInterval(
      () => setCooldown((c) => Math.max(0, c - 1)),
      1000
    );
    return () => clearInterval(timerRef.current);
  }, [cooldown]);

  const isEduEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) &&
    /\.(edu|ac\.[a-z]{2,}|edu\.[a-z]{2,})$/i.test(val);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please enter your name.");
    if (!college.trim()) return setError("Please enter your college name.");
    if (!isEduEmail(email.trim()))
      return setError("Use your college email (ending in .edu or .ac.* ).");

    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setOtp(["", "", "", ""]);
    setStep("otp");
    setCooldown(30);
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setError("");
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setCooldown(30);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    const code = otp.join("");
    if (code.length !== 4) return setError("Enter the 4-digit code.");
    setVerifying(true);
    await new Promise((r) => setTimeout(r, 900));
    setVerifying(false);
    setStep("success");
  };

  const updateSlot = (idx, val) => {
    const v = val.replace(/\D/g, "").slice(0, 1);
    const next = [...otp];
    next[idx] = v;
    setOtp(next);
    if (v && idx < 3) slotRefs.current[idx + 1]?.focus();
  };

  const handleKey = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      slotRefs.current[idx - 1]?.focus();
  };

  return (
    <div className="lc-shell">
      <div className="lc-glow" aria-hidden />
      <div className="lc-card">
        <header className="lc-header">
          <div className="lc-brand-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>
            </svg>
          </div>
          <div>
            <p className="lc-eyebrow">Campus Access</p>
            <h2 className="lc-title">Sign in to continue</h2>
          </div>
        </header>

        <div className="lc-body">
          <div className="lc-stepper">
            <span className={`lc-step ${step !== "details" ? "is-active" : ""}`}>1</span>
            <span className="lc-step-line" />
            <span className={`lc-step ${step === "success" ? "is-active" : ""}`}>2</span>
          </div>

          {step === "details" && (
            <form onSubmit={handleSendOtp} className="lc-form">
              <Field label="Full name">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Aarav Sharma" autoComplete="name" />
              </Field>
              <Field label="College name">
                <input type="text" value={college} onChange={(e) => setCollege(e.target.value)}
                  placeholder="Indian Institute of Technology" />
              </Field>
              <Field label="College email">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@college.edu" autoComplete="email" />
              </Field>

              {error && <p className="lc-error">{error}</p>}

              <button type="submit" className="lc-btn lc-btn-primary" disabled={sending}>
                {sending ? "Sending code…" : "Send OTP →"}
              </button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleVerify} className="lc-form">
              <div className="lc-otp-info">
                <p className="lc-muted">We sent a 4-digit code to</p>
                <p className="lc-strong">{email}</p>
              </div>

              <div className="lc-otp-group">
                {otp.map((v, i) => (
                  <input
                    key={i}
                    ref={(el) => (slotRefs.current[i] = el)}
                    className="lc-otp-slot"
                    inputMode="numeric"
                    maxLength={1}
                    value={v}
                    onChange={(e) => updateSlot(i, e.target.value)}
                    onKeyDown={(e) => handleKey(i, e)}
                  />
                ))}
              </div>

              {error && <p className="lc-error lc-center">{error}</p>}

              <div className="lc-row-between">
                <button type="button" className="lc-link" onClick={() => setStep("details")}>
                  ← Edit details
                </button>
                <button type="button" className="lc-link lc-gold"
                  onClick={handleResend} disabled={cooldown > 0 || sending}>
                  {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
                </button>
              </div>

              <button type="submit" className="lc-btn lc-btn-primary" disabled={verifying}>
                {verifying ? "Verifying…" : "Verify & continue"}
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="lc-success">
              <div className="lc-success-icon">✓</div>
              <h3 className="lc-success-title">Welcome, {name.split(" ")[0]}!</h3>
              <p className="lc-muted">
                You're signed in with <span className="lc-strong">{college}</span>.
              </p>
              <button className="lc-btn lc-btn-outline" onClick={() => {
                setStep("details");
                setOtp(["", "", "", ""]);
              }}>
                Sign out
              </button>
            </div>
          )}

          <p className="lc-legal">By continuing, you agree to our Terms & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="lc-field">
      <span className="lc-label">{label}</span>
      {children}
    </label>
  );
}