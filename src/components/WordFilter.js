import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        return (
            <div>
                <button>SHOW ALL</button>
                <button>SHOW MEMORIZED</button>
                <button>SHOW FORGET</button>
            </div>
        );
    }
}