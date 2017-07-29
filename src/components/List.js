import React, { Component } from 'react';
import Word from './Word';

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
        this.onAddWord = this.onAddWord.bind(this);
    }

    onAddWord() {
        const en = this.refs.txtEn.value;
        const vn = this.refs.txtVn.value;
        const newWord = new NewWord(en, vn);
        this.setState({ arrWords: [newWord].concat(this.state.arrWords) });
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'gray', padding: 10, width: 150 }}>
                    <input type="text" placeholder="Enter English word" ref="txtEn" />
                    <br /><br />
                    <input type="text" placeholder="Enter Vietnamese meaning" ref="txtVn" />
                    <br /><br />
                    <button onClick={this.onAddWord}>Add</button>
                </div>
                { this.state.arrWords.map(e => <Word en={e.en} vn={e.vn} key={e.en} />) }
            </div>
        );
    }
}