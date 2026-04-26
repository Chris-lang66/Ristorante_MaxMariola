emailjs.init("ke5_UwV6u6BIfuWzF");
// NAVIGAZIONE SPA
function navigateTo(page) {
    document.querySelectorAll(".page-section").forEach(function(s)
    {s.classList.add("hidden");})
    var target = document.getElementById("page-" + page);
    if (target) target.classList.remove("hidden");
    window.scrollTo(0, 0);
    closeMobile();
    // LINK ATTIVI
    document.querySelectorAll(".navbar-links a").forEach(function(a) 
    { a.classList.toggle("active", a.getAttribute("data-page") === page);
    });
}

// MOBILE MENU-----
function toggleMobile() {
    document.getElementById("mobileMenu").classList.toggle("open");
}

function closeMobile() {
    document.getElementById("mobileMenu").classList.remove("open")
}

// NAVABR SCROLL----
window.addEventListener("scroll", function() {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY >50);
});

// TOAST----
function showToast(title, desc) {
    var t = document.getElementById("toast");
    document.getElementById("toastTitle").textContent = title;
    document.getElementById("toastDesc").textContent = desc;
    t.classList.add("show");
    setTimeout(function() { t.classList.remove("show"); }, 5000);
}

// ==============================
// MENÙ
// ==============================
var menuData = {
    Antipasti: [
        { nome: "Pizza Romana", desc: "Puntarelle, stracciatella, alici del cantabrico e salsa di aici", prezzo: "€18"},    
        { nome: "Tartare di Fassone di Razza Piemontese con i suoi Condimenti", desc: "Tuorlo d'uovo, sfoglia croccante, capperi, scalogno marinato con aceto, acciuga e senape in grani - con tartufo", prezzo: "€20/28"},     
        { nome: "Involtini di Max", desc: "Con fiori di zucca, alici, fiordilatte e salsa all'arrabbiata", prezzo: "€16" },
        { nome: "Carpaccio di Filetto di Fassone", desc: "Tartufo nero, carciofi fritti, millefoglie di patate e scaglie di parmigiano", prezzo: "€26" }
    ],
    Primi: [
        { nome: "Carbonara con Show Cooking", desc: "con tartufo €38pp", prezzo: "€30pp"},
        { nome: "Risotto Cacio, Pepe, e Tartare di Gambero Rosso", desc: "", prezzo: "€26"},
        { nome: "Rigatone all'Amatriciana", desc: "",  prezzo: "€18"},
        { nome: "Tagliatelle al Ragù da Paura", desc: "Con ragù di entragna tagliata al coltello e un po' di pomodoro", prezzo: "€24" },
    ],
    Secondi: [
        { nome: "Filetto alla Max, con show cooking", desc: "Filetto di fassone piemontese, crema di patate alla francese, tartufo nero e scaloppa di foie gras d'oca e fondo bruno di vitello al marsala ", prezzo: "€42"},
        { nome: "Entraña Grigliata", desc: "Accompagnata da fondo di manzo, radicchio, finocchio, broccolo e carote", prezzo: "€24" },
        { nome: "Polpo Arrostito", desc: "Con broccolo, cime di rapa, pane bono e salsa 'nduja", prezzo: "€29"},
        { nome: "Carrè d'Agnello Rosè", desc: "Agnello scottato con salsa al topinambur, cime di rapa ripassate e riduzione del suo fondo", prezzo: "€29" },
    ],
    Dessert: [
        { nome: "Gelati", desc: "Cioccolato, crema, cannella, ricotta di pecora", prezzo: "€9"},
        { nome: "Cannolo Freddo", desc: "Cialde croccante al cacao con gelato alla ricotta di pecora e salsa al gianduia e zabaglione", prezzo: "€12" },
        { nome: "Brownie ai 3 Cioccolati", desc: "Cremoso di cioccolato bianco, cioccolato flessibile al latte e gelato al cioccolato", prezzo: "€13"},
        { nome: "Tiramimax", desc: "", prezzo: "€12" },
    ],
    Cocktails: [
        { nome: "The Sound of Love", desc: "Hendrick's Gin, Lychee&Yuzu, Sciroppo alla Vaniglia", prezzo: "€16"},
        { nome: "Negroni Inchiodato", desc: "Gin, Liquore all'arancia Amara e Bitter infuso ai chiodi di garofano", prezzo: "€16" },
        { nome: "Bloody Mary", desc: "Il Pomodoro di Max, Stolichnaya Vodka, Spezie & Aromi", prezzo: "€15"},
        { nome: "Olio & Basilico 'Gin Tonic'", desc: "All'olio d'oliva Barbara dei F.lli Licari, signature Tonica al Basilico", prezzo: "€15" }
    ]
};
var menuCategorie = ["Antipasti", "Primi", "Secondi", "Dessert", "Cocktails"];
var menuAttiva = "Antipasti";

function renderMenuFilters() {
    var bar = document.getElementById("menuFilters");
    bar.innerHTML = "";
    menuCategorie.forEach(function(cat) {
        var btn = document.createElement("button");
        btn.className = "filter-btn" + (cat === menuAttiva ? " active" : "");
        btn.textContent = cat;
        btn.onclick = function() { menuAttiva = cat; renderMenuFilters();
        renderMenuGrid(); };
        bar.appendChild(btn);
    });
}

function renderMenuGrid() {
    var grid = document.getElementById("menuGrid");
    grid.innerHTML = "";
    menuData[menuAttiva].forEach(function(p) {
        var card = document.createElement("div");
        card.className = "dish-card";
        card.innerHTML = '<div><h3>' + p.nome + '</h3><p class="desc">' + p.desc + '</p></div><span class="price">' + p.prezzo + '</span>';
        grid.appendChild(card);
    });
}

// ==============================
// CHEF
// ==============================
var chefs = [
    { nome: "Max Mariola", ruolo: "Executive Chef & Fondatore", bio: "Con oltre 30 anni di esperienza, Max ha aperto un ristorante per transformare la tradizione in un'esperienza autentica.", 
        img: "https://cdn.prod.website-files.com/654117a226e863ccfb523b1d/67fce746594cfd7e6d25f7d5_Max%20Mariola-309.avif"},
    { nome: "Matteo Liuzza", ruolo: "Executive Chef", bio: "Diplomato ALMA con una solida esperienza internazionale tra resort 5 stelle e fine dining, esperto in sviluppo menu e gestione di brigate d'eccellenza.", 
        img: "image/chef2.png" },
    { nome: "Tony Siragusa", ruolo: "Executive Chef", bio: "Tony garantisce eccellenza e precisione in ogni servizio. Unisce tecnica e passione per offrire un'esperienza culinaria di altissimo livello.", 
        img: "image/chef3.jpg" }    
];

function renderChefs() {
    var grid = document.getElementById("chefGrid");
    grid.innerHTML = "";
    chefs.forEach(function(c) {
        var card = document.createElement("div");
        card.className = "chef-card"
        card.innerHTML = '<div style="aspect-ratio:3/4;overflow:hidden"><img src="' + c.img + '" alt="Chef ' + c.nome + '"></div>' +
        '<div class="info"><h3>' + c.nome + '</h3><p class="role">' + c.ruolo + '</p><p class="bio">' + c.bio + '</p></div>';
        grid.appendChild(card);
    });
}

// ==============================
// RECENSIONI
// ==============================
var recensioni = [
  { nome: "Giulia M.", stelle: 5, testo: "Un'esperienza culinaria straordinaria. Il risotto allo zafferano è il migliore che abbia mai assaggiato. Servizio impeccabile e atmosfera magica.", data: "Marzo 2025" },
  { nome: "Andrea R.", stelle: 5, testo: "Max Mariola ha superato ogni aspettativa. La cura per i dettagli è evidente in ogni piatto. Il tiramisù è un capolavoro assoluto.", data: "Febbraio 2025" },
  { nome: "Stefano ", stelle: 4, testo: "Sono venuto a Milano per provare il sound of love.Max è simpatico ed ho mangiato una spettacolare carbonara con tartufo bianco.", data: "Gennaio 2025" },
  { nome: "Maria T.", stelle: 5, testo: "Abbiamo scelto questo ristorante per festeggiare la laurea di mio figlio, grande fan di Max Mariola e siamo stati molto soddisfatti di tutto: qualità e creatività dei piatti, servizio, location, atmosfera. Consigliato tutto e, in merito ai dolci, consigliatissimo il Mont blanc!!!!", data: "Marzo 2025" },
  { nome: "Vincenzo M.", stelle: 5, testo: "Il locale si distingue per un design moderno, arricchito da tocchi di estro e originalità. Il personale, estremamente professionale e al contempo accogliente, riesce a combinare con maestria la cordialità conviviale e l'eleganza di un servizio di inappuntabile.", data: "Luglio 2025" }
];
var reviewIndex = 0;
var reviewTimer;

function renderReview() {
    var r = recensioni[reviewIndex];
    var starsHtml = "";
    for (var i = 0; i < 5; i++) starsHtml += (i < r.stelle ? "★" : "☆");
    document.getElementById("reviewStars").textContent = starsHtml;
    document.getElementById("reviewText").textContent = '"' + r.testo + '"';
    document.getElementById("reviewName").textContent = r.nome;
    document.getElementById("reviewDate").textContent = r.data;
    // Dots
    var dots = document.getElementById("reviewDots");
    dots.innerHTML = "";
    recensioni.forEach(function(_, i) {
        var btn = document.createElement("button");
        btn.className = i === reviewIndex ? "active" : "";
        btn.onclick = function() { reviewIndex = i; renderReview(); resetReviewTimer(); };
        dots.appendChild(btn);
    });
}

function nextReview() { reviewIndex = (reviewIndex + 1) % recensioni.length; renderReview();
    resetReviewTimer();
}
function prevReview() {
    reviewIndex = (reviewIndex - 1 + recensioni.length) % recensioni.length;
    renderReview(); resetReviewTimer();
}
function resetReviewTimer() {
    clearInterval(reviewTimer); reviewTimer = setInterval(nextReview, 6000);
}

// ==============================
// FORM PRENOTA
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    // INIZIALIZZA CONTENUTI DINAMICI
    renderMenuFilters();
    renderMenuGrid();
    renderChefs();
    renderReview();
    resetReviewTimer();

    // DATA minima = oggi
    var oggi = new Date().toISOString().split("T")[0];
    document.getElementById("f-data").setAttribute("min", oggi);

    // FORM SUBMIT
   document.getElementById("prenotaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var nome = document.getElementById("f-nome").value.trim();
    var email = document.getElementById("f-email").value.trim();
    var data = document.getElementById("f-data").value;
    var ora = document.getElementById("f-ora").value;
    var persone = document.getElementById("f-persone").value;
    var note = document.getElementById("f-note").value.trim();
    

    var valido = true;

    // RESET ERRORI
    ["nome","email","data","ora","persone"].forEach(function(c) {
        document.getElementById("err-" + c).textContent = "";
        document.getElementById("f-" + c).classList.remove("error");
    });

    if (!nome) { valido = false; document.getElementById("err-nome").textContent = "Il nome è obbligatorio"; }
    if (!email) { valido = false; document.getElementById("err-email").textContent = "Email obbligatoria"; }
    if (!data) { valido = false; document.getElementById("err-data").textContent = "Data obbligatoria"; }
    if (!ora) { valido = false; document.getElementById("err-ora").textContent = "Orario obbligatorio"; }
    if (!persone) { valido = false; document.getElementById("err-persone").textContent = "Numero persone obbligatorio"; }

    if (!valido) return;

    var payload = {
        nome: nome,
        email: email,
        data: data,
        ora: ora,
        persone: persone,
        note: note
    };

    // 1. GOOGLE SHEETS
    fetch("https://script.google.com/macros/s/AKfycbwC1_vUlqxghZ14kXC2alr93xWSDScYEFVuRemFLwD8pcmao2GH12PVZlLtlD3noZrfwg/exec", {
        method: "POST",
        body: JSON.stringify(payload)
    });

    // 2. EMAILJS
    emailjs.send("service_kjy668k", "template_3m765rv", payload)
    .then(function() {
        showToast("Prenotazione inviata!", "Email di conferma inviata 🍝");
        document.getElementById("prenotaForm").reset();
    })
    .catch(function() {
        showToast("Errore", "Invio email non riuscito");
    });

});
});