import React, {Component} from 'react';
import './map.css';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";


export default class osmMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                // @35.2535921,-83.4138238,366a,35y,12.96h/data=!3m1!1e3
                lat: 35.2535921,
                lng: -83.4138238,
            },
            zoom: 18
        }
    }

    componentDidMount() {

        // this method uses API from original Leaflet:
        const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const osmAttrib = 'OldMap data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        const osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

        const lat = this.state.center.lat;
        const lng = this.state.center.lng;
        const zm = this.state.zoom;

        console.log('lat: ' + lat);
        console.log('lng: ' + lng);
        console.log('zm: ' + zm);


        this.map = L.map('map', {
                // center: [35.25332, -83.41597],
                center: [lat, lng],
                zoom: zm,
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
            } //options
        );

        // this.map.setView(new L.LatLng(51.3, 0.7), 9);
        this.map.addLayer(osm);
    }


    render() {
        return (
            <div id="map"/>

        )
    }
}
