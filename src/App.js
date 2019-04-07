import React, {Component} from 'react';
import './App.css';
import Index from "./components";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Index/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
