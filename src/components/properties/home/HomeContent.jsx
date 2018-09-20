import React from 'react';
import {Component} from 'react';
import HomeTable from './HomeTable'
import HomeCharts from '../../../components/charts/HomeCharts'

export default class HomeContent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            item: [{
                leftItem: "今日",
                rightItem: 119934,
            }, {
                leftItem: "今日",
                rightItem: 119934
            }, {
                leftItem: "今日",
                rightItem: 119934
            }]
        };
    }


    render() {

        return (
            <React.Fragment>
                <div className="home-page">
                    首页
                </div>
                <div className="page-item">
                    <HomeTable data={this.state.item} title={"展示量"} titleClass={"num1"}/>
                    <HomeTable data={this.state.item} title={"点击量"} titleClass={"num2"}/>
                    <HomeTable data={this.state.item} title={"预估收益"} titleClass={"num3"}/>
                    <div className="item-sub">
                        <HomeCharts/>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

