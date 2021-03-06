import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "../components/Home";
import Input from "../components/Input";
import Games from "../components/Games";


class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Router>
                    <div>
                        {/*<li><Link to="/">Home</Link></li>*/}
                        {/*<li><Link to="/input">データを入力する</Link></li>*/}
                        {/*<li><Link to="/games">データ一覧</Link></li>*/}

                        {/*<Route path="/" exact component={Home}/>*/}
                        {/*<Route path="/input" exact component={Input}/>*/}
                        {/*<Route path="/games" exact component={Games}/>*/}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="#">Navbar</a>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/input">データを入力する</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="/games">データ一覧</Link>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search" />
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                        </button>
                                </form>
                            </div>
                        </nav>
                        <Route path="/" exact component={Home}/>
                        <Route path="/input" exact component={Input}/>
                        <Route path="/games" exact component={Games}/>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Menu;
