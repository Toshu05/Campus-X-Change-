# CampusXchange — Sign up / Login page

Standalone page (no build step). Open `index.html` in a browser.

## Files
- `index.html` — two-pane layout: brand panel (left) + tabbed auth card (right) + footer
- `styles.css` — design tokens (navy #123a63, blue #1668c9, emerald #12a150) and responsive layout
- `script.js` — form validation, 6-digit OTP inputs, 2-minute expiry countdown, resend, demo account store
- `assets/campus.jpg` — campus photo used in the left panel

## Behaviour
- **Sign up:** name + college ID + phone + college email → Send OTP → 6-digit code valid 2 minutes → account saved to `localStorage`.
- **Login:** name + college ID → Send OTP → verify within 2 minutes.
- **Resend OTP** unlocks only when the countdown reaches 00:00, and restarts the full 2 minutes.
- Demo mode prints the generated code on screen. Set `CONFIG.DEMO = false` in `script.js` and call your backend inside `sendSignupOtp()` / the login resend handler to go live.

Desktop shows both columns side by side; below 1080px the tabs switch between them.
