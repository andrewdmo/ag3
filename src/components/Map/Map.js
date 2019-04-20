import React, {Component} from 'react';
import './map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

export default class osmMap extends Component {

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


    render() {
        return (
            <div>
                <Map id="map"
                     center={this.state.center}
                     zoom={this.state.zoom}
                >
                    <TileLayer
                        url={osmUrl}
                        attribution={osmAttrib}
                    />
                    <TileLayer
                        url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                        // options={{maxZoom: 50, subdomains: ['mt0', 'mt1', 'mt2', 'mt3']}}
                    />
                </Map>
            </div>
        )
    }
}
