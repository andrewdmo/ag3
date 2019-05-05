import React, {Component} from 'react';
import BuckForm from "./BuckForm";
import "./process.css";
import SortForm from "./SortForm";
import TrimForm from "./TrimForm";
import QCForm from "./QCForm";

export default class ProcessPage extends Component {

    render() {
        return (
            <div>
                <BuckForm/>
                <SortForm/>
                <TrimForm/>
                <QCForm/>
            </div>
        )
    }
}
