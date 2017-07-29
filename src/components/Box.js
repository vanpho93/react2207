import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 50 };
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up() {
        // Loi nho o day
        this.setState({ value: this.state.value + 1 });
    }

    down() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        const { value } = this.state;
        const color = value % 2 === 0 ? 'green' : 'red';
        const style = { color, fontWeight: 'bold' };
        const containerStyle = { 
            backgroundColor: '#E4F6D4', 
            padding: 10, 
            width: 100,
            margin: 10
        };
        return (
            <div style={containerStyle}>
                <p style={style}>Value: {value}</p>
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        );
    }
}

// re nhanh
