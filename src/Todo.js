import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>this.props.description</td>
                <td>this.props.targetDate</td>
                <td>this.props.isDone</td>
            </tr>
        );
    }
}
