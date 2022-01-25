function updateMap() {
    fetch("\data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases > 500) {
                    color2 = "rgb(255, 0 , 0)";
                }
                else {
                    color2 = `rgb(${cases}, 0, 0)`;
                }
                var marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color2
                })
                
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
updateMap();