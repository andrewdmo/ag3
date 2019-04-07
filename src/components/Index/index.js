import React, {Component} from 'react';
import IndexTop from "./IndexTop";
import IndexBody from "./IndexBody";
import "Index.css";

export default class Index extends Component {

    render() {
        return (
            <div className="IndexBack">
                <IndexTop/>
                <IndexBody/>
            </div>
        );
    }
}
