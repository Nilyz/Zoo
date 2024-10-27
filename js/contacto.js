const masterDCoords = [40.441232, -3.7000116]; 

        const map = L.map('map').setView(masterDCoords, 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker(masterDCoords).addTo(map)
            .bindPopup('Ubicación de MasterD')
            .openPopup();