import React, {Component} from 'react';
import Logo_2 from '../../assets/Logo_2.jpg';
import Index from "../index";
import Clock from "./Clock";

export default class TopLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            spin: 'topLogo clockwise', //todo: cleanup vars
        };


        // This binding is necessary to make `this` work in the callback
        this.logoClick = this.logoClick.bind(this);
    }


    // use state for rotation/effects:
    logoClick = (e) => {
        e.preventDefault(); //prevent default link behavior

        Index.forceUpdate = (e) => {
            console.log('forceUpdate e: ' + e);
        };


        // console.log('updateLat: ' + this.updatePos.coords.lat);
        // let a = updatePos;
        //updatePos location (vs full refresh)
        // console.log('updatePos: ' + updatePos);


        //change rotation on click
        if (this.state.spin !== 'topLogo clockwise') {
            this.setState({spin: 'topLogo clockwise'})
        } else {
            this.setState({spin: 'topLogo unclockwise'})
        }

    };

    render() {
        console.log('logoClick:' + this.state.spin);

        const logoSpin = this.state.spin + ' shadow';

        return (
            <img src={Logo_2} className={logoSpin} onClick={this.logoClick} alt="logo"/>
        );
    }
}
