import React, {Component} from 'react';
import Error from "../Error";
import {Route, Switch} from "react-router-dom";
import MapPage from "../Map/MapPage";
import GermPage from '../Germ/GermPage';
import ProcessPage from "../Process/ProcessPage";
import Harvest from "../Harvest/Harvest";
import Fruit from "../Fruit/Fruit";
import PlantPage from "../Plant/PlantPage";
import HomePage from "./HomePage";

export default class IndexBody extends Component {

    render() {
        return (
            <div className="IndexMain">
                <Switch>
                    <Route exact path={["/", "/index", "/home"]} component={HomePage}/>
                    <Route exact path={"/map*"} component={MapPage}/>
                    <Route exact path={"/germ*"} component={GermPage}/>
                    <Route exact path={"/plant*"} component={PlantPage}/>
                    <Route exact path={"/fruit*"} component={Fruit}/>
                    <Route exact path={"/harvest*"} component={Harvest}/>
                    <Route exact path={"/process*"} component={ProcessPage}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </div>
        );
    }
}
