import React, { Component } from 'react';
import Word from './Word';

class NewWord {
    constructor(en, vn) {
        this.en = en;
        this.vn = vn;
    }
}

const arrWords = [
    new NewWord('Hello', 'Xin chao'),
    new NewWord('Good bye!', 'Tam biet'),
    new NewWord('Moring', 'Buoi sang')
];

export default class List extends Component {
    render() {
        return (
            <div>
                { arrWords.map(e => <Word en={e.en} vn={e.vn} key={e.en} />) }
            </div>
        );
    }
}