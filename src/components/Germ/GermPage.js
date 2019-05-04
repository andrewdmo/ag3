import React, {Component} from 'react';
import GermForm from "./GermForm";
import GermSchema from "./GermSchema";



export default class GermPage extends Component {

    render(){
        return(
            <div>
                <GermSchema/>
                <GermForm/>
            </div>
        )
    }

}


