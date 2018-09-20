import React from 'react';
import {Component} from 'react';
import './Down.less'
import {Icon, Button} from 'antd';

export default class Down extends Component {


    constructor(props) {
        super(props);

    }


    render() {

        return <React.Fragment>
            <div className="home-page">
                SDK下载
            </div>
            <div className="page-item-down">
                建议您使用最新版本的SDK，以便获得更好的广告收益和用户体验。
            </div>
            <div className="item-border-down">
                <Icon type="android" theme="outlined" className="icon-font"/>
            </div>
            <div className="item-massage">
                <h3>面向 Android 应用的 SDK</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>最新版本：</td>
                        <td>1.0</td>
                    </tr>
                    <tr>
                        <td>发布日期：</td>
                        <td>2018年3月22日</td>
                    </tr>
                    <tr>
                        <td>更新内容：</td>
                        <td>
                            <p>1. 信息流视频产品升级，新增视频播放控件</p>
                            <p>2. 修复若干bug：建议开发者尽快更新版本</p>
                            <p>3. 添加开屏广告跳过按钮样式</p>
                            <p>4. 修改信息流广告展现发送方式</p>
                            <p>5. Demo添加对锤子手机的适配</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="button-group">

                <Button className="button-margin" type={"primary"}>下载sdk</Button>
                <Button className="button-margin" type={"primary"}>查看文档</Button>
                <Button className="button-margin" type={"primary"}>更新日志</Button>

            </div>

        </React.Fragment>;
    }
}

