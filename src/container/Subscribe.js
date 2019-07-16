import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

class Subscribe extends React.Component {
  state = {
    newSubscribe: {
      name: "",
      email: "",
      confirmEmail: ""
    }
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newSubscribe: {
        name: "",
        email: "",
        confirmEmail: ""
      }
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newSubscribe;
    console.log(userData)
  }

  render() {

    return (
      <>
      <div>
      <form className="form-add" onSubmit={this.handleFormSubmit}>
          <FormInput
            inputType={"text"}
            title={"Name"}
            name={"title"}
            value={this.state.newSubscribe.title}
            placeholder={"Enter book name"}
            handleChange={this.handleInput}
          />{" "}
          <FormInput
            inputType={"text"}
            title={"Email"}
            name={"author"}
            value={this.state.newSubscribe.author}
            placeholder={"Enter author name"}
            handleChange={this.handleInput}
          />{" "}
          <FormInput
            inputType={"text"}
            title={"Confirm Email"}
            name={"author"}
            value={this.state.newSubscribe.author}
            placeholder={"Enter author name"}
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














// import React from 'react';
// import IntroSection from '../components/IntroSection';

// function Subscribe() {

//   return (
//     <>
//     <div>
//       <IntroSection 
//         headingOne="Subscribe page" 
//       />
//     </div>
//     </>
//   );
// }

// export default Subscribe;