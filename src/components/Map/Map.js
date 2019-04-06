import React, {Component} from 'react';
import MapGeo from "../../containers/Map.geo";
import './map.css';

export default class Map extends Component {
    render() {
        return (
            <div className="Map">
                <MapGeo/>
            </div>
        )
    }

}
