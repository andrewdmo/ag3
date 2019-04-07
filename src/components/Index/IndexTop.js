import React, {Component} from 'react';
import TopLogo from "./TopLogo";
import Logo_ from '../../assets/Logo_.jpg'
import MenuBar from "./MenuBar";


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
                <TopLogo/>
                <img src={Logo_} alt={'TopLogo'} className="topBrandPic shadow"/>
                <div>
                    <h1 className="topTitle shadow">AG3:</h1>
                    <h2 className="topTitle shadow">the Future of Now</h2>
                </div>
                <MenuBar/>
            </div>
        );
    }
}
