import React, {Component} from "react";
import {NavLink} from 'react-router-dom'
import Clock from "./Clock";


export default class MenuBar extends Component {

    render() {
        return (
            <div className="menuBar">
                <Clock/>

                <NavLink exact to="/"
                         className="menuText shadow">Home / Report
                </NavLink>

                <NavLink exact to="/map"
                         className="menuText shadow">Map
                </NavLink>

                <NavLink exact to="/germ"
                         className="menuText shadow">Germination
                </NavLink>

                <NavLink exact to="/plant"
                         className="menuText shadow">Planting
                </NavLink>

                <NavLink exact to="/fruit"
                         className="menuText shadow">Fruiting
                </NavLink>

                <NavLink exact to="/harvest"
                         className="menuText shadow">Harvest
                </NavLink>

                <NavLink exact to="/process"
                         className="menuText shadow">Processing
                </NavLink>
            </div>
        )
    }
}
