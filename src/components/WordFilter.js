import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        const { onChangeFilterStatus } = this.props;
        return (
            <div>
                <button onClick={() => onChangeFilterStatus('SHOW_ALL')}>SHOW ALL</button>
                <button onClick={() => onChangeFilterStatus('SHOW_MEMORIZED')}>SHOW MEMORIZED</button>
                <button onClick={() => onChangeFilterStatus('SHOW_FORGOT')}>SHOW FORGET</button>
            </div>
        );
    }
}