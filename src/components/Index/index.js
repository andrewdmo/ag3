import React, {Component} from 'react';
import IndexTop from "./IndexTop";

export default class IndexMain extends Component {

    render() {
        return (
            <div className="IndexBack">
                <IndexTop/>
                <IndexMain/>
            </div>
        );
    }
}
