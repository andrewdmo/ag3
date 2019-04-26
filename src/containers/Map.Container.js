import React, {Component} from 'react';
import OsmMap from "../components/Map/Osm.Map";


export default class MapContainer extends Component {


    constructor(props) {
        super(props);

        if (this.props.first !== true) {
            this.state = {
                id: "mapContainer map2"
            }
        } else {
            this.state = {
                id: "mapContainer"
            }
        }
    }

    render() {


        return (
            <div id={this.state.id}>
                <OsmMap
                    center={this.props.center} //center
                    zoom={this.props.zoom}
                />
            </div>
        );
    }
}
// className='mapContainer'
