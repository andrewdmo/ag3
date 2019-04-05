import React, {Component} from 'react';

const clockColor = 'blue';

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            clockRed: false
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }


    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
            clockRed: !this.state.clockRed
        });
    };

    render() {
        // console.log(this.state.time);
        if (this.state.clockRed === true) {
            return (
                <div>
                    <p className={'clock blink'}>
                        {this.state.time}
                    </p>
                </div>
            );
        } else return (
            <div>
                <p className={'clock'}>
                    {this.state.time}
                </p>
            </div>
        )


    }
}
