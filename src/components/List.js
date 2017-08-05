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
        this.removeWord = this.removeWord.bind(this);
    }

    addWord(en, vn) {
        const newWord = new NewWord(en, vn);
        this.setState({ arrWords: [newWord].concat(this.state.arrWords) });
    }

    removeWord(index) {
        this.setState(prevState => ({
            arrWords: prevState.arrWords.filter((e, i) => i !== index)
        }));
    }

    render() {
        const { arrWords } = this.state;
        return (
            <div>
                <WordForm onAddWord={this.addWord} />
                    { arrWords.map((e, i) => (
                        <Word 
                            en={e.en} 
                            vn={e.vn} 
                            key={e.en} 
                            index={i}
                            onRemoveWord={this.removeWord}
                        />
                    ))}
            </div>
        );
    }
}