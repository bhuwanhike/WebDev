import { initializeCartCount } from "./addtocart.js";
import { showToastforDelete } from "./toast.js";

export const removeFromCart = (e, id) => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartItems = cartItems.filter((item) => item.id !== id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  initializeCartCount();
  e.target.closest(".cart-cards").remove();
  showToastforDelete();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
