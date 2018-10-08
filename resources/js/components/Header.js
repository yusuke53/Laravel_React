import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./Home";
import Input from "./Input";
import Games from "./Games";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <h1 className="navbar-brand">Lacrosse Scouting</h1>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/input">Input Data</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/games">List of Data</Link>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
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
export default Header;
