import React from "react";
import { Component } from "react";
class FormHandel extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            firstName: '',
            lastName: '',
            pass: '',
            Gender: '',
            ConfirmedPass: '',

        })

    }
    handelChanges = (event) => {
        // console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmiting = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            pass: '',
            Gender: '',
            ConfirmedPass: '',
        })
    }
    render() {
        const { firstName, lastName, pass, ConfirmedPass, Gender } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmiting}>
                    <div>
                        <label>enterYourFirstName</label>
                        <input type="text" name="firstName" value={firstName} onChange={this.handelChanges} />
                    </div>
                    <div>
                        <label>enterYourLastName</label>
                        <input id="inp" type="text" name="lastName" value={lastName} onChange={this.handelChanges} />
                    </div>
                    <label>enterYourPassWord</label>
                    <input type="password" name="pass" value={pass} onChange={this.handelChanges} />
                    <div>
                    </div>
                    <label>enterYourConfirmedPassWord</label>
                    <input type="password" name="ConfirmedPass" value={ConfirmedPass} onChange={this.handelChanges} />
                    <div>
                        <label >Gender</label>
                        <select value={Gender} onChange={this.handelChanges} name="Gender">
                            <option></option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
//----------------------------------------------SIGNUP-FORM--------------------------------
class SignUp extends Component {
    constructor() {
        super();
        this.state = ({
            firstName: '',
            pass: ''
        })
    }
    handelChanges = (event) => {
        // console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmiting = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            firstName: '',
            pass: '',
        })
    }
    render() {
        const { fisrtName, pass } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmiting}>
                    <div>
                        <label>enterYourFirstName</label>
                        <input type="text" name="firstName" value={fisrtName} onChange={this.handelChanges} />
                    </div>
                    <div>
                        <label>enterYourPassWord</label>
                        <input type="password" name="pass" value={pass} onChange={this.handelChanges} />
                    </div>
                    <button type="submit">subnit</button>
                </form>
            </div>
        )
    }
}
// -------------------------------------Task02-APP---------------------------------------------
class Task02 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isSignup: false,
        })
    }
    handleSignup = (username, password) => {
        this.setState({ isSignedUp: true });
    };
    render() {
        return (
            <div>
                {(this.state.isSignup) ? (<FormHandel />) : (<SignUp handleSignup={this.handleSignup} />)}
            </div>
        )
    }
}
export default Task02;