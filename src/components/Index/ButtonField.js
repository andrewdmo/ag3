import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class ButtonField extends Component {

    render() {
        return (
            <div>
                <section className="buttonField">
                    <NavLink exact to="/map" className="button">
                        Field Map
                    </NavLink>
                    <NavLink exact to="/germ" className="button">
                        Germination
                    </NavLink>
                    <NavLink exact to="/plant" className="button">
                        Planting
                    </NavLink>
                    <NavLink exact to="/fruit" className="button">
                        Fruiting
                    </NavLink>
                    <NavLink exact to="/harvest" className="button">
                        Harvest
                    </NavLink>
                    <NavLink exact to="/process" className="button">
                        Processing
                    </NavLink>
                    <NavLink exact to="/germ" className="button">
                        Germination
                    </NavLink>
                </section>
            </div>
        )
    }
}
