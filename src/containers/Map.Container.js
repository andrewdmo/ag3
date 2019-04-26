import React, {Component} from 'react';
import OsmMap from "../components/Map/Osm.Map";


export default class MapContainer extends Component {

    render() {

        return (
            <div id='mapContainer'>
                <OsmMap center={this.props.center} //center
                        zoom={this.props.zoom}/>
            </div>
        );
    }
}
// className='mapContainer'
