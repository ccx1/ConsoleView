import React from 'react';
import {Component} from 'react';
import './header.less';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Header extends Component {
    homeClick = () => {
        this.props.history.push('/home');
    };
    onHelpClick = () =>{
        this.props.history.push('/help');
    };

    render() {
        return (
            <div className="header">
                <div className="logo-title cursor-pointer" onClick={this.homeClick}>
                    MaxMobi 媒体方平台
                </div>

                <div className="header-menu">
                    <div className="help-doc cursor-pointer" onClick={this.onHelpClick}>
                        <span>帮助文档</span>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default withRouter(connect(mapStateToProps)(Header));