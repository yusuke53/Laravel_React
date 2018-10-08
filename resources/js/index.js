import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";

export default class Index extends Component {
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
                                <Header />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
