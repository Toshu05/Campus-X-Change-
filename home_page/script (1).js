/* CampusXchange homepage — data rendering + small interactions */

const CATEGORIES = [
  { name: "Books & Notes", count: "1,243 listings" },
  { name: "Hostel Essentials", count: "1,280 listings" },
  { name: "Furniture", count: "980 listings" },
  { name: "Electronics", count: "720 listings" },
  { name: "Cycles", count: "340 listings" },
  { name: "Sports Gear", count: "290 listings" },
  { name: "Lab Equipment", count: "310 listings" },
  { name: "Kitchen Items", count: "660 listings" },
];

const LISTINGS = [
  {
    title: "Study Table + Chair Set", price: "₹1,700", condition: "Good condition",
    where: "1.5 km · Christ University", tag: "Pickup this weekend",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80",
    alt: "Study table with lamp and chair",
  },
  {
    title: "First-Year Engineering Books Bundle", price: "₹900", condition: "Like new",
    where: "2.1 km · PES University", tag: "Verified student",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&q=80",
    alt: "Stack of engineering textbooks on a desk",
  },
  {
    title: "Badminton Racket Pair + Shuttles", price: "₹1,100", condition: "Good condition",
    where: "3.3 km · Koramangala", tag: "Available today",
    img: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=700&q=80",
    alt: "Badminton rackets and shuttlecocks",
  },
  {
    title: "Electric Kettle, 1.5L", price: "₹450", condition: "Barely used",
    where: "4.0 km · St. Joseph's", tag: "Pickup ready",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&q=80",
    alt: "Electric kettle on a kitchen counter",
  },
];

/* Render category cards */
document.getElementById("catGrid").innerHTML = CATEGORIES.map((c, i) => `
  <a class="cat-card" href="#marketplace">
    <div class="cat-num">${String(i + 1).padStart(2, "0")}</div>
    <h4>${c.name}</h4>
    <small>${c.count}</small>
  </a>
`).join("");

/* Render listing cards */
document.getElementById("listingGrid").innerHTML = LISTINGS.map((l) => `
  <article class="listing">
    <div class="listing-media">
      <img src="${l.img}" alt="${l.alt}" loading="lazy" />
      <button class="save" aria-pressed="false" aria-label="Save ${l.title}">♡</button>
    </div>
    <div class="listing-body">
      <h4>${l.title}</h4>
      <div class="price"><strong>${l.price}</strong><span>${l.condition}</span></div>
      <div class="where">${l.where}</div>
      <div class="tag">${l.tag}</div>
    </div>
  </article>
`).join("");

/* Save / bookmark toggle */
document.getElementById("listingGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".save");
  if (!btn) return;
  const on = btn.getAttribute("aria-pressed") === "true";
  btn.setAttribute("aria-pressed", String(!on));
  btn.textContent = on ? "♡" : "♥";
});

/* Mobile nav */
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));

/* Search */
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const cards = [...document.querySelectorAll("#listingGrid .listing")];
  cards.forEach((card) => {
    const match = !q || card.textContent.toLowerCase().includes(q);
    card.style.display = match ? "" : "none";
  });
  document.getElementById("marketplace").scrollIntoView({ behavior: "smooth" });
});
//for clicking the usser icon
const userIcon = document.getElementById("userIcon");
const userDropdown = document.getElementById("userDropdown");

userIcon.addEventListener("click", function (e) {
    e.preventDefault();
    userDropdown.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (
        !userIcon.contains(e.target) &&
        !userDropdown.contains(e.target)
    ) {
        userDropdown.classList.remove("show");
    }
});