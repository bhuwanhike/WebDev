const footerHTML = document.createElement("footer");
footerHTML.innerHTML = `
      <div class="footer">
        <div class="shop foot">
          <h3>Shopping</h3>
          <ul>
            <li>Computer Store</li>
            <li>Laptop Store</li>
            <li>Accessories</li>
            <li>Sales & Discount</li>
          </ul>
        </div>

        <div class="get-support foot">
          <h3>Get Support</h3>
          <ul>
            <li>Get support</li>
            <li>Help Center</li>
            <li>Live chat</li>
            <li>Check order status</li>
            <li>Refunds</li>
            <li>Report abuse</li>
          </ul>
        </div>
        <div class="payments foot">
          <h3>Payments and protections</h3>
          <ul>
            <li>Safe and easy payments</li>
            <li>Alibaba.com Business Edge Credit Card</li>
            <li>Money-back policy</li>
            <li>On-time shipping</li>
            <li>After-sales protections</li>
            <li>Product monitoring services</li>
          </ul>
        </div>
        <div class="get-in-touch foot">
          <h3>Get to know us</h3>
          <ul>
            <li>About Pinnacle</li>
            <li>Corporate responsibility</li>
            <li>News center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="stay-connected foot">
          <h3>Stay Connected</h3>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div class="mail">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div class="footer-partition"></div>
      <div class="copyrights">
        <div class="copyright">© 2025 Pinnacle. All rights reserved.</div>
        <div class="payment-cards">
          <li><img src="/assets/payment-cards/visa.svg" alt="" />Visa</li>
          <li>
            <img src="/assets/payment-cards/master.svg" alt="" />Mastercard
          </li>
          <li>
            <img src="/assets/payment-cards/american.png" alt="" />American
            Express
          </li>
          <li><img src="/assets/payment-cards/paypal.png" alt="" />PayPal</li>
        </div>
      </div>`;

// Function to add footer to any page
export const addFooter = () => {
  const footerContainer = document.querySelector(".section-footer");
  if (footerContainer) {
    footerContainer.appendChild(footerHTML);
  }
};

// Initialize footer when DOM is loaded
document.addEventListener("DOMContentLoaded", addFooter);
