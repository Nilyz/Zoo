

const map = L.map('map').setView([40.441232, -3.7000116], 12); // Coordenadas de MasterD

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Función para obtener la ubicación del usuario
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        showError();
    }
}

// Mostrar la posición del usuario en el mapa
function showPosition(position) {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;
    
    map.setView([userLat, userLon], 12);
    
    L.marker([userLat, userLon]).addTo(map)
        .bindPopup('Tu ubicación')
        .openPopup();
}

function showError() {
    map.setView([40.441232, -3.7000116], 12);
    
    L.marker([40.441232, -3.7000116]).addTo(map)
        .bindPopup('Ubicación de MasterD')
        .openPopup();
}

getLocation();
