import React, {Component} from 'react';
import './map.css';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

export default class Map extends Component {

    componentDidMount() {
        const osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        const osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

        this.map = L.map('map', {
            center: [49.8419, 24.0315],
            zoom: 16,
            layers: [
                L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 12,
                    attribution: osmAttrib
                }),
            ]
        });

        this.map.setView(new L.LatLng(51.3, 0.7),9);
        this.map.addLayer(osm);

    }

    render() {
        // const mymap = L.map('leafletMap').setView([51.505, -0.09], 13);

        return (

            <div id='map'/>


        )
    }

}
