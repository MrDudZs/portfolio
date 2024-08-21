const buttons = document.querySelectorAll(".tab-button");
const title = document.getElementById("title");

function setActiveTab(activeButton) {
  const target = activeButton.getAttribute("data-target");

  if (target === "home") {
    title.textContent = "Home";
    title.className = "title home";
  } else if (target === "about") {
    title.textContent = "About";
    title.className = "title about";
  } else if (target === "links") {
    title.textContent = "Links";
    title.className = "title links";
  } else if (target === "projects") {
    title.textContent = "Projects";
    title.className = "title projects";
  }

  buttons.forEach((button) => {
    button.removeAttribute("active");
  });
  activeButton.setAttribute("active", "");
}

// Notes: title.className will change the style for the title section, section is to change what the title displays when nav is seleted.

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button);
  });
});

//Page Loading screen + Page attributes
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    const activeButton = document.querySelector(".tab-button[active]");
    if (activeButton) {
      setActiveTab(activeButton);
    }
}, 3000);
};
