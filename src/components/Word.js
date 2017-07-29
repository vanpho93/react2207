import React, { Component } from 'react';

class Word extends Component {
    render() {
        const { en, vn } = this.props;
        return (
            <div>
                <h3>{en}</h3>
                <p>{vn}</p>
            </div>
        );
    }
}

export default Word;
