import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import IntroSectionFlexi from '../components/IntroSectionFlexi';
import axios from 'axios';

class Subscribe extends React.Component {
  state = {
      firstName: "",
      lastName: "",
      email: ""
  }

  handleInput = e => {
    console.log(e);
    e.preventDefault();
    //let errors = this.state.errors
    let source = e.target.name;
    let value = e.target.value;
    if(source === 'firstName') {
      this.setState( {firstName : value});
    } else if (source === 'lastName') {
      this.setState( {lastName : value});
    } else if (source === 'email') {
      this.setState( {email : value});
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

  handleFormSubmit = (e) => {
    e.preventDefault();
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
    console.log(this.state)
  }

  render() {

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
          />{" "}
          <FormInput
            inputType={"text"}
            title={"Last Name"}
            name={"lastName"}
            value={this.state.lastName}
            placeholder={"Enter last name"}
            handleChange={this.handleInput}
          />{" "}

          <FormInput
            inputType={"text"}
            title={"Email"}
            name={"email"}
            value={this.state.email}
            placeholder={"Enter email"}
            handleChange={this.handleInput}
          />{" "}
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