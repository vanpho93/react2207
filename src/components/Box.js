import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 50 };
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up() {
        // Loi nho o day // Chua chay xong lenh 13 -> 14
        this.setState((prevState) => ({ value: prevState.value + 1 })); //50
        this.setState((prevState) => ({ value: prevState.value + 1 })); //50
    }

    down() {
        this.setState({ value: 100 });
    }

    render() {
        const { value } = this.state;
        const color = value % 2 === 0 ? 'green' : 'red';
        const style = { color, fontWeight: 'bold' };
        return (
            <div className="box">
                <p style={style}>Value: {value}</p>
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        );
    }
}
