import React, {Component} from 'react';
import ButtonField from "./ButtonField";
import HomeReport from "./HomeReport";

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeReport/>
                <ButtonField/>
            </div>
        );
    }
}
