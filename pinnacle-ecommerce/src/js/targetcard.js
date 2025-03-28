export const targetcardQty = (e, id, stock) => {
  const currentel = document.querySelector(`#card${id}`);
  let productQuantity = currentel.querySelector(".productQuantity");
  let productStock = currentel.querySelector(".productStock");
  let outOfStock = currentel.querySelector(".out-of-stock");
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  let stockCount = parseInt(productStock.getAttribute("data-stock")) || stock;
  if (e.target.className === "cartIncrement") {
    if (quantity < stockCount) {
      quantity++;
    }
  }
  if (e.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity--;
    }
  }
  if (quantity === stock || productStock.textContent === "0") {
    outOfStock.style.display = "block";
  } else {
    outOfStock.style.display = "none";
  }
  productQuantity.innerHTML = quantity;

  productQuantity.setAttribute("data-quantity", quantity);
  productStock.setAttribute("data-stock", stockCount);
  return quantity;
};
