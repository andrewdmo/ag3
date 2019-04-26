import React, {Component} from 'react';
import GermForm from "./GermForm";
import GermMap from "./GermMap";



export default class Germ extends Component {

    render(){
        return(
            <div>
                <GermForm/>
                <GermMap/>
            </div>
        )
    }

}


