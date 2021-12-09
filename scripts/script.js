console.log("Hello world");

//check for jquery

$(function(){
    console.log("Hello jquery"); 
});

//abrir e fechar menu hamburger 
let hamburger = $("#hamburger");
let nav = $("nav");
let close = $("#close");

nav.hide();

hamburger.on('click', function(){
    nav.show();
});

close.on('click', function(){
    nav.hide();
});

//abrir painel "where are you going"
let wherePanel = $("#wherePanel");
let arrowButton = $("#outTab button");

arrowButton.on('click', function(){
    arrowButton.fadeOut(500);
    wherePanel.css("top", "0");
});

//!!MAPA!!

// Making a map and tiles
      // Setting a higher initial zoom to make effect more obvious
      const mymap = L.map('map').setView([40, -8], 6);
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);




