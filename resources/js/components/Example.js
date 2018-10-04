import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor() {
        super();

        this.state = {
            yamakis: []
        };

    }

    componentDidMount() {
        fetch('/api/yamakis')
            .then(response => {
                return response.json();
            })
            .then(objects => {
                this.setState({yamakis:objects});
            });
    }

    renderYamakis()
    {
        return this.state.yamakis.map(yamaki => {
            return (
                <li key={yamaki.key}>
                    名前 : {yamaki.name}<br/>
                    勝利数 : {yamaki.win}<br/>
                    防御率 : {yamaki.era}<br/>
                </li>
            );
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>

                            <div className="panel-body">
                                <ul>
                                    {this.renderYamakis()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
