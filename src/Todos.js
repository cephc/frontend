import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const x = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date();
const date1 = new Intl.DateTimeFormat('en-US', x);

class Todos extends Component {
    render() {
        return(
            <Table dark>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Target Date</th>
                    <th>Finished?</th>
                    <th>Utils </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Take out trash</th>
                    <td>{date1.format(date)}</td>
                    <td>false</td>
                    <td>
                        <button className={"btn btn-secondary mr-1"}>Delete</button>
                        <button className={"btn btn-secondary mr-1"}>Update</button>
                    </td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

const btnStyle = {
    background: '#808080',
    color: 'rgb(255,255,255)',
    border: 'solid black'
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default Todos;
