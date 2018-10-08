import React, { Component } from 'react';
import axios from 'axios';


class Input extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            number: '',
            shot: 0,
            GB: 0,
            miss: 0,
            data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }
    // componentWillMount(){
    //     axios.get('/api/data').then(response => {
    //         this.setState({
    //             data: response.data
    //         });
    //         console.log('Not errors');
    //     }).catch(errors =>{
    //         console.log('errors');
    //     })
    // }

    handleSubmit(e){
        e.preventDefault();
    }

    handleChangeNumber(e){
        this.setState({number: e.target.value});
    }

    addshot(){
        this.setState({shot: this.state.shot+1});
    }

    addGB(){
        this.setState({GB: this.state.GB+1});
    }

    addmiss(){
        this.setState({miss: this.state.miss+1});
    }



    render() {
        return (
            <div className="unput">
                <h3>inputだよ</h3>
                <table border="1">
                    <tr>
                        <th>背番号</th><th>shot</th><th>GB</th><th>miss</th>
                    </tr>
                    <tr>
                        <td>1</td><td>3</td><td>5</td><td>5</td>
                    </tr>
                    <tr>
                        <td>{this.state.number}</td><td>{this.state.shot}</td><td>{this.state.GB}</td><td>{this.state.miss}</td>
                    </tr>
                </table>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="number">背番号</label>
                    <input type="text" name="number" value={this.state.number} onChange={this.handleChangeNumber} />
                    <button type="submit">送信</button>
                </form>

                <button onClick={()=>this.addshot()}>shot</button>
                <button onClick={()=>this.addGB()}>GB</button>
                <button onClick={()=>this.addmiss()}>miss</button>

                {this.state.data.map(data => <li>{data}</li>)}

            </div>

        );

    }

}



export default Input;
