import contactTemplate from "./contact.jade";
import {stringToNodes} from '../../utilites/utilites';

function initMap() {
  let mapDiv = document.getElementById('map');
  let coords = {lat: 40.743290, lng: -73.996538};

  let map = new google.maps.Map(mapDiv, {
    center: coords,
    zoom: 17
  });


  let contentString = `<div id="infoContent">
  <div class="siteNotice"></div>
  <h1 id="firstHeading">Сюда можно поставить какое нибудь описание</h1>
  </div>`;

  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: `hello world`
  });
  console.dir(marker);

  marker.addListener(`click`, () => {
    infowindow.open(map, marker)
  });

  marker.setMap(map);
}
window.initMap = initMap;
stringToNodes(contactTemplate());



