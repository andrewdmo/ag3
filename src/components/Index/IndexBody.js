import React, {Component} from 'react';
import Error from "../Error";
import {Route, Switch} from "react-router-dom";
import MapPage from "../Map/MapPage";
import Germ from '../Germ/Germ';
import Process from "../Process/Process";
import Harvest from "../Harvest/Harvest";
import Fruit from "../Fruit/Fruit";
import Plant from "../Plant/Plant";

export default class IndexBody extends Component {

    render() {
        return (
            <div className="IndexMain">
                <Switch>
                    <Route exact path={["/", "/index", "/home", "/map"]} component={MapPage}/>
                    <Route exact path={"/germ*"} component={Germ}/>
                    <Route exact path={"/plant*"} component={Plant}/>
                    <Route exact path={"/fruit*"} component={Fruit}/>
                    <Route exact path={"/harvest*"} component={Harvest}/>
                    <Route exact path={"/process*"} component={Process}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </div>
        );
    }
}
