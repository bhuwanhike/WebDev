// Function to update cart count from localStorage
import { showToast } from "./toast.js";
import products from "/api/products.json";

export const initializeCartCount = () => {
  document.addEventListener("navbarLoaded", () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const cart = document.querySelector(".cart-item");
      if (cart) {
        const item_count = cart.querySelector(".item-count");
        if (item_count) {
          item_count.innerHTML = cartItems
            .reduce((total, item) => total + item.Qty, 0)
            .toString();
        }
      }
    } catch (error) {
      console.error("Error initializing cart count:", error);
    }
  });
};

export const addToCart = (id, stock) => {
  try {
    const currentel = document.querySelector(`#card${id}`);
    if (!currentel) return;

    let productQuantity = currentel.querySelector(".productQuantity");
    let quantity = productQuantity ? parseInt(productQuantity.innerHTML) : 0;
    let price = currentel.querySelector(".productPrice");
    price = price ? parseFloat(price.innerHTML.replace("₹", "").trim()) : 0;
    let productName =
      currentel.querySelector(".productName")?.textContent || "";
    let stockValue = currentel.querySelector(".productStock");
    let stockCount = stockValue ? parseInt(stockValue.innerHTML) : stock;

    // Get existing cart items
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // Update quantity and stock if item exists
      cartItems[existingItemIndex].Qty += quantity;
      cartItems[existingItemIndex].stock = stockCount - quantity;
    } else {
      // Add new item to cart
      let data = {
        id: id,
        name: productName,
        Qty: quantity,
        price: price,
        stock: stockCount - quantity,
      };
      cartItems.push(data);
    }

    // Save updated cart items to persist stock values
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update cart counter
    const cart = document.querySelector(".cart-item");
    if (cart) {
      const item_count = cart.querySelector(".item-count");
      if (item_count) {
        item_count.innerHTML = cartItems
          .reduce((total, item) => total + item.Qty, 0)
          .toString();
      }
    }

    // Update stock display immediately
    if (stockValue) {
      const updatedStock =
        existingItemIndex !== -1
          ? cartItems[existingItemIndex].stock
          : stockCount - quantity;
      stockValue.innerHTML = updatedStock;
    }

    showToast();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

// Initialize cart count when page loads
document.addEventListener("DOMContentLoaded", initializeCartCount);
