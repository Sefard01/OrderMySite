const templates = [
  {
    id: 1,
    title: "Charitize – Charity Organization Website Template",
    category: "Nonprofit",
    description: "Perfect for charity, fundraising and NGO websites with donation-ready sections.",
    features: [
      "Donation-focused sections",
      "Events and volunteer pages",
      "Modern NGO layout",
      "Mobile-friendly responsive UI",
      "SEO-optimized structure"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/09/charity-organization-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹14,999",
    live: "https://htmlcodex.com/demo/?item=3641"
  },
  {
    id: 2,
    title: "Poseify – Modeling Agency Website Template",
    category: "Agency / Business",
    description: "Showcase models, portfolios and agency profiles with clean gallery layouts.",
    features: [
      "High-quality portfolio grid",
      "Model category filters",
      "Contact and booking form",
      "Fast-loading clean design",
      "Fully responsive"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/08/modeling-agency-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹9,999",
    live: "https://htmlcodex.com/demo/?item=3631"
  },
  {
    id: 3,
    title: "Plasery – Plastic Surgery Website Template",
    category: "Medical & Hospital",
    description: "Ideal for clinics, cosmetic surgeons and healthcare professionals.",
    features: [
      "Before/after gallery",
      "Service detail pages",
      "Doctor profile section",
      "Appointment booking",
      "Optimized for medical SEO"
    ],
    deliveryTime: "3 Days",
    image: "https://htmlcodex.com/wp-content/uploads/2025/08/plastic-surgery-website-template.jpg",
    price: "₹18,499",
    live: "https://htmlcodex.com/demo/?item=3621"
  },
  {
    id: 4,
    title: "Electro – Electronics Website Template",
    category: "eCommerce",
    description: "A complete electronics store layout designed for modern online shopping.",
    features: [
      "Product grid and product details",
      "Shopping cart UI",
      "Mega menu ready",
      "Category filters",
      "Responsive and lightweight"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/08/electronics-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹27,499",
    live: "https://htmlcodex.com/demo/?item=3609"
  },
  {
    id: 5,
    title: "Salone – Beauty Salon Website Template",
    category: "Beauty & Hair",
    description: "Designed for salons, makeup artists, spas and beauty service providers.",
    features: [
      "Online booking system",
      "Services and pricing sheet",
      "Before/after showcase",
      "Customer testimonials",
      "Beautiful modern design"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/07/beauty-salon-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹8,499",
    live: "https://htmlcodex.com/demo/?item=3597"
  },
  {
    id: 6,
    title: "iSTUDIO – Interior Design Website Template",
    category: "Agency / Interior",
    description: "Best for interior designers, architects and home decor studios.",
    features: [
      "Project showcase with filters",
      "Minimal professional layout",
      "Team and service pages",
      "Client testimonial slider",
      "Responsive and clean UI"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/07/interior-design-website-template-free.jpg?resize=740%2C463&ssl=1",
    price: "₹13,999",
    live: "https://htmlcodex.com/demo/?item=3587"
  },
  {
    id: 7,
    title: "WELDORK – Welding Website Template",
    category: "Business / Industrial",
    description: "Industrial welding service template with service showcase and estimate request.",
    features: [
      "Service detail blocks",
      "Industrial-style layout",
      "Contact and quote form",
      "Team and experience section",
      "Responsive heavy-load design"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/04/welding-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹12,499",
    live: "https://htmlcodex.com/demo/?item=3556"
  },
  {
    id: 8,
    title: "CHEFER – Free Chef Website Template",
    category: "Restaurants & Food",
    description: "Chef portfolio and restaurant-friendly layout with menu and story section.",
    features: [
      "Food gallery",
      "Menu with pricing",
      "Chef biography section",
      "Testimonials",
      "Fast responsive layout"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2025/03/chef-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹7,499",
    live: "https://htmlcodex.com/demo/?item=3537"
  },
  {
    id: 9,
    title: "Fitness – Free Fitness Website Template",
    category: "Fitness / Gym",
    description: "Gym, fitness trainers and workout studios ke liye clean website template.",
    features: [
      "Timetable section",
      "Trainer profiles",
      "Pricing plans",
      "Workout categories",
      "Full mobile optimization"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2024/11/fitness-website-template.jpg?resize=740%2C463&ssl=1",
    price: "₹8,999",
    live: "https://htmlcodex.com/demo/?item=3502"
  },
  {
    id: 10,
    title: "Electra – Electrical Website Template",
    category: "Industrial / Business",
    description: "Electricians, technicians aur repair services ke liye perfect template.",
    features: [
      "Service categories",
      "Core features section",
      "Appointment form",
      "Pricing table",
      "Business-oriented responsive layout"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2024/07/electrical-website-template.jpg?w=800&ssl=1",
    price: "₹11,499",
    live: "https://htmlcodex.com/demo/?item=3464"
  },
  {
    id: 11,
    title: "Stocker – Stock Market Website Template",
    category: "Corporate / Agency",
    description: "Financial markets, investment and stock analysis websites ke liye.",
    features: [
      "Market stats UI",
      "Team and service pages",
      "Case study layout",
      "Client testimonials",
      "Sleek corporate design"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2024/07/stock-market-website-template.jpg?w=800&ssl=1",
    price: "₹14,999",
    live: "https://htmlcodex.com/demo/?item=3447"
  },
  {
    id: 12,
    title: "Pigra – Personal Portfolio Website Template",
    category: "Personal Portfolio",
    description: "Freelancers, creators and developers ke liye portfolio showcase layout.",
    features: [
      "Animated hero section",
      "Project showcase",
      "About and skills",
      "Contact form",
      "Minimal and modern look"
    ],
    deliveryTime: "2 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2024/06/personal-portfolio-website-template.jpg?w=800&ssl=1",
    price: "₹5,999",
    live: "https://htmlcodex.com/demo/?item=3433"
  },
  {
    id: 13,
    title: "Startup – Startup Company Website Template",
    category: "Agency / Premium",
    description: "Startups aur SaaS ke liye conversion-optimized landing page.",
    features: [
      "High-conversion hero",
      "Pricing plans",
      "Team and testimonial blocks",
      "Clean SaaS layout",
      "Fast-loading premium design"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2021/08/startup-company-website-template.jpg?w=800&ssl=1",
    price: "₹19,499",
    live: "https://htmlcodex.com/demo/?item=1960"
  },
  {
    id: 14,
    title: "JobEntry – Job Portal Website Template",
    category: "Business / Corporate",
    description: "Job boards, hiring portals aur recruitment agencies ke liye.",
    features: [
      "Job listing UI",
      "Category filters",
      "Company pages",
      "Responsive dashboard layout",
      "Search-optimized structure"
    ],
    deliveryTime: "4 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2022/01/job-portal-website-template.jpg?w=800&ssl=1",
    price: "₹22,999",
    live: "https://htmlcodex.com/demo/?item=2246"
  },
  {
    id: 15,
    title: "MultiShop – Online Shop Website Template",
    category: "eCommerce",
    description: "Large-scale multi-category eCommerce stores ke liye powerhouse template.",
    features: [
      "Mega shop layout",
      "Advanced product grid",
      "Cart and checkout pages",
      "Category filters and sorting",
      "High-speed optimized"
    ],
    deliveryTime: "4 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2021/03/online-shop-website-template.jpg?w=800&ssl=1",
    price: "₹28,499",
    live: "https://htmlcodex.com/demo/?item=1479"
  },
  {
    id: 16,
    title: "DGcom – Web Design Agency HTML Template",
    category: "Premium / Agency",
    description: "Web development firms aur creative studios ke liye premium-level UI.",
    features: [
      "Portfolio showcase",
      "Service and pricing pages",
      "Testimonials slider",
      "Client brands section",
      "Smooth animation experience"
    ],
    deliveryTime: "3 Days",
    image: "https://i0.wp.com/htmlcodex.com/wp-content/uploads/2022/05/DGcom.jpg?w=800&ssl=1",
    price: "₹16,999",
    live: "https://htmlcodex.com/demo/?item=2492"
  }


];
