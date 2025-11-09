// ---------------------------------------
// Navbar Scroll Effect
// ---------------------------------------
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ---------------------------------------
// Detect Current Page
// ---------------------------------------
const currentPage = window.location.pathname.split("/").pop();

// ---------------------------------------
// Template Listing
// ---------------------------------------
const listContainer = document.querySelector(".temp");
const previewBox = document.querySelector(".preview-section");

if (listContainer) {
  let data = templates;

  if (currentPage === "index.html" || currentPage === "") {
    data = templates.slice(3, 6);
  }

  listContainer.innerHTML = data
    .map(
      (t) => `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-0 tempCard" data-id="${t.id}">
          <img src="${t.image}" class="card-img-top" alt="${t.title}">
          <div class="card-body">
            <h5 class="card-title">${t.title}</h5>
            <p class="card-text">${t.description}</p>
            <div class="d-flex flex-wrap gap-2">
              <a href="#" class="btn btn-outline-primary preview-btn">Preview</a>
              <a href="order.html?id=${t.id}" class="btn btn-outline-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// ---------------------------------------
// Card Click Handler
// ---------------------------------------
if (listContainer) {
  listContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".tempCard");
    if (!card) return;

    const id = card.dataset.id;
    const selected = templates.find((t) => t.id == id);
    if (!selected) return;

    localStorage.setItem("selectedTemplate", JSON.stringify(selected));

    if (previewBox) {
      previewBox.innerHTML = `
        <div class="template-image">
          <img src="${selected.image}" alt="${selected.title}">
        </div>

        <div class="template-info">
          <h2>${selected.title}</h2>
          <p>${selected.description}</p>

          <ul class="features">
            ${selected.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>

          <p><strong>Category:</strong> ${selected.category}</p>
          <p><strong>Delivery Time:</strong> ${selected.deliveryTime}</p>
          <p><strong>Price:</strong> ${selected.price}</p>

          <button class="btn btn-warning text-white px-3 fw-semibold"
            style="background-color: var(--accent); border: none"
            onclick="window.location.href='order.html?id=${selected.id}'">
            Order Now
          </button>
        </div>`;
    } else {
      window.location.href = "preview.html";
    }
  });
}

// ---------------------------------------
// Preview Page Logic
// ---------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".preview-section");
  if (!box) return;

  const selected = JSON.parse(localStorage.getItem("selectedTemplate"));
  if (!selected) {
    box.innerHTML = "<h3>No template selected. Go back.</h3>";
    return;
  }

  box.innerHTML = `
    <div class="template-image">
      <img src="${selected.image}" alt="${selected.title}">
    </div>

    <div class="template-info">
      <h2>${selected.title}</h2>
      <p>${selected.description}</p>

      <ul class="features">
        ${selected.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>

      <p><strong>Category:</strong> ${selected.category}</p>
      <p><strong>Delivery Time:</strong> ${selected.deliveryTime}</p>
      <p><strong>Price:</strong> ${selected.price}</p>

      <div class="d-flex gap-2 mt-3">
        <button class="btn btn-warning text-white px-3 fw-semibold"
          style="background-color: var(--accent); border: none"
          onclick="window.location.href='order.html?id=${selected.id}'">
          Order Now
        </button>

        <button class="btn btn-outline-success fw-semibold" id="productTourBtn">
          Product Tour
        </button>
      </div>
    </div>
  `;

  const tourBtn = document.getElementById("productTourBtn");
  if (tourBtn) {
    tourBtn.addEventListener("click", () => {
      if (selected.live) window.open(selected.live, "_blank");
      else alert("Live preview not available.");
    });
  }
});

// ---------------------------------------
// Auto-Fill Category on order.html
// ---------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const selectBox = document.getElementById("template_type");
  if (!selectBox) return;

  const selected = JSON.parse(localStorage.getItem("selectedTemplate"));
  if (!selected) return;

  const cat = selected.category.toLowerCase();

  // Mapping rules
  const map = [
    { keyword: ["ecommerce", "shop", "store"], value: "E-commerce" },
    { keyword: ["portfolio", "personal"], value: "Portfolio" },
    { keyword: ["business", "agency", "corporate", "industrial"], value: "Business" },
    { keyword: ["landing", "startup", "saas"], value: "Landing Page" }
  ];

  let matched = false;

  for (let rule of map) {
    if (rule.keyword.some(k => cat.includes(k))) {
      selectBox.value = rule.value;
      matched = true;
      break;
    }
  }

  // If nothing matched
  if (!matched) {
    const newOpt = document.createElement("option");
    newOpt.value = selected.category;
    newOpt.textContent = selected.category;
    newOpt.selected = true;
    selectBox.appendChild(newOpt);
  }
});


