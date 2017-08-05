import React, { Component } from 'react';

export default class WordForm extends Component {
    handleAdd() {
        const { txtEn, txtVn } = this.refs;
        this.props.onAddWord(txtEn.value, txtVn.value);
        txtEn.value = '';
        txtVn.value = '';
    }
    render() {
        return (
            <div style={{ backgroundColor: 'gray', padding: 10, width: 150 }}>
                <input type="text" placeholder="Enter English word" ref="txtEn" />
                <br /><br />
                <input type="text" placeholder="Enter Vietnamese meaning" ref="txtVn" />
                <br /><br />
                <button onClick={this.handleAdd.bind(this)}>Add</button>
            </div>
        );
    }
}