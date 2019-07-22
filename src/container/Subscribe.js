import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
// import IntroSection from '../components/IntroSection';

class Subscribe extends React.Component {
  state = {
      name: "",
      email: "",
      confirmEmail: ""
  }

  handleInput = e => {
    console.log(e);
    e.preventDefault();
    //let errors = this.state.errors
    let value = e.target.value;
    let name = e.target.name;
    if(name === 'name') {
      this.setState( {name : value});
    } else if (name === 'email') {
      this.setState( {email : value});
    } else if (name === 'confirmEmail') {
      this.setState( {confirmEmail : value});
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
    console.log(this.state)
  }

  render() {

    return (
      <>
      <div className="IntroSection">
      <form className="form-add" onSubmit={this.handleFormSubmit}>
          <FormInput
            inputType={"text"}
            title={"Name"}
            name={"name"}
            value={this.state.name}
            placeholder={"Enter name"}
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
          <FormInput
            inputType={"text"}
            title={"Confirm Email"}
            name={"confirmEmail"}
            value={this.state.confirmEmail}
            placeholder={"Confirm Email"}
            handleChange={this.handleInput}
          />{" "}
          {/* Clear the form */}
          <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
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