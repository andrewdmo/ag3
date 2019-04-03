import React, {Component} from 'react';
import FormBuck from './FormBuck';
import IndexMap from "./IndexMap";

export default class IndexMain extends Component {

    render() {
        return (
            <div className="IndexMain">
                <IndexMap/>
                <FormBuck/>
            </div>
        );
    }

}
