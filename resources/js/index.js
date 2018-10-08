import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from "./components/Input";
import Games from "./components/Games";
import Home from "./components/Home";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading" >
                                <h1>Lacrosse Scouting</h1>
                            </div>
                            <div className="menu">
                                <Router>
                                    <div>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/input">データを入力する</Link></li>
                                        <li><Link to="/games">データ一覧</Link></li>

                                        <Route path="/" exact component={Home}/>
                                        <Route path="/input" exact component={Input}/>
                                        <Route path="/games" exact component={Games}/>
                                    </div>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
