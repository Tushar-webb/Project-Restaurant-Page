import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

// Get the content div
const content = document.getElementById("content");

// Helper to clear content div
const clearContent = () => {
  content.innerHTML = "";
};

// Load home page by default when site first opens
loadHomePage();

// Get all nav buttons
const buttons = document.querySelectorAll("nav button");

// Home button
buttons[0].addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

// Menu button
buttons[1].addEventListener("click", () => {
  clearContent();
  loadMenuPage();
});

// Contact button
buttons[2].addEventListener("click", () => {
  clearContent();
  loadAboutPage();
});