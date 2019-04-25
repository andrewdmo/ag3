import React, {Component} from 'react';
import './map.css';
import 'leaflet/dist/leaflet.css';
import MapContainer from "../../containers/Map.Container";
import L from "leaflet";


export default class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {
                // @35.2535921,-83.4138238,366a,35y,12.96h/data=!3m1!1e3
                lat: 35.2535921,
                lng: -83.4138238,
            },
            zoom: 11
            // note: '<MapContainer\n' +
            //     '                    center={{\n' +
            //     '                        lat: 35.25332,\n' +
            //     '                        lng: -83.41597\n' +
            //     '                    }}\n' +
            //     '                    zoom={19}/>'
        };


    }

    render() {


        return (
            <div>
                <MapContainer center={this.state.center}
                              zoom={this.state.zoom}/>

            </div>

        )
    }
}
