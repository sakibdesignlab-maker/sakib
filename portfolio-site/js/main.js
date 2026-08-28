// ============================================================
// Site data can be edited from the admin panel.
// Bengali remains the default language. English is optional.
// ============================================================
const CONFIG = {
  name: "আপনার নাম / ব্র্যান্ড নাম",
  name_en: "Your Name / Brand Name",
  tagline: "লোগো, ব্যানার, সোশ্যাল মিডিয়া ও ভেক্টর ডিজাইন — এক জায়গায়",
  tagline_en: "Logo, banner, social media and vector design — all in one place",
  bio: "আমি একজন ফ্রিলান্স গ্রাফিক ডিজাইনার। বিভিন্ন ব্র্যান্ডের জন্য লোগো, ব্যানার, সোশ্যাল মিডিয়া কনটেন্ট আর ভেক্টর আর্ট তৈরি করি।",
  bio_en: "I am a freelance graphic designer creating logos, banners, social media content and vector artwork for different brands.",
  profileImage: "/images/uploads/profile-placeholder.svg",
  favicon: "/favicon.svg",
  logo: "/favicon.svg",
  phone: "",
  email: "youremail@example.com",
  location: "",
  whatsappNumber: "8801XXXXXXXXX",
  whatsappMessage: "হাই, আমি আপনার পোর্টফোলিও দেখলাম। একটা কাজ নিয়ে কথা বলতে চাই।",
  whatsappMessage_en: "Hi, I saw your portfolio and would like to discuss a project.",
  yearsExperience: "৩+",
  yearsExperience_en: "3+",
  projectsDone: "৮০+",
  projectsDone_en: "80+",
  happyClients: "৫০+",
  happyClients_en: "50+",
};

const TRANSLATIONS = {
  bn: {
    navWork: "কাজ", navAbout: "সম্পর্কে", navContact: "যোগাযোগ", navWhatsApp: "WhatsApp এ মেসেজ করুন",
    eyebrowHero: "ফ্রিলান্স ভিজ্যুয়াল ডিজাইনার", heroPrefix: "আমি", heroTitle: "ব্র্যান্ডের ভিজ্যুয়াল আইডেন্টিটি বানাই",
    heroWhatsApp: "WhatsApp এ কথা বলুন", heroViewWork: "কাজ দেখুন ↓",
    servicesEyebrow: "সার্ভিস ক্যাটাগরি", servicesTitle: "যে ধরনের কাজ করি", servicesText: "নিচের যেকোনো ক্যাটাগরিতে ক্লিক করলে সেই ধরনের কাজ দেখতে পাবেন।",
    portfolioEyebrow: "পোর্টফোলিও", portfolioTitle: "সাম্প্রতিক কাজ", aboutEyebrow: "পরিচিতি",
    yearsLabel: "বছরের অভিজ্ঞতা", projectsLabel: "সম্পন্ন প্রজেক্ট", clientsLabel: "সন্তুষ্ট ক্লায়েন্ট",
    aboutText: "কোনো প্রজেক্ট নিয়ে কথা বলতে চাইলে সরাসরি WhatsApp এ মেসেজ পাঠান — সাধারণত কয়েক ঘণ্টার মধ্যে রিপ্লাই পাবেন।",
    contactTitle: "নতুন প্রজেক্ট নিয়ে কথা বলতে চান?", contactWhatsApp: "WhatsApp এ মেসেজ করুন", contactEmail: "ইমেইল করুন",
    footerRights: "সর্বস্বত্ব সংরক্ষিত।", metaDescription: "লোগো, ব্যানার, সোশ্যাল মিডিয়া ও ভেক্টর ডিজাইনের পোর্টফোলিও — WhatsApp এ সরাসরি যোগাযোগ করুন।", waAria: "WhatsApp এ মেসেজ করুন", allWork: "সব কাজ", count: "টি কাজ",
    empty: "এই ক্যাটাগরিতে এখনো কোনো কাজ যোগ করা হয়নি। এডমিন প্যানেল (/admin) থেকে যোগ করুন।"
  },
  en: {
    navWork: "Work", navAbout: "About", navContact: "Contact", navWhatsApp: "Message on WhatsApp",
    eyebrowHero: "FREELANCE VISUAL DESIGNER", heroPrefix: "I’m", heroTitle: "I build visual identities for brands",
    heroWhatsApp: "Talk on WhatsApp", heroViewWork: "View my work ↓",
    servicesEyebrow: "SERVICE CATEGORIES", servicesTitle: "What I do", servicesText: "Click any category below to view that type of work.",
    portfolioEyebrow: "PORTFOLIO", portfolioTitle: "Recent work", aboutEyebrow: "ABOUT ME",
    yearsLabel: "Years of experience", projectsLabel: "Completed projects", clientsLabel: "Happy clients",
    aboutText: "Want to discuss a project? Send me a message on WhatsApp — I usually reply within a few hours.",
    contactTitle: "Want to discuss a new project?", contactWhatsApp: "Message on WhatsApp", contactEmail: "Email me",
    footerRights: "All rights reserved.", metaDescription: "Graphic design portfolio featuring logo, banner, social media and vector design. Contact me directly on WhatsApp.", waAria: "Message on WhatsApp", allWork: "All work", count: "works",
    empty: "No work has been added to this category yet. Add it from the admin panel (/admin)."
  }
};

let currentLang = localStorage.getItem("portfolio-language") || "bn";
if (!TRANSLATIONS[currentLang]) currentLang = "bn";

async function loadSettings() {
  try {
    const res = await fetch("content/settings.json", { cache: "no-store" });
    const data = await res.json();
    Object.assign(CONFIG, data);
  } catch (err) {
    console.error("সাইট তথ্য লোড করতে সমস্যা হয়েছে, ডিফল্ট তথ্য দেখানো হচ্ছে:", err);
  }
}

async function loadCategories() {
  try {
    const res = await fetch("content/categories.json", { cache: "no-store" });
    const data = await res.json();
    CATEGORIES = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("ক্যাটাগরি লোড করতে সমস্যা হয়েছে:", err);
    CATEGORIES = [];
  }
}

function normalizeId(id) {
  return (id || "").toString().trim().toLowerCase();
}

let CATEGORIES = [];

function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS.bn[key] || key; }
function pick(item, key) {
  if (currentLang === "en") return item[`${key}_en`] || item[key] || "";
  return item[key] || item[`${key}_en`] || "";
}
function configPick(key) {
  if (currentLang === "en") return CONFIG[`${key}_en`] || CONFIG[key] || "";
  return CONFIG[key] || CONFIG[`${key}_en`] || "";
}

function buildWhatsappLink() {
  const message = currentLang === "en" ? (CONFIG.whatsappMessage_en || CONFIG.whatsappMessage) : CONFIG.whatsappMessage;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message || "")}`;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "en" ? "en" : "bn";
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (attr && key) el.setAttribute(attr, t(key));
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === currentLang));
}

function applyStaticInfo() {
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = configPick("name")));
  document.querySelectorAll("[data-tagline]").forEach((el) => (el.textContent = configPick("tagline")));
  document.querySelectorAll("[data-bio]").forEach((el) => (el.textContent = configPick("bio")));
  document.querySelectorAll("[data-years]").forEach((el) => (el.textContent = configPick("yearsExperience")));
  document.querySelectorAll("[data-projects]").forEach((el) => (el.textContent = configPick("projectsDone")));
  document.querySelectorAll("[data-clients]").forEach((el) => (el.textContent = configPick("happyClients")));
  document.querySelectorAll("[data-profile-img]").forEach((el) => { el.src = CONFIG.profileImage; el.alt = configPick("name"); });

  const titleEl = document.getElementById("pageTitle");
  if (titleEl) titleEl.textContent = currentLang === "en" ? `${configPick("name")} — Graphic Design Portfolio` : `${configPick("name")} — গ্রাফিক ডিজাইন পোর্টফোলিও`;
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.content = t("metaDescription");
  const iconEl = document.getElementById("faviconLink");
  if (iconEl && CONFIG.favicon) iconEl.href = CONFIG.favicon;
  const navLogoEl = document.getElementById("navLogo");
  if (navLogoEl) navLogoEl.src = CONFIG.logo || CONFIG.favicon;
  const splashLogoEl = document.getElementById("splashLogo");
  if (splashLogoEl) splashLogoEl.src = CONFIG.logo || CONFIG.favicon;

  document.querySelectorAll("[data-phone]").forEach((el) => {
    if (!CONFIG.phone) { el.closest(".contact-pill")?.remove(); return; }
    el.textContent = CONFIG.phone;
    if (el.tagName === "A") el.href = `tel:${CONFIG.phone.replace(/\s/g, "")}`;
  });
  document.querySelectorAll("[data-location]").forEach((el) => {
    if (!CONFIG.location) { el.closest(".contact-pill")?.remove(); return; }
    el.textContent = CONFIG.location;
  });
  document.querySelectorAll("[data-email]").forEach((el) => { el.textContent = CONFIG.email; el.href = `mailto:${CONFIG.email}`; });
  document.querySelectorAll("[data-wa-link]").forEach((el) => { el.href = buildWhatsappLink(); });
}

function categoryLabel(cat) { return pick(cat, "label"); }

let allItems = [];
let activeCategory = "all";

async function loadPortfolio() {
  try {
    const res = await fetch("content/portfolio.json", { cache: "no-store" });
    const data = await res.json();
    allItems = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.error("পোর্টফোলিও ডেটা লোড করতে সমস্যা হয়েছে:", err);
    allItems = [];
  }
  renderBoard(); renderFilterBar(); renderGrid();
}

function renderBoard() {
  const board = document.getElementById("board");
  if (!board) return;
  board.innerHTML = CATEGORIES.map((cat, i) => {
    const count = allItems.filter((it) => normalizeId(it.category) === normalizeId(cat.id)).length;
    return `<div class="sticker" tabindex="0" role="button" data-cat="${cat.id}"><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h3>${categoryLabel(cat)}</h3><div class="count">${count} ${t("count")}</div></div></div>`;
  }).join("");
  board.querySelectorAll(".sticker").forEach((el) => {
    const activate = () => { activeCategory = el.dataset.cat; renderFilterBar(); renderGrid(); document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" }); };
    el.addEventListener("click", activate);
    el.addEventListener("keypress", (e) => { if (e.key === "Enter" || e.key === " ") activate(); });
  });
}

function renderFilterBar() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  const chips = [{ id: "all", label: t("allWork") }, ...CATEGORIES.map(c => ({ ...c, label: categoryLabel(c) }))];
  bar.innerHTML = chips.map(c => `<button class="chip ${activeCategory === c.id ? "active" : ""}" data-cat="${c.id}">${c.label}</button>`).join("");
  bar.querySelectorAll(".chip").forEach((btn) => btn.addEventListener("click", () => { activeCategory = btn.dataset.cat; renderFilterBar(); renderGrid(); }));
}

function renderGrid() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  const items = activeCategory === "all" ? allItems : allItems.filter((it) => normalizeId(it.category) === normalizeId(activeCategory));
  if (items.length === 0) { grid.innerHTML = `<div class="empty-state">${t("empty")}</div>`; return; }
  grid.innerHTML = items.map((it) => {
    const title = pick(it, "title");
    const description = pick(it, "description");
    return `<div class="work-card"><div class="work-thumb"><img src="${it.image}" alt="${title}" loading="lazy"></div><div class="work-body"><div class="work-tag">${categoryLabel(CATEGORIES.find(c => normalizeId(c.id) === normalizeId(it.category)) || {label: it.category, label_en: it.category})}</div><div class="work-title">${title}</div>${description ? `<div class="work-desc">${description}</div>` : ""}</div></div>`;
  }).join("");
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("portfolio-language", lang);
  applyTranslations();
  applyStaticInfo();
  renderBoard(); renderFilterBar(); renderGrid();
}

function hideSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  splash.classList.add("hide");
  setTimeout(() => splash.remove(), 600);
}

document.addEventListener("DOMContentLoaded", async () => {
  const safetyTimeout = setTimeout(hideSplash, 4000);
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
  const minDelay = new Promise((resolve) => setTimeout(resolve, 700));
  await loadSettings();
  applyTranslations();
  applyStaticInfo();
  await loadCategories();
  await loadPortfolio();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  await minDelay;
  clearTimeout(safetyTimeout);
  hideSplash();
});
