import React, { Component } from 'react';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = { memorized: false };
        this.toggleMemorized = this.toggleMemorized.bind(this);
    }

    toggleMemorized() {
        this.setState({ memorized: !this.state.memorized });
    }

    render() {
        const { memorized } = this.state;
        const { en, vn, onRemoveWord, index } = this.props;
        const englistText = memorized ? '-------' : en;
        const buttonText = memorized ? 'Fotgot' : 'Memorized';
        return (
            <div>
                <h3>{ englistText }</h3>
                <p>{vn}</p>
                <button onClick={this.toggleMemorized}>{ buttonText }</button>
                <button onClick={() => onRemoveWord(index)}>DELETE</button>
            </div>
        );
    }
}

export default Word;
