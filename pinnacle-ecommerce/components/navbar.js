import { initializeCartCount } from "/src/js/addtocart.js";

const navbarHTML = document.createElement("nav");
navbarHTML.innerHTML = `
      <div class="logo"><a href="/index.html"><img src="/assets/logo.png" alt="" /></a></div>
      <ul>
        <div class="search"><input type="search" placeholder="Search" /></div>
        <div class="account litem">
        <div class="account-icon"><img src="/assets/svgicon/account.svg" alt="" />Account</div>
          
          <div class="account-settings">Log out</div>
        </div>
        <div class="contact litem">
          <img src="/assets/svgicon/contact.svg" alt="" />Contact
        </div>
      </ul>
      <div class="cart">
        <div class="cart-item">
          <img src="/assets/svgicon/cart.svg" alt="" />
          <span class="item-count">0</span>
        </div>
      </div>
    `;

const initializeNavbarListeners = () => {
  const cartPage = document.querySelector(".cart-item");
  const contact = document.querySelector(".contact");

  if (cartPage) {
    cartPage.addEventListener("click", () => {
      window.location.href = "/cart.html";
    });
  }

  if (contact) {
    contact.addEventListener("click", () => {
      window.location.href = "/contact.html";
    });
  }

  const accountIcon = document.querySelector(".account-icon");
  const accountSettings = document.querySelector(".account-settings");

  if (accountIcon) {

    accountIcon.addEventListener("mouseenter", () => {
      const currentOpacity = window.getComputedStyle(accountSettings).opacity;
      accountSettings.style.opacity = currentOpacity === "0" ? "1" : "0";
    });
    accountIcon.addEventListener("click", () => {
      accountSettings.style.opacity = "0";
    });
  }
};

export const addNavbar = () => {
  const navbarContainer = document.querySelector(".section-navbar");
  if (navbarContainer) {
    navbarContainer.appendChild(navbarHTML);
    // Initialize event listeners after adding navbar to DOM
    initializeNavbarListeners();
    // Dispatch an event to notify that navbar is loaded
    document.dispatchEvent(new CustomEvent("navbarLoaded"));
  }
};

// Initialize navbar when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  addNavbar();
  initializeCartCount(); // Initialize cart count after navbar is added
});
