import React from 'react';
import {Component} from 'react';
import './homepage.less'
import Nav from "../../components/nav/Nav";
import Properties from '../../components/properties/Properties'

export default class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentPosition: "0"
        }

    }

    onMenuChange = (e) => {
        this.setState({
            currentPosition: e
        });
    };


    render() {

        return (
            <div style={{height: "100%"}}>
                <Nav onMenuChange={this.onMenuChange} selectKey={this.state.currentPosition}/>
                <div className="item-page item-position">
                    <Properties position={this.state.currentPosition}/>
                </div>
            </div>
        );
    }
}

