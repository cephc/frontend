import React from 'react';
import LinkButton from "./utils/LinkButton";
import Api from './utils/Api';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card } from "shards-react";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
        this.state = {role: ''};
        this.state = {password: ''};
        this.state = {message: ''};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // Get the data from the form to send to the database
        const user = {
            username: this.state.username,
            role: this.state.role,
            password: this.state.password,
            message: this.state.message
        };

        // send the data to the database
        Api.post("/users", user).then(() => {
            this.setState({message: "Profile created successfully! You may now sign in."});
        }).catch(() => {
            this.setState({message: "It looks like there was an error creating your profile, please try again later."});
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth: "1000px"}}>
                <h5 className="card-header text-center"> Create an account! Please enter your information
                    below to get started.</h5>
                <div className="card-body">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username || ''} onChange={this.handleChange}/>
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col">
                              <select name={"role"} className={"form-control"} value={this.state.role || ''} onChange={this.handleChange}>
                                          <option value={''}>Choose...Privileges</option>
                                          <option value={"admin"}>Admin</option>
                                          <option value={"user"}>User</option>

                                 </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password || ''} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary mr-1" type="submit">Register</button>
                            <LinkButton className="btn btn-secondary ml-1" to={'/signin'}>Cancel</LinkButton>
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
