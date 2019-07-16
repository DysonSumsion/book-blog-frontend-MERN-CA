import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom'
class Admin extends React.Component {
  state = {
    admin: {
      email: "",
      password: "",
      forgotPassword: ""
    }
  }

  handleClearForm = (e) => {
    e.preventDefault();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.admin;
    console.log(userData)
  }

  render() {

    return (
      <>
      <div>
      <form className="form-add" onSubmit={this.handleFormSubmit}>
          <FormInput
            inputType={"text"}
            title={"Email"}
            name={"title"}
            value={this.state.admin.title}
            placeholder={"Email"}
            handleChange={this.handleInput}
          />{" "}
          <FormInput
            inputType={"password"}
            title={"Password"}
            name={"author"}
            value={this.state.admin.author}
            placeholder={"Enter author name"}
            handleChange={this.handleInput}
          />{" "}
          {/* Clear the form */}
          <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        <Link to="/google.com">Forgot Password</Link>
        {/*Submit */}
        </form>
  
      </div>
      
      </>
     
    );
  } 
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default Admin;














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


















// import React from 'react';
// import IntroSection from '../components/IntroSection';

// function Admin() {

//   return (
//     <>
//     <div>
//       <IntroSection 
//         headingOne="Admin page" 
//       />
//     </div>
//     </>
//   );
// }

// export default Admin;