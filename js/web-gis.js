// map print 

L.control.browserPrint({ position: 'topright' }).addTo(mymap);


// full screen map view 
var mapId = document.getElementById('map');
function fullScreenView() {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        mapId.requestFullscreen();
    }
}
