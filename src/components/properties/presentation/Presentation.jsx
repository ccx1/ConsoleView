import React from 'react';
import {Component} from 'react';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/graph');
import * as api from '../../../api/api'

export default class Presentation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            webkitDep: ""
        }
    }


    componentDidMount() {
        this.onChangeTabs();
    }


    onChangeTabs = () => {
        api.getPresentationData()
            .then(data => {
                console.log(data);
                this.setState({
                    webkitDep:data
                },()=>{
                    let sampleChart = echarts.init(document.getElementById('mycharts'));
                    sampleChart.setOption(this.setEchartOptions());
                });
            }).catch(e => {

        });
    };


    setEchartOptions = () => {
        const {webkitDep} = this.state;
        return {
            title: {
                text: 'Beijing AQI'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: webkitDep.map(function (item) {
                    return item[0];
                })
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#096'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: 'Beijing AQI',
                type: 'line',
                data: webkitDep.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 50
                    }, {
                        yAxis: 100
                    }, {
                        yAxis: 150
                    }, {
                        yAxis: 200
                    }, {
                        yAxis: 300
                    }]
                }
            }
        }
    };


    render() {

        return <React.Fragment>
            <div className="home-page">
                每日报告
            </div>
            <div id="mycharts" style={{width: "100%", height: "100%", marginTop: 30}}/>

        </React.Fragment>;
    }
}

