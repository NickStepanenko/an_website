var map;

DG.then(function () {
    map = DG.map('map', {
        center: [52.356201, 104.154575],
        zoom: 13
    });
    DG.marker([52.356201,104.154575]).addTo(map).bindPopup('Офис нашей компании');
});