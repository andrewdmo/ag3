import React, {Component} from 'react';
import './map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


export default class OsmMap extends Component {


    componentDidMount() {

        // if (this.map) {
        //     this.map.remove();
        // }


        // this method uses API from original Leaflet:
        const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const osmAttrib = 'MapPage data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        const osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

        const lat = this.props.center.lat;
        const lng = this.props.center.lng;
        const zm = this.props.zoom;

        console.log('lat: ' + lat);
        console.log('lng: ' + lng);
        console.log('zm: ' + zm);

        //re-instantiate MapPage:
        const container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        }


        this.map = L.map('map', {
                // center: [35.25332, -83.41597],
                center: [lat, lng],
                zoom: zm,
                layers: [


                    //sat from Goog:
                    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                        maxZoom: 50,
                        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                    }),

                    // //normal OSM:
                    L.tileLayer(osmUrl, {
                        minZoom: 1,
                        maxZoom: 50,
                        attribution: osmAttrib,
                        opacity: .2
                    }),
                ]
            } //options
        );

        // this.map.setView(new L.LatLng(51.3, 0.7), 9);

        // adds new map:
        // this.map.addLayer(osm);
    }


    render() {
        return (
            <div id="map"/>
        )
    }
}
