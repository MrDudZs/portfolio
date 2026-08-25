// This file controls the includes on all pages
// Includes being: Header & Footer

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Failed to load ${file}");
      el.innerHTML = await response.text();
    } catch (err) {
      console.error(err);
      el.innerHTML = '<p style="color:red;">Error loading ${file}</p>';
    }
  });
});
