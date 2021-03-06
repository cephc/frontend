import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";
import LinkButton from "./utils/LinkButton";

export default class EditToDo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            description:'',
            targetDate:'',
            isDone:''
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {

    const todo = {
            username:this.state.username,
            description:this.state.description,
            targetDate:this.state.targetDate,
            isDone:this.state.isDone,
            status:this.state.status
            };

         Api.put("/users/{username}/todos", todo).then(() => {
             this.setState({message: "Task Edited Successfully"});
         }).catch(() => {
             this.setState({message: "It looks like there was an error editing this Task, please try again later."});
         });

        event.preventDefault();
    }

    render() {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth: "1000px"}}>
                <h5 className="card-header text-center">Please edit to-do details below.</h5>
                <div className="card-body">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>User Name</label>
                                <input type="text" name="username" className="form-control" value={this.state.username || ''} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col">
                                <label>Description</label>
                                <input type="text" name="description" className="form-control" value={this.state.description || ''} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Target Date</label>
                            <input type="text" name="targetDate" className="form-control" value={this.state.targetDate || ''} onChange={this.handleChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <select name={"isDone"} className={"form-control"} value={this.state.isDone || ''} onChange={this.handleChange}>
                                    <option value={''}>Choose...Status</option>
                                    <option value={"Active"}>Active</option>
                                    <option value={"Cancelled"}>Cancelled</option>
                                    <option value={"Completed"}>Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary mr-1" type="submit">Submit</button>
                            <LinkButton className="btn btn-secondary ml-1" to={"/users/{username}/todos"}>Cancel</LinkButton>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    {this.state.message}
                </div>
            </Card>
        );
    }
}
