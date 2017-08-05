import React, { Component } from 'react';
import MyButton from './MyButton';

export default class SimpleBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.up = this.up.bind(this);
    }

    up() {
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.up}>Up</button>
                <MyButton onAdd={this.up}></MyButton>
            </div>
        );
    }
}
