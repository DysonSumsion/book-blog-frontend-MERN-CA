import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import IntroSectionFlexi from '../components/IntroSectionFlexi';
import axios from 'axios';

class Subscribe extends React.Component {
  state = {
      firstName: "",
      lastName: "",
      email: "",
      invalidEmail:"",
      invalidFirstName:"",
      invalidLastName:""
  }

  handleInput = e => {
    console.log(e);
    e.preventDefault();
    //let errors = this.state.errors
    let source = e.target.name;
    let value = e.target.value;
    if(source === 'firstName') {
      this.setState( {firstName : value});
      this.setState({invalidFirstName:""});
    } else if (source === 'lastName') {
      this.setState( {lastName : value});
      this.setState({invalidLastName:""});
    } else if (source === 'email') {
      this.setState( {email : value});
      this.setState({invalidEmail:""});
    }
  };

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
        name: "",
        email: "",
        confirmEmail: ""
    });
  }
  validateInput = () => {
    const re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailValidity = re1.test(this.state.email);
    if(!emailValidity) {
      this.setState({invalidEmail:"Enter a valid email address"});
    }
    const re2 = /^([a-zA-Z]+)$/
    let firstNameValidity = re2.test(this.state.firstName)
    if(!firstNameValidity) {
      this.setState({invalidFirstName:"Enter a valid name"});
    }
    let lastNameValidity = re2.test(this.state.lastName);
    if(!lastNameValidity) {
      this.setState({invalidLastName:"Enter a valid name"});
    }
    return emailValidity&&lastNameValidity&&firstNameValidity;
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      const formData = {firstName:this.state.firstName, lastName:this.state.lastName,email:this.state.email};

      axios
        .post(`${process.env.REACT_APP_API_URL}/signup`, formData)
        .then(res => {
          alert("Successfully Subscribed");
          window.location.href="/home"
        })
        .catch(err => {
          console.log(err.message);
        });

    }
  }

  render() {
    console.log(this.state.email)

    return (
      <>
      <div className="containerSecondary" style={{ backgroundColor: '#F8EE97'}}>
        <IntroSectionFlexi
          headingOne="Want to join my newsletter?"
          headingTwo="Recieve a monthly email with highlights from the month. No spam, I promise! " />
      <form>
          <FormInput
            inputType={"text"}
            title={"First Name"}
            name={"firstName"}
            value={this.state.firstName}
            placeholder={"Enter first name"}
            handleChange={this.handleInput}
          />{this.state.invalidFirstName}
          <FormInput
            inputType={"text"}
            title={"Last Name"}
            name={"lastName"}
            value={this.state.lastName}
            placeholder={"Enter last name"}
            handleChange={this.handleInput}
          />{this.state.invalidLastName}

          <FormInput
            inputType={"email"}
            title={"Email"}
            name={"email"}
            value={this.state.email}
            placeholder={"Enter email"}
            handleChange={this.handleInput}
          />{this.state.invalidEmail}
          {/* Clear the form */}
          <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Subscribe"}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
        />{" "}
        </form>
        </div>
      </>
    );
  } 
}

export default Subscribe;