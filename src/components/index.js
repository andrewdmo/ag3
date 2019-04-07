import React, {Component} from 'react';
import IndexTop from './Index/IndexTop';
import IndexBody from './Index/IndexBody';

import './Index/Index.css';

export default class Index extends Component {
    render() {
        return (
            <div className='IndexBack'>
                <IndexTop/>
                <IndexBody/>
            </div>
        );
    }
}
