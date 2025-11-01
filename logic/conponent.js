// nav bar 
 const nav = document.querySelector("nav");
 const ordernav = document.querySelector("#ordernav");
 const footer = document.querySelector("footer")

 nav.innerHTML = `
 <div class="container">
        <a
          class="navbar-brand fw-bold d-flex align-items-center"
          href="index.html"
        >
          <img src="assets/logo.png" alt="OrderMySite Logo" />
          <span style="color: var(--primary)">Order</span
          ><span style="color: var(--accent)">MySite</span>
        </a>
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMenu" class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#templates">Templates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold" href="#why">Why Us</a>
            </li>
            <li class="nav-item">
              <!-- Contact Button -->
              <a
                class="nav-link fw-semibold"
                id="waStaticMsg"
   href="https://wa.me/916398898695?text=Hello%20there%2C%20I%27m%20interested!"
   target="_blank" rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
            <li class="nav-item ms-3">
              <a
                href="order.html"
                class="btn btn-warning text-white px-3 fw-semibold"
                >Order Now</a
              >
            </li>
          </ul>
        </div>
      </div>
 `;
 //ordernav
try{
    ordernav.innerHTML = `
<div class="container">
    <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
      <img src="assets/logo.png" alt="OrderMySite Logo">
      <span style="color: var(--primary);">Order</span><span style="color: var(--accent);">MySite</span>
    </a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navMenu" class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item"><a class="nav-link fw-semibold" href="index.html#templates">Templates</a></li>
        <li class="nav-item"><a class="nav-link fw-semibold" href="index.html#why">Why Us</a></li>
        <a
                class="nav-link fw-semibold"
                id="waStaticMsg"
   href="https://wa.me/916398898695?text=Hello%20there%2C%20I%27m%20interested!"
   target="_blank" rel="noopener noreferrer"
              >Contact</a></li>
      </ul>
    </div>
  </div>
  `;

}catch (e){
    console.log(e)
}


//preview section 



  //footer

footer.innerHTML = `
  <div class="container">
        <p class="mb-1">&copy; 2025 OrderMySite. All Rights Reserved.</p>
        <p class="small">
          Made with <i class="bi bi-heart-fill text-danger"></i> by OrderMySite
          Team
        </p>
      </div>
`

