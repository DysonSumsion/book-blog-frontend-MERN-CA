import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import axios from 'axios';


class ForgotPassword extends React.Component {
  state = {
    forgotPassword: {
      enterEmail: ""
    },
    checkmail: ""
  }

  handleInput = e => {
    e.preventDefault();
    //  let errors = this.state.errors
    let value = e.target.value;
      this.setState( {forgotPassword : {
        enterEmail: value
      }});
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const email = this.state.forgotPassword.enterEmail;
    console.log(email);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot`, {
      email:email,
    })
    .then((res) => {
      console.log(res.data.token)  
      const returnedToken = res.data.token   
      window.localStorage.setItem("resetToken", returnedToken);
      this.setState( {checkmail : "Check your email. The link is valid for 10 minutes."})
    })
    .catch((err) => {
      console.log(err)
    })
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
            value={this.state.forgotPassword.title}
            placeholder={"Enter your email"}
            handleChange={this.handleInput}
          />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />{" "}
        <h4>{this.state.checkmail}</h4>
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