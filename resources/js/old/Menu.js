import React, { Component } from 'react';


class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <a onClick={()=>this.props.changePage("データ一覧")}>データ一覧</a>
                <a onClick={()=>this.props.changePage("データ入力")}>データ入力</a>
            </div>
        );
    }
}
export default Menu;
