// CampusXchange Vanilla JS Interactivity & Mock Data Contract

const CATEGORIES = [
  { id: "all", name: "All Categories" },
  { id: "books", name: "Books & Notes" },
  { id: "furniture", name: "Furniture" },
  { id: "electronics", name: "Electronics" },
  { id: "cycles", name: "Cycles" },
  { id: "hostel", name: "Hostel Essentials" },
  { id: "sports", name: "Sports" },
  { id: "lab", name: "Lab Equipment" }
];

const POPULAR_SEARCHES = [
  "iPad", "Calculus Book", "Gym Equipment", "Microwave", "Guitar", "JEE Books", "Chair", "Backpack"
];

let listings = [
  {
    id: "list-1",
    title: "Study Table with Chair",
    category: "furniture",
    categoryName: "Furniture",
    price: 1700,
    condition: "Good condition",
    badge: "New",
    location: "Christ University",
    timeAgo: "10 mins ago",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
    description: "Sturdy wooden study table with comfortable chair. Perfect for long study sessions.",
    seller: { name: "Aarav Sharma", rating: 4.9, campus: "Christ University" }
  },
  {
    id: "list-2",
    title: "First Year Engineering Books (Bundle)",
    category: "books",
    categoryName: "Books & Notes",
    price: 900,
    condition: "Like new",
    badge: "New",
    location: "PES University",
    timeAgo: "25 mins ago",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "All major first year books in good condition. Includes Mathematics, Physics, and C Programming.",
    seller: { name: "Priya Patel", rating: 4.8, campus: "PES University" }
  },
  {
    id: "list-3",
    title: "Badminton Racket + Shuttlecocks",
    category: "sports",
    categoryName: "Sports",
    price: 1100,
    condition: "Good condition",
    badge: "New",
    location: "Karnataka State College",
    timeAgo: "35 mins ago",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    description: "Lightly used racket with 3 shuttlecocks. Great grip and string tension.",
    seller: { name: "Rohan Verma", rating: 4.7, campus: "Karnataka State College" }
  },
  {
    id: "list-4",
    title: "Electric Kettle (1.5L)",
    category: "hostel",
    categoryName: "Hostel Essentials",
    price: 450,
    condition: "Barely used",
    badge: "New",
    location: "RV College of Engineering",
    timeAgo: "46 mins ago",
    image: "https://images.unsplash.com/photo-1594213898144-b5b15b915bb0?auto=format&fit=crop&w=600&q=80",
    description: "Barely used. Perfect for hostel rooms for boiling water, making tea or instant noodles.",
    seller: { name: "Sneha Rao", rating: 5.0, campus: "RV College" }
  },
  {
    id: "list-5",
    title: "Road Bike – Hero Sprint",
    category: "cycles",
    categoryName: "Cycles",
    price: 3200,
    condition: "Good condition",
    badge: "New",
    location: "NITTE Meenakshi",
    timeAgo: "1 hr ago",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
    description: "Well maintained. Smooth gears and brakes. Ideal for daily commute inside campus.",
    seller: { name: "Kiran Kumar", rating: 4.6, campus: "NITTE Meenakshi" }
  },
  {
    id: "list-6",
    title: "LED Desk Lamp",
    category: "hostel",
    categoryName: "Hostel Essentials",
    price: 300,
    condition: "Like new",
    badge: "New",
    location: "St. Joseph's College",
    timeAgo: "1 hr ago",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadfcc6f5d?auto=format&fit=crop&w=600&q=80",
    description: "Adjustable brightness. USB powered with warm and cool light modes.",
    seller: { name: "Ananya Iyer", rating: 4.9, campus: "St. Joseph's" }
  }
];

let wishlist = [];
let activeCategory = "all";
let searchQuery = "";
let sidebarSearchQuery = "";
let sortBy = "Newest First";
let priceMin = "";
let priceMax = "";
let selectedConditions = [];

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderPopularTags();
  renderListings();
  setupEventListeners();
  if (window.lucide) lucide.createIcons();
});

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  toastText.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

function renderCategories() {
  const container = document.getElementById("category-pills");
  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-pill ${cat.id === activeCategory ? 'active' : ''}" onclick="setCategory('${cat.id}')">
      ${cat.name}
    </button>
  `).join('');
}

function setCategory(catId) {
  activeCategory = catId;
  document.getElementById("sidebar-category-select").value = catId;
  renderCategories();
  renderListings();
}

function renderPopularTags() {
  const container = document.getElementById("popular-tags");
  container.innerHTML = POPULAR_SEARCHES.map(term => `
    <button class="tag-pill" onclick="filterByTerm('${term}')">${term}</button>
  `).join('');
}

function filterByTerm(term) {
  document.getElementById("main-search-input").value = term;
  searchQuery = term;
  renderListings();
  showToast(`Filtered by "${term}"`);
}

function renderListings() {
  const feed = document.getElementById("listings-feed");
  
  let filtered = listings.filter(item => {
    const matchesMain = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSidebar = !sidebarSearchQuery || item.title.toLowerCase().includes(sidebarSearchQuery.toLowerCase());
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesMin = !priceMin || item.price >= Number(priceMin);
    const matchesMax = !priceMax || item.price <= Number(priceMax);
    const matchesCond = selectedConditions.length === 0 || selectedConditions.some(c => item.condition.toLowerCase().includes(c.toLowerCase()));
    
    return matchesMain && matchesSidebar && matchesCat && matchesMin && matchesMax && matchesCond;
  });

  if (sortBy === "Price: Low to High") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    feed.innerHTML = `
      <div style="background:#fff; padding:40px; border-radius:16px; text-align:center; border:1px solid #e2e8f0;">
        <h3 style="font-weight:700; color:#0f172a;">No items found</h3>
        <p style="font-size:13px; color:#64748b; margin-top:4px;">Try adjusting your search or filter criteria.</p>
        <button onclick="resetFilters()" style="margin-top:16px; background:#059669; color:#fff; border:none; padding:10px 20px; border-radius:10px; font-weight:600; cursor:pointer;">Reset Filters</button>
      </div>
    `;
    return;
  }

  feed.innerHTML = filtered.map(item => {
    const isWished = wishlist.includes(item.id);
    return `
      <div class="listing-card" onclick="openDetail('${item.id}')">
        <span class="listing-badge">${item.badge}</span>
        <div class="listing-img-wrap">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="listing-info">
          <div>
            <div class="listing-top-row">
              <div>
                <span class="listing-cat">${item.categoryName}</span>
                <h3 class="listing-title">${item.title}</h3>
              </div>
              <div class="listing-price-col">
                <div class="listing-price">₹${item.price.toLocaleString('en-IN')}</div>
                <span class="listing-condition">${item.condition}</span>
              </div>
            </div>
            <p class="listing-desc">${item.description}</p>
          </div>
          <div class="listing-footer">
            <div class="listing-location">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald"></i> ${item.location} • ${item.timeAgo}
            </div>
            <div class="listing-actions" onclick="event.stopPropagation()">
              <button class="heart-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist('${item.id}')">
                <i data-lucide="heart" class="w-4 h-4"></i>
              </button>
              <button class="chat-btn" onclick="openChat('${item.id}')">
                <i data-lucide="message-square" class="w-3.5 h-3.5"></i> Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
    showToast("Removed from saved items");
  } else {
    wishlist.push(id);
    showToast("Saved to wishlist");
  }
  renderListings();
}

function resetFilters() {
  searchQuery = "";
  sidebarSearchQuery = "";
  activeCategory = "all";
  priceMin = "";
  priceMax = "";
  selectedConditions = [];
  document.getElementById("main-search-input").value = "";
  document.getElementById("sidebar-search-input").value = "";
  document.getElementById("sidebar-category-select").value = "all";
  document.getElementById("min-price").value = "";
  document.getElementById("max-price").value = "";
  document.querySelectorAll(".condition-chk").forEach(chk => chk.checked = false);
  renderCategories();
  renderListings();
  showToast("Filters reset");
}

function setupEventListeners() {
  // Search
  document.getElementById("main-search-btn").addEventListener("click", () => {
    searchQuery = document.getElementById("main-search-input").value;
    renderListings();
  });
  document.getElementById("main-search-input").addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
      searchQuery = e.target.value;
      renderListings();
    }
  });

  // Sort
  document.getElementById("sort-select").addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderListings();
  });

  // Sidebar Category
  document.getElementById("sidebar-category-select").addEventListener("change", (e) => {
    activeCategory = e.target.value;
    renderCategories();
    renderListings();
  });

  // Apply Sidebar Filters
  document.getElementById("apply-filters-btn").addEventListener("click", () => {
    sidebarSearchQuery = document.getElementById("sidebar-search-input").value;
    priceMin = document.getElementById("min-price").value;
    priceMax = document.getElementById("max-price").value;
    
    selectedConditions = [];
    document.querySelectorAll(".condition-chk:checked").forEach(chk => {
      selectedConditions.push(chk.value);
    });

    renderListings();
    showToast("Filters applied successfully");
  });

  document.getElementById("clear-filters-btn").addEventListener("click", resetFilters);

  // Modals
  const sellModal = document.getElementById("sell-modal");
  document.getElementById("open-sell-modal-btn").addEventListener("click", () => sellModal.classList.remove("hidden"));
  document.getElementById("close-sell-modal").addEventListener("click", () => sellModal.classList.add("hidden"));

  const requestModal = document.getElementById("request-modal");
  document.getElementById("open-request-modal-btn").addEventListener("click", () => requestModal.classList.remove("hidden"));
  document.getElementById("close-request-modal").addEventListener("click", () => requestModal.classList.add("hidden"));

  const chatModal = document.getElementById("chat-modal");
  document.getElementById("close-chat-modal").addEventListener("click", () => chatModal.classList.add("hidden"));
  document.getElementById("chat-icon-btn").addEventListener("click", () => {
    if (listings.length > 0) openChat(listings[0].id);
  });

  // Sell Form Submit
  document.getElementById("sell-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("sell-title").value;
    const cat = document.getElementById("sell-category").value;
    const price = Number(document.getElementById("sell-price").value);
    const condition = document.getElementById("sell-condition").value;
    const campus = document.getElementById("sell-campus").value;
    const desc = document.getElementById("sell-desc").value;

    const catObj = CATEGORIES.find(c => c.id === cat);
    const newList = {
      id: `list-${Date.now()}`,
      title,
      category: cat,
      categoryName: catObj ? catObj.name : "General",
      price,
      condition,
      badge: "New",
      location: campus,
      timeAgo: "Just now",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description: desc || "No description provided.",
      seller: { name: "You (Student)", rating: 5.0, campus }
    };

    listings.unshift(newList);
    sellModal.classList.add("hidden");
    document.getElementById("sell-form").reset();
    renderListings();
    showToast("Listing published successfully!");
  });

  // Request Form Submit
  document.getElementById("request-form").addEventListener("submit", (e) => {
    e.preventDefault();
    requestModal.classList.add("hidden");
    document.getElementById("request-form").reset();
    showToast("Request posted successfully to campus feed!");
  });

  // Chat Form Submit
  document.getElementById("chat-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("chat-input");
    const val = input.value.trim();
    if (!val) return;

    const container = document.getElementById("chat-messages-container");
    container.innerHTML += `<div class="chat-bubble buyer">${val}</div>`;
    input.value = "";
    container.scrollTop = container.scrollHeight;

    setTimeout(() => {
      container.innerHTML += `<div class="chat-bubble seller">Thanks for your message! Let's meet at the campus library.</div>`;
      container.scrollTop = container.scrollHeight;
    }, 1000);
  });
}

function openChat(id) {
  const item = listings.find(i => i.id === id);
  if (!item) return;

  document.getElementById("chat-seller-name").textContent = item.seller.name;
  document.getElementById("chat-item-subtitle").textContent = `${item.title} • ₹${item.price}`;
  document.getElementById("chat-avatar-letter").textContent = item.seller.name.charAt(0);
  document.getElementById("chat-modal").classList.remove("hidden");
}

function openDetail(id) {
  const item = listings.find(i => i.id === id);
  if (item) {
    openChat(id);
  }
}
