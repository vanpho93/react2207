import React, { Component } from 'react';
import Word from './Word';
// import WordForm from  './WordForm';
import WordFilter from './WordFilter';

class NewWord {
    constructor(en, vn, memorized) {
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
    }
}

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            arrWords:  [
                new NewWord('Hello', 'Xin chao', false),
                new NewWord('Good bye!', 'Tam biet', true),
                new NewWord('Moring', 'Buoi sang', false)
            ],
            filterStatus: 'SHOW_FORGOT'
        };
        this.addWord = this.addWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
        this.toggleMemorized = this.toggleMemorized.bind(this);
        this.changeFilterStatus = this.changeFilterStatus.bind(this);
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

    toggleMemorized(en) {
        this.setState(prevState => {
            const newArrWords = prevState.arrWords.map((e, i) => {
                if (e.en !== en) return e;
                return { ...e, memorized: !e.memorized };
            });
            return { arrWords: newArrWords };
        });
    }

    changeFilterStatus(newStatus) {
        this.setState({ filterStatus: newStatus });
    }

    render() {
        const { arrWords, filterStatus } = this.state;
        const arrWordsFiltered = arrWords.filter(e => {
            if(filterStatus === 'SHOW_MEMORIZED') return e.memorized;
            if(filterStatus === 'SHOW_FORGOT') return !e.memorized;
            return true;
        });
        return (
            <div>
                {/* <WordForm onAddWord={this.addWord} /> */}
                <WordFilter 
                    filterStatus={filterStatus}
                    onChangeFilterStatus={this.changeFilterStatus} 
                />
                { arrWordsFiltered.map((e, i) => (
                    <Word 
                        en={e.en} 
                        vn={e.vn} 
                        memorized={e.memorized}
                        key={e.en} 
                        index={i}
                        onRemoveWord={this.removeWord}
                        onToggleMemorized={this.toggleMemorized}
                    />
                ))}
            </div>
        );
    }
}