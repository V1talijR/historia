// Inicjalizacja mapy
var map = L.map('map').setView([49.1583, 5.3867], 4); // Środek mapy ustawiony na Europę

// Dodanie warstwy mapy
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dodanie punktu na Verdun
var verdunMarker = L.marker([49.1583, 5.3867]).addTo(map);

// Dodanie punktu na Osowiec-Twierdza
var osowiecMarker = L.marker([53.483, 22.617]).addTo(map);

var sarajewoMarker = L.marker([43.866667, 18.416667]).addTo(map);

var yarmouthMarker = L.marker([52.606, 1.729]).addTo(map);

var ieperMarker = L.marker([50.852211, 2.877797]).addTo(map);

var zimowaMarker = L.marker([60.710556, 28.749722]).addTo(map);

var dunkirkMarker = L.marker([51.033333, 2.366667]).addTo(map);

var moskwaMarker = L.marker([55.75, 37.616667]).addTo(map);

var platteMarker = L.marker([54.4075, 18.671389]).addTo(map);

var ardenyMarker = L.marker([50.6243, 6.13724]).addTo(map);

var hulajpoleMarker = L.marker([47.660278, 36.281667]).addTo(map);

// Funkcja obsługująca kliknięcie na marker Verdun
verdunMarker.on('click', function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
});

// Funkcja obsługująca kliknięcie na marker Osowiec-Twierdza
osowiecMarker.on('click', function () {
    var modal = document.getElementById("osowiecModal");
    modal.style.display = "block";
});

sarajewoMarker.on('click', function () {
    var modal = document.getElementById("sarajewoModal");
    modal.style.display = "block";
});

yarmouthMarker.on('click', function () {
    var modal = document.getElementById("yarmouthModal");
    modal.style.display = "block";
});

ieperMarker.on('click', function () {
    var modal = document.getElementById("ieperModal");
    modal.style.display = "block";
});

zimowaMarker.on('click', function () {
    var modal = document.getElementById("zimowaModal");
    modal.style.display = "block";
});

dunkirkMarker.on('click', function () {
    var modal = document.getElementById("dunkirkModal");
    modal.style.display = "block";
});

moskwaMarker.on('click', function () {
    var modal = document.getElementById("moskwaModal");
    modal.style.display = "block";
});

platteMarker.on('click', function () {
    var modal = document.getElementById("platteModal");
    modal.style.display = "block";
});

ardenyMarker.on('click', function () {
    var modal = document.getElementById("ardenyModal");
    modal.style.display = "block";
});

hulajpoleMarker.on('click', function () {
    var modal = document.getElementById("hulajpoleModal");
    modal.style.display = "block";
});

// Zamknięcie modalnych okien
function closeModal(modal) {
    modal.style.display = "none";
}

// Zamknięcie modalnego okna Verdun
var closeVerdun = document.getElementById("closeVerdun");
closeVerdun.onclick = function() {
    closeModal(document.getElementById("myModal"));
}

// Zamknięcie modalnego okna Osowiec-Twierdza
var closeOsowiec = document.getElementById("closeOsowiec");
closeOsowiec.onclick = function() {
    closeModal(document.getElementById("osowiecModal"));
}

var closeSarajewo = document.getElementById("closeSarajewo");
closeSarajewo.onclick = function() {
    closeModal(document.getElementById("sarajewoModal"));
}

var closeYarmouth = document.getElementById("closeYarmouth");
closeYarmouth.onclick = function() {
    closeModal(document.getElementById("yarmouthModal"));
}

var closeIeper = document.getElementById("closeIeper");
closeIeper.onclick = function() {
    closeModal(document.getElementById("ieperModal"));
}

var closeZimowa = document.getElementById("closeZimowa");
closeZimowa.onclick = function() {
    closeModal(document.getElementById("zimowaModal"));
}

var closeDunkirk = document.getElementById("closeDunkirk");
closeDunkirk.onclick = function() {
    closeModal(document.getElementById("dunkirkModal"));
}

var closeMoskwa = document.getElementById("closeMoskwa");
closeMoskwa.onclick = function() {
    closeModal(document.getElementById("moskwaModal"));
}

var closePlatte = document.getElementById("closePlatte");
closePlatte.onclick = function() {
    closeModal(document.getElementById("platteModal"));
}

var closeArdeny = document.getElementById("closeArdeny");
closeArdeny.onclick = function() {
    closeModal(document.getElementById("ardenyModal"));
}

var closeHulajpole = document.getElementById("closeHulajpole");
closeHulajpole.onclick = function() {
    closeModal(document.getElementById("hulajpoleModal"));
}
// Zamknięcie modalnego okna startowego
var closeStart = document.getElementById("closeStart");
closeStart.onclick = function() {
    closeModal(document.getElementById("startModal"));
}

// Zamknięcie modalnych okien
window.onclick = function(event) {
    var startModal = document.getElementById("startModal");
    var verdunModal = document.getElementById("myModal");
    var osowiecModal = document.getElementById("osowiecModal");
    var sarajewoModal = document.getElementById("sarajewoModal");
    var yarmouthModal = document.getElementById("yarmouthModal");
    var ieperModal = document.getElementById("ieperModal");
    var zimowaModal = document.getElementById("zimowaModal");
    var dunkirkModal = document.getElementById("dunkirkModal");
    var moskwaModal = document.getElementById("moskwaModal");
    var platteModal = document.getElementById("platteModal");
    var ardenyModal = document.getElementById("ardenyModal");
    var hulajpoleModal = document.getElementById("hulajpoleModal");

    if (event.target == startModal) {
        closeModal(startModal);
    }
    if (event.target == verdunModal) {
        closeModal(verdunModal);
    }
    if (event.target == osowiecModal) {
        closeModal(osowiecModal);
    }
    if (event.target == sarajewoModal) {
        closeModal(sarajewoModal);
    }
    if (event.target == yarmouthModal){
        closeModal(yarmouthModal);
    }
    if (event.target == zimowaModal){
        closeModal(zimowaModal);
    }
    if (event.target == dunkirkModal){
        closeModal(dunkirkModal);
    }
    if (event.target == moskwaModal){
        closeModal(moskwaModal);
    }
    if (event.target == platteModal){
        closeModal(platteModal);
    }
    if (event.target == ardenyModal){
        closeModal(ardenyModal);
    }
    if (event.target == hulajpoleModal){
        closeModal(hulajpoleModal);
    }
}

// Wyświetlenie modalnego okna przy uruchamianiu strony
window.onload = function() {
    var modal = document.getElementById("startModal");
    modal.style.display = "block";
}