import React from 'react';
import {hot} from 'react-hot-loader';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import HomePage from './page/home/homepage'
import Header from './components/header/header'
import Help from './page/help/Help'
import './common/common.less'

class AppRoute extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div className="page">
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/home" component={HomePage}/>
                            <Route exact path="/help" component={Help}/>
                            <Route>
                                <Redirect to="/"/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default hot(module)(connect()(AppRoute));