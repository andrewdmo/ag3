import React, {Component} from 'react';
import IndexTop from './Index/IndexTop';
import IndexMain from './Index/IndexMain';

import './Index/Index.css';

export default class Index extends Component {
    render() {
        return (
            <div className='IndexBack'>
                <IndexTop/>
                <IndexMain/>
            </div>
        );
    }
}
