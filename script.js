const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

function openPayment(name, price) {
  productName.textContent = name;
  productPrice.textContent = price;
  modal.style.display = "flex";
}

function closePayment() {
  modal.style.display = "none";
}

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    closePayment();
  }
});
