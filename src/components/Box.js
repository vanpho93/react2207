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
        return (
            <div>
                <p style={{ color: 'green', fontWeight: 'bold' }}>Value: {this.state.value}</p>
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        );
    }
}

// re nhanh
