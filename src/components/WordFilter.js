import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        const { onChangeFilterStatus, filterStatus } = this.props;
        const activeStyle = { backgroundColor: 'green', color: 'white' };
        const getStyle = (buttonStatus) => {
            const style = buttonStatus === filterStatus ? activeStyle : null;
            return style;
        };

        const MyButton = ({ status }) => (
            <button
                onClick={() => onChangeFilterStatus(status)}
                style={getStyle(status)}
            >
                {status.replace('_', ' ')}
            </button>
        );

        return (
            <div>
                <MyButton status="SHOW_ALL" />
                <MyButton status="SHOW_MEMORIZED" />
                <MyButton status="SHOW_FORGOT" />
            </div>
        );
    }
}