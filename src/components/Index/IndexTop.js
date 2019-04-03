import React, {Component} from 'react';
import TopLogo from "./TopLogo";
import Logo_ from '../../assets/Logo_.jpg'


export default class IndexTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fade: "out"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({fade: "in"});
    }

    render() {

        return (
            <div className="top">
                <img src={Logo_} alt={'TopLogo'} className="backPic shadow"/>
                <TopLogo/>
                <h1 className="topTitle shadow">AG3: the Future of Now</h1>
            </div>
        );
    }
}
