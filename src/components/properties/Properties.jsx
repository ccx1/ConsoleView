import React from 'react';
import {Component} from 'react';
import HomeContent from './home/HomeContent'
import AppManager from './manager/app/AppManager'
import Location from './manager/location/Location'
import SDK from './sdk/Down'
import Presentation from './presentation/Presentation'
import User from './manager/user/user'
import RecordOfPayment from './pay/RecordOfPayment'
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
            case "2":
                return <Location/>;
            case "3":
                return <SDK/>;
            case "4":
                return <Presentation/>;
            case "5":
                return <User/>;
            case "6":
                return <Presentation/>;
            case "7":
                return <RecordOfPayment/>;
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

