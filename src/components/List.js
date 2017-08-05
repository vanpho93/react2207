import React, { Component } from 'react';
import Word from './Word';
import WordForm from  './WordForm';

class NewWord {
    constructor(en, vn) {
        this.en = en;
        this.vn = vn;
    }
}

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            arrWords:  [
                new NewWord('Hello', 'Xin chao'),
                new NewWord('Good bye!', 'Tam biet'),
                new NewWord('Moring', 'Buoi sang')
            ]
        };
        this.addWord = this.addWord.bind(this);
    }

    addWord(en, vn) {
        const newWord = new NewWord(en, vn);
        this.setState({ arrWords: [newWord].concat(this.state.arrWords) });
    }

    render() {
        return (
            <div>
                <WordForm onAddWord={this.addWord} />
                { this.state.arrWords.map(e => <Word en={e.en} vn={e.vn} key={e.en} />) }
            </div>
        );
    }
}