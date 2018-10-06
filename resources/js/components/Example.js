import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Menu from "./Menu";
import Input from "./Input";
import Games from "./Games";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            yamakis: [],
            currentPage:"データ一覧"
        };
        this.changePage = this.changePage.bind(this);
    }
    changePage(currentPage) {

        this.setState({currentPage: currentPage})

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
        const currentPage = this.state.currentPage;
        let Content = null;

        switch (currentPage) {
            case"データ一覧":
                Content = (() => <Games />);
                break;
            case "データ入力":
                Content = (() => <Input />);
                break;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading"><Header /></div>
                            <Menu

                                changePage={this.changePage}

                            />
                            <Content />

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
    ReactDOM.render(<Main />, document.getElementById('example'));
}
