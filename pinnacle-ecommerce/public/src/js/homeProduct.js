import { targetcardQty } from "./targetcard.js";
import { addToCart } from "./addtocart.js";

export const showProductContainer = (products) => {
  const productContainer = document.getElementById("productContainer");
  const productTemplate = document.getElementById("productTemplate");
  if (!products) {
    return false;
  }

  // Get stored cart items to get updated stock values
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  products.forEach((prod) => {
    const { brand, category, description, id, image, name, price, stock } =
      prod;
    const productClone = productTemplate.content.cloneNode(true);

    // Find if product exists in cart to get its updated stock
    const cartItem = cartItems.find((item) => item.id === id);
    const currentStock = cartItem ? cartItem.stock : stock;

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = currentStock;
    productClone.querySelector(".productPrice").textContent += `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent += `₹${
      price * 4
    }`;
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".productImage").src = image;

    const stockElement = productClone.querySelector(".stockElement");
    if (stockElement) {
      stockElement.addEventListener("click", (e) => {
        targetcardQty(e, id, currentStock);
      });
    }

    const addToCartButton = productClone.querySelector(".add-to-cart");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", (e) => {
        addToCart(id, currentStock);
      });
    }

    productContainer.appendChild(productClone);
  });
};
