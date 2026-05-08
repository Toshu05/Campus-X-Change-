# Campus Login Window — Standalone Files

Two flavors are included so you can pick whichever fits your stack.

## 1. Pure HTML / CSS / JS (no build step)
Open `index.html` in any browser — it just works.

- `index.html` — markup
- `styles.css` — design system + layout (black/golden/beige gradient theme)
- `script.js` — form validation, OTP slot navigation, resend cooldown, step transitions

## 2. React component
Drop into any React project (Vite, Next.js, CRA, etc.).

- `LoginCard.jsx` — the component (uses local `useState`, no extra deps)
- `LoginCard.css` — scoped `.lc-*` styles, no Tailwind required

Usage:
```jsx
import LoginCard from "./LoginCard";

export default function App() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center",
                   background: "linear-gradient(160deg,#f6efe1,#ead9b8 60%,#d9be7e)" }}>
      <LoginCard />
    </main>
  );
}
```

## Behavior
1. Step 1 collects **name**, **college name**, **college email** (validates `.edu` / `.ac.*`).
2. Step 2 shows a 4-digit **OTP** input with auto-advance, paste support, and a **Resend** button with a 30-second cooldown.
3. Success screen greets the user. The OTP is mocked locally — wire `handleSendOtp` and `handleVerify` to your backend to make it real.

## Theme
Edit the CSS variables at the top of `styles.css` / `LoginCard.css` to retune the black → gold → beige palette.