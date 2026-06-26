const modal = document.getElementById("modal");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

function openPayment(name, price) {
    productName.innerText = name;
    productPrice.innerText = price;
    modal.style.display = "flex";
}

function closePayment() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closePayment();
    }
};
