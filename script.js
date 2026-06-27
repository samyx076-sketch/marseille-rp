const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

function openPayment(name, price) {
  productName.innerText = name;
  productPrice.innerText = price;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePayment() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closePayment();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePayment();
  }
});

document.querySelector(".disabled").addEventListener("click", function() {
  alert("Le paiement par carte bancaire sera bientôt disponible.");
});

console.log("Marseille RP - script chargé ✅");
