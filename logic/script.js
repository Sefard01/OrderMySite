// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Container
const container = document.querySelector(".temp");
const preview = document.querySelector(".preview-section");

// Generate cards
if (container) {
  container.innerHTML = templates.map(temp => `
    <div class="col-md-4 mb-4">
      <div class="card shadow-sm border-0 tempCard" data-id="${temp.id}">
        <img src="${temp.image}" class="card-img-top" alt="${temp.title}">
        <div class="card-body">
          <h5 class="card-title">${temp.title}</h5>
          <p class="card-text">${temp.description}</p>
          <a href="#" class="btn btn-outline-primary preview-btn">Preview</a>
          <a href="order.html?id=${temp.id}" class="btn btn-outline-primary">Order Now</a>
        </div>
      </div>
    </div>
  `).join("");
}

// Handle clicks
if (container) {
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".tempCard");
    if (!card) return;

    const id = card.dataset.id;
    const selected = templates.find(t => t.id == id);
    if (!selected) return;

    console.log("Clicked Template ID:", id);
    alert(`Clicked Template: ${selected.title}`);

    // Store template for preview.html
    localStorage.setItem("selectedTemplate", JSON.stringify(selected));

    // Show preview (if preview section exists)
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
          <button class="order-btn">Order Now</button>
        </div>
      `;
    } else {
      // if no preview section on this page, redirect
      window.location.href = "preview.html";
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
    const preview = document.querySelector(".preview-section");
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
        <button class="btn btn-warning text-white px-3 fw-semibold "  style="background-color: var(--accent); border: none" onclick="window.location.href='order.html'">Order Now</button>
      </div>
    `;
  });
