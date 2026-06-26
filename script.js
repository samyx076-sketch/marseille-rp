// ========= CONFIGURATION =========

// Remplace ces liens plus tard
const PAYPAL_LINK = "https://www.paypal.com/";
const STRIPE_LINK = "https://buy.stripe.com/";

// ================================

const modal = document.getElementById("paymentModal");
const title = document.getElementById("modalTitle");
const price = document.getElementById("modalPrice");

const paypalBtn = document.getElementById("paypalBtn");
const stripeBtn = document.getElementById("stripeBtn");

function openPayment(product, priceText) {

    title.innerHTML = product;
    price.innerHTML = "<strong>" + priceText + "</strong>";

    // PayPal actif
    paypalBtn.href = "https://paypal.me/AthanUhq";

    // CB indisponible
    stripeBtn.removeAttribute("href");
    stripeBtn.innerHTML = "💳 Carte bancaire (Bientôt disponible)";
    stripeBtn.style.opacity = "0.5";
    stripeBtn.style.cursor = "not-allowed";

    stripeBtn.onclick = function(e){
        e.preventDefault();
        alert("Le paiement par carte bancaire sera bientôt disponible.");
    };

    modal.style.display = "flex";
}

}

function closePayment() {

    modal.style.display = "none";

}

window.onclick = function(e){

    if(e.target === modal){

        closePayment();

    }

}

// Animation d'apparition
const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity:0,
                    transform:"translateY(40px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0px)"
                }

            ],{

                duration:700,
                fill:"forwards"

            });

        }

    });

});

document.querySelectorAll(".shop-card,.job-card,.stat-card").forEach(card=>{

    observer.observe(card);

});

// Petit effet 3D sur les cartes
document.querySelectorAll(".shop-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*14;
        const rotateX = ((y / rect.height)-0.5)*-14;

        card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// Faux compteur de joueurs (en attendant le vrai)
const stats = document.querySelector(".stat-card strong");

if(stats){

    let players = 0;

    const target = 64;

    const interval = setInterval(()=>{

        players++;

        stats.innerHTML="🟢";

        if(players>=target){

            clearInterval(interval);

        }

    },20);

}

console.log("Marseille RP chargé avec succès.");
