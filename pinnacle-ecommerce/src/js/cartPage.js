import products from "/api/products.json";
import { removeFromCart } from "./deleteItem.js";
import { cartProductQty } from "./cartItemCount.js";

let pro = JSON.parse(localStorage.getItem("cartItems"));

export const showCartProducts = (cartProducts) => {
  const productCart = document.getElementById("productCart");
  const productTemplate = document.getElementById("cartProductTemplate");
  if (!productCart || !productTemplate) {
    return;
  }

  cartProducts.forEach((prod) => {
    const { id, name, price, Qty } = prod;
    const cartProductClone = productTemplate.content.cloneNode(true);

    cartProductClone.querySelector(".productName").textContent = name;
    cartProductClone.querySelector(".productQuantity").textContent = Qty;
    cartProductClone.querySelector(".productPrice").textContent = `₹${price}`;

    cartProductClone.querySelector(".category").textContent = products.find(
      (prod) => prod.id === id
    ).category;
    const image = products.find((prod) => prod.id === id).image;

    cartProductClone
      .querySelector("#cart-cardValue")
      .setAttribute("id", `cart-card${id}`);
    cartProductClone.querySelector(".productImage").src = image;

    const stockElement = cartProductClone.querySelector(".stockElement");
    const stock = products.find((prod) => prod.id === id).stock;

    stockElement.addEventListener("click", (e) => {
      cartProductQty(e, id, stock);
    });

    const removeFromCartButton =
      cartProductClone.querySelector(".remove-from-cart");
    if (removeFromCartButton) {
      removeFromCartButton.addEventListener("click", (e) => {
        removeFromCart(e, id);
      });
    }

    productCart.append(cartProductClone);
  });
};

document.addEventListener("DOMContentLoaded", () => showCartProducts(pro));
