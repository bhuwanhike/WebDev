let totalItems = document.querySelector(".total-items");
let totalPrice = document.querySelector(".total-price");
export const getCartCount = () => {
  document.addEventListener("navbarLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    totalItems.innerHTML = cartItems
      .reduce((total, item) => total + item.Qty, 0)
      .toString();

    // Convert price to number and add
    totalPrice.innerHTML = `₹${cartItems
      .reduce((total, item) => total + Number(item.price), 0)
      .toFixed(2)}`;

    console.log(cartItems);
  });
};

getCartCount();
