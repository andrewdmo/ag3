import React, {Component} from 'react';
import FormBuck from './FormBuck';
import Map from "../Map/Map";

export default class IndexMain extends Component {

    render() {
        return (
            <div className="IndexMain">
                <Map/>
                <FormBuck/>
            </div>
        );
    }

}
