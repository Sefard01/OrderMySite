// -----------------------------
// Navbar Scroll Effect
// -----------------------------
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// -----------------------------
// Detect Current Page
// -----------------------------
const currentPage = window.location.pathname.split("/").pop();

// -----------------------------
// Template Listing & Preview
// -----------------------------
const container = document.querySelector(".temp");
const preview = document.querySelector(".preview-section");

if (container) {
  let displayTemplates = templates;

  // Show only top 3 templates on index page
  if (currentPage === "index.html" || currentPage === "") {
    displayTemplates = templates.slice(0, 3);
  }

  container.innerHTML = displayTemplates
    .map(
      (temp) => `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-0 tempCard" data-id="${temp.id}">
          <img src="${temp.image}" class="card-img-top" alt="${temp.title}">
          <div class="card-body">
            <h5 class="card-title">${temp.title}</h5>
            <p class="card-text">${temp.description}</p>
            <div class="d-flex flex-wrap gap-2">
              <a href="#" class="btn btn-outline-primary preview-btn">Preview</a>
              <a href="order.html?id=${temp.id}" class="btn btn-outline-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// -----------------------------
// Handle Template Card Click
// -----------------------------
if (container) {
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".tempCard");
    if (!card) return;

    const id = card.dataset.id;
    const selected = templates.find((t) => t.id == id);
    if (!selected) return;

    // Store selected template in localStorage
    localStorage.setItem("selectedTemplate", JSON.stringify(selected));

    // If preview section exists on same page, show inline
    if (preview) {
      preview.innerHTML = `
        <div class="template-image">
          <img src="${selected.image}" alt="${selected.title}">
        </div>
        <div class="template-info">
          <h2>${selected.title}</h2>
          <p>${selected.description}</p>
          <ul class="features">
            <li>Fully Responsive Design</li>
            <li>Modern UI/UX Layout</li>
            <li>SEO Optimized</li>
            <li>Fast Performance</li>
          </ul>
          <div class="price">Price: ₹${selected.price || "1,499"}</div>
          <button class="btn btn-warning text-white px-3 fw-semibold"
            style="background-color: var(--accent); border: none"
            onclick="window.location.href='order.html?id=${selected.id}'">
            Order Now
          </button>
        </div>`;
    } else {
      // Otherwise go to preview.html
      window.location.href = "preview.html";
    }
  });
}

// -----------------------------
// Preview Page Logic
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const preview = document.querySelector(".preview-section");

  // If preview.html page
  if (preview) {
    const selected = JSON.parse(localStorage.getItem("selectedTemplate"));
    if (!selected) {
      preview.innerHTML = `<h3>No template selected. Please go back.</h3>`;
      return;
    }

    preview.innerHTML = `
      <div class="template-image">
        <img src="${selected.image}" alt="${selected.title}">
      </div>
      <div class="template-info">
        <h2>${selected.title}</h2>
        <p>${selected.description}</p>
        <ul class="features">
          <li>Fully Responsive Design</li>
          <li>Modern UI/UX Layout</li>
          <li>SEO Optimized</li>
          <li>Fast Performance</li>
        </ul>
        <div class="price">Price: ${selected.price || "1,499"}</div>
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
      </div>`;

    // Product Tour button → open live page in new tab
    document
      .getElementById("productTourBtn")
      .addEventListener("click", () => {
        const liveURL = selected.live || "";
        if (liveURL) {
          window.open(liveURL, "_blank"); // open in new tab
        } else {
          alert("Live preview not available for this template.");
        }
      });
  }
});
