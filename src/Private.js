import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormAdd from './container/FormAdd';
import ForgotPassword from './container/ForgotPassword';
import AdminShowPage from './container/AdminShowPage';
import AdminAddReview from './container/AdminAddReview';
import Dashboard from './components/Dashboard';
import ResetPassword from './container/ResetPassword';

class Private extends React.Component {

render() {
  // console.log('routes rendering')
  // const data  = this.props
  // console.log(data)

  return (
    <Switch>
      <Route path="/auth/adminaddreview" exact component={AdminAddReview} />
      <Route path="/auth/adminshow" exact component={AdminShowPage}/>
      <Route path="/auth/ForgotPassword" exact component={ForgotPassword}/>
      <Route path="/auth/Dashboard" exact component={Dashboard}/>
      <Route path="/auth/ResetPassword" exact component={ResetPassword}/>
    </Switch>
  )
  }
}

export default Private;