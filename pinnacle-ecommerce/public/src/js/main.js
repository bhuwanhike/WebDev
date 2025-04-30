import products from "/api/products.json";
import { showProductContainer } from "/src/js/homeProduct.js";

// Wait for DOM to be loaded before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  let opt = document.querySelector(".options");
  let rightImg = document.querySelector(".right-img");

  // Check if opt exists before adding event listeners
  if (opt) {
    // Convert HTMLCollection to Array to use forEach
    Array.from(opt.children).forEach((element, index) => {
      element.addEventListener("mouseover", () => {
        switch (index) {
          case 0:
            if (rightImg) rightImg.src = "/assets/middle-sec/first.png";
            break;
          case 1:
            if (rightImg) rightImg.src = "/assets/middle-sec/second.png";
            break;
          case 2:
            if (rightImg) rightImg.src = "/assets/middle-sec/third.png";
            break;
        }
      });
    });
  }

  // Only call showProductContainer if we're on the home page
  const productContainer = document.getElementById("productContainer");
  if (productContainer) {
    showProductContainer(products);
  }
});
