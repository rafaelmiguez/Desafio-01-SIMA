const IDdoMapa = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

var mymap = L.map('myMap').setView([-11.409874, -41.280857], 6)


L.tileLayer(IDdoMapa, {
    maxZoom: 18,
}).addTo(mymap);

var circle = L.circle([-13.743078, -44.677154], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 180000
}).addTo(mymap);

var circle2 = L.circle([-11.499595, -45.394105], {
    color: 'yellow',
    fillColor: '#FFFF00',
    fillOpacity: 0.5,
    radius: 80000
}).addTo(mymap);

var circle3 = L.circle([-11.453620, -43.888238], {
    color: 'green',
    fillColor: '#008000',
    fillOpacity: 0.5,
    radius: 80000
}).addTo(mymap);

circle.bindPopup("Nessa região a falta das técnicas agrícolas sustentáveis estão entre 60% a 80%");

circle2.bindPopup("Nessa região a falta das técnicas agrícolas sustentáveis estão entre 40% a 60%");

circle3.bindPopup("Nessa região a falta das técnicas agrícolas sustentáveis estão entre 20% a 40%");