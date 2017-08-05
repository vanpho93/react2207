import React, { Component } from 'react';

export default class MyButton extends Component {

    childUp() {
        // const simpleBox = this.props.parent;
        // simpleBox.setState(prevState => ({ value: prevState.value + 1 }));
        this.props.onAdd();
    }

    render() {
        return (
            <div>
                <button 
                    style={{ color: 'green', fontWeight: 'bold' }}
                    onClick={this.childUp.bind(this)}
                >
                    My Button Up
                </button>
            </div>
        );
    }
}