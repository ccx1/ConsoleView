import React from 'react';
import {Component} from 'react';
import HomeContent from './home/HomeContent'
import AppManager from './manager/app/AppManager'
import Settings from './settings/Settings'


export default class Properties extends Component {


    constructor(props) {
        super(props);

    }

    static getComponents(currentNode) {
        switch (currentNode) {
            case "0":
                return <HomeContent/>;
            case "1":
                return <AppManager/>;
            case "8":
                return <Settings/>;
            default:
                return <HomeContent/>;
        }
    }

    render() {
        let proCom = null;
        if (this.props.position) {
            let currentNode = this.props.position;
            proCom = null;
            proCom = Properties.getComponents(currentNode);
        }
        return proCom;
    }
}

