// Extract template ID from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Try to get template data
const selected = JSON.parse(localStorage.getItem("selectedTemplate"));
const templates = window.templates || [];

let liveURL = "";

// Match correct template
if (selected && selected.id == id) {
  liveURL = selected.live;
} else if (templates.length > 0) {
  const found = templates.find(t => t.id == id);
  if (found) liveURL = found.live;
}

// Load URL into iframe
const frame = document.getElementById("liveFrame");
frame.src = liveURL || "about:blank";
