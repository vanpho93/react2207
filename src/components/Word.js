import React, { Component } from 'react';
// dummies component 

// const Word = ({ en, vn }) => (
//     <div>
//         <h3>{en}</h3>
//         <p>{vn}</p>
//     </div>
// ); 

class Word extends Component {
    render() {
        //Lay props ntn?
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
