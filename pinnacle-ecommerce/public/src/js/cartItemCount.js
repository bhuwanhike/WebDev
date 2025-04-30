import { initializeCartCount } from "./addtocart";
import { removeFromCart } from "./deleteItem";
import products from "/api/products.json";

export const cartProductQty = (e, id, stock) => {
  const currentel = document.querySelector(`#cart-card${id}`);
  const cart = document.querySelector(".cart-item");
  const item_count = cart.querySelector(".item-count");
  const outOfStock = currentel.querySelector(".out-of-stock");

  let cart_count = parseInt(item_count.innerHTML) || 0;
  let cartProductQuantity = currentel.querySelector(".productQuantity");
  let cartProductPrice = currentel.querySelector(".productPrice");
  let cartProductStock = currentel.querySelector(".productStock");
  let quantity = parseInt(cartProductQuantity.innerHTML) || 1;
  let basePrice = products.find((prod) => prod.id === id).price;

  if (e.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity++;
      cart_count++;
      item_count.innerHTML = cart_count;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
  if (e.target.className === "cartDecrement") {
    if (cartProductQuantity.textContent > 1) {
      if (quantity > 1) {
        quantity--;

        cart_count--;
        item_count.innerHTML = cart_count;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } else {
      removeFromCart(e, id);
    }
  }
  if (quantity === stock) {
    outOfStock.style.display = "block";
  } else {
    outOfStock.style.display = "none";
  }

  // Update quantity display
  cartProductQuantity.innerHTML = quantity;

  // Update price display in real-time
  const totalPrice = Math.ceil(basePrice * quantity * 100) / 100;
  cartProductPrice.innerHTML = `₹${totalPrice}`;

  // Get existing cart items or initialize empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if item already exists in cart
  const existingItemIndex = cartItems.findIndex((item) => item.id === id);

  // Update cart item with new quantity and price
  cartItems[existingItemIndex].Qty = quantity;
  cartItems[existingItemIndex].price = totalPrice;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return quantity;
};

document.addEventListener("DOMContentLoaded", initializeCartCount);
