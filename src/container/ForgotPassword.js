import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

class ForgotPassword extends React.Component {
  state = {
    newSubscribe: {
      confirmEmail: ""
    }
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newSubscribe: {
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
            title={"Forgot Password"}
            name={"title"}
            value={this.state.newSubscribe.title}
            placeholder={"Enter your email"}
            handleChange={this.handleInput}
          />{" "}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Submit"}
        />{" "}
        </form>
  
      </div>
      
      </>
     
    );
  } 
}
export default ForgotPassword;














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