import React from 'react';
import {Component} from 'react';
import './Settings.less';

export default class Settings extends Component {


    constructor(props) {
        super(props);
        this.state = {
            item: [{
                name: "账户：",
                value: "Sivta",
                changeEnable: false
            }, {
                name: "开发者名称：",
                value: "adsfasdf",
                changeEnable: true
            }, {
                name: "您的昵称：",
                value: "Sivta",
                changeEnable: true
            }, {
                name: "Email：",
                value: "Sivtafadsadfasd@aa.com",
                changeEnable: true
            }, {
                name: "联系人IM：",
                value: "12356789",
                changeEnable: true
            }, {
                name: "联系地址：",
                value: "中华人民共和国",
                changeEnable: true
            }, {
                name: "邮编：",
                value: "325000",
                changeEnable: true
            }]
        }
    }

    render() {

        return <React.Fragment>
            <div className="home-page">
                基本信息
            </div>
            <div className="page-item-settings">
                请尽可能的完善您的基本信息，好让我们能提供更好的服务。
            </div>
            <div className="setting-table">


            <table>
                <tbody>
                {
                    this.state.item.map((item, position) => {
                        return <tr key={position}>
                            <td>{item.name}</td>
                            <td>{item.value}
                                {item.changeEnable && <a className="table-change" href="#">修改</a>}
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>

            <div className="item-border item-right-div">
                <div>
                    您的专属账户经理
                </div>
                <div>
                    微信:xxxxxx
                </div>
                <div>
                    电话:xxxxxxxxx
                </div>
                <div>
                    邮箱:xxxxxxxxxx
                </div>
                <div>
                    若有问题咨询，请联系您的账户经理
                </div>
            </div>


        </React.Fragment>;
    }
}

