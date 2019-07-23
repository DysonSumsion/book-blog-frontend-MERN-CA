import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
  checkToken() {
    const token = window.localStorage.getItem("token");
    if(!token) { 
      return <Redirect to='/adminjaclyn' />
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}/private/secrets`,{headers:{'token':token}})
      .then((res) => {
          return <h1>My Dashboard</h1>
      }).catch(err => {
        console.log(err);
        console.log("Invalid token. Will be redirected to login page");
        return <Redirect to='/adminjaclyn' />;
      }); 
    }
  }

  render() {
    return <>{this.checkToken()}</>
  }
}
export default Dashboard;

