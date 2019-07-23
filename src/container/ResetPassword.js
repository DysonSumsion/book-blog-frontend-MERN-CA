import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class ResetPassword extends React.Component {

  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      message:"This page is only available for 10 minutes",
      pageContent:""
    }
  }
  
  checkPageValidity() {
    const resetToken = window.localStorage.getItem("resetToken");
    console.log("reset Token is =>    "+resetToken);
    axios.get(`${process.env.REACT_APP_API_URL}/private/secrets`,{headers:{'token':resetToken}}).then(res => {
      console.log(res.data);
      this.setState({pageContent: <>
                <div>
          <h1>Reset Password</h1>
        <form className="form-add" onSubmit={this.handleFormSubmit}>
            <FormInput
              inputType={"text"}
              title={"Email"}
              name={"email"}
              value={this.state.email}
              placeholder={"Email"}
              handleChange={this.handleInput}
            />{" "}
            <FormInput
              inputType={"password"}
              title={"Password"}
              name={"password"}
              placeholder={"Enter password"}
              handleChange={this.handleInput}
            />{" "}
            <FormInput
              inputType={"password"}
              title={"Confirm Password"}
              name={"confirmPassword"}
              placeholder={"confirm password"}
              handleChange={this.handleInput}
            />{" "}
            {/* Clear the form */}
            <h4>{this.state.message}</h4>
            <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
          />{" "}
          
          {/*Submit */}
          </form>
    
        </div>
        </>});
  }).catch(err => {
      console.log(err);
      alert("Password reset link is invalid. Redirecting to login page");
      this.setState({pageContent:<Redirect to="/adminjaclyn"/>});
    });
  }
  
  handleInput = e => {
    console.log(e.target.name);
    e.preventDefault();
    //let errors = this.state.errors
    let value = e.target.value;
    let name = e.target.name;
    if(name === 'email') {
      this.setState( {email : value});
    } else if (name === 'password') {
      this.setState( {password : value});
    } else if (name === 'confirmPassword') {
      this.setState( {confirmPassword : value});
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    if(password !== confirmPassword) {
      this.setState({message:"Passwords don't match."})
    } else {
      this.setState({message:""})
      const resetToken = window.localStorage.getItem("resetToken");
      axios.get(`${process.env.REACT_APP_API_URL}/private/secrets`,{headers:{'token':resetToken}})
      .then((res) => {
          console.log("Rest token is valid. changine password and logging in");
          axios.post(`${process.env.REACT_APP_API_URL}/auth/forgotpass`, {
            email:email,
            newPassword:password,
          })
          .then((res) => {
            const returnedToken = res.data.token 
            window.localStorage.setItem("token", returnedToken);
            window.location.href = "/Dashboard";
          })
          .catch((err) => {
            console.log(err)
          })
        }).catch(err => {
        alert("Reset token is invalid. Will be redirected to login page");
        this.setState({pageContent:<Redirect to="/adminjaclyn"/>});
      }); 
    }
  }
  
  render() {
    this.checkPageValidity();
    return(
      <div>
        {this.state.pageContent}
      </div >)
  }
}

export default ResetPassword;
