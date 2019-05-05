import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class ButtonField extends Component {

    render() {
        return (
            <div className="buttonFields">
                <div>
                    <NavLink exact to="/map" className="button">
                        Field
                    </NavLink>
                    <NavLink exact to="/germ" className="button">
                        Germination
                    </NavLink>
                </div>
                <div className="buttonFields">

                    <NavLink exact to="/plant" className="button">
                        Planting
                    </NavLink>
                    <NavLink exact to="/fruit" className="button">
                        Fruiting
                    </NavLink>

                </div>
                <div className="buttonFields">

                    <NavLink exact to="/harvest" className="button">
                        Harvest
                    </NavLink>
                    <NavLink exact to="/process" className="button">
                        Processing
                    </NavLink>
                </div>
                <NavLink exact to="/germ" className="button">
                    Germination
                </NavLink>
            </div>
        )
    }
}
