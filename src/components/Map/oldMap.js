import React, {Component} from 'react';
import './map.css';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

export default class OldMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                // @35.2535921,-83.4138238,366a,35y,12.96h/data=!3m1!1e3
                lat: 35.2535921,
                lng: -83.4138238,
            },
            zoom: 11
        }
    }

    componentDidMount() {
        const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        const osmAttrib = 'OldMap data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        const osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

        this.map = L.map('map', {
            center: [35.25332, -83.41597],
            zoom: 19.7,
            layers: [
                L.tileLayer(osmUrl, {
                    minZoom: 1, maxZoom: 50,
                    attribution: osmAttrib
                }),
                L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                    maxZoom: 50,
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                })
            ]
        });

        // this.map.setView(new L.LatLng(51.3, 0.7), 9);
        this.map.addLayer(osm);

    }

    render() {
        // const mymap = L.map('leafletMap').setView([51.505, -0.09], 13);

        return (

            <div id='map'/>


        )
    }

}
