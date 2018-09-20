import React from 'react';
import {Component} from 'react';
import './Nav.less'
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {

    handleClick = (e) => {
        this.props.onMenuChange(e.key);
    };


    render() {
        return (
            <React.Fragment>
                <div className="side-nav">
                    <Menu
                        onClick={this.handleClick}
                        defaultSelectedKeys={[this.props.selectKey]}
                        multiple={false}
                        mode="inline"
                    >
                        <Menu.Item key="0"><Icon type="home" theme="outlined" />首页</Menu.Item>
                        <SubMenu key="menu-app-manager" title={<span><Icon type="appstore" theme="outlined" /><span>应用管理</span></span>}>
                            <Menu.Item key="1">App列表</Menu.Item>
                            <Menu.Item key="2">广告位置管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>SDK/API</span></span>}>
                            <Menu.Item key="3">SDK下载</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="setting"/><span>报告</span></span>}>
                            <Menu.Item key="4">每日数据</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting"/><span>财务管理</span></span>}>
                            <Menu.Item key="5">账户管理</Menu.Item>
                            <Menu.Item key="6">月度收益</Menu.Item>
                            <Menu.Item key="7">付款记录</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="setting"/><span>设置</span></span>}>
                            <Menu.Item key="8">基本信息</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </React.Fragment>
        );
    }
}

