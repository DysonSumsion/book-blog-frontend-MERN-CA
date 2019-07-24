import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormAdd from './container/FormAdd';
import ForgotPassword from './container/ForgotPassword';
import AdminShowPage from './container/AdminShowPage';
import Dashboard from './components/Dashboard';
import ResetPassword from './container/ResetPassword';

class Private extends React.Component {

render() {
  return (
    <Switch>
      <Route path="/auth/adminaddreview" exact render={(props) => {
        return <FormAdd {...props} />
      }} />
      <Route path="/auth/adminshow" exact render={(props) => {
        return <AdminShowPage {...props} />
      }} />
      <Route path="/auth/ForgotPassword" exact component={ForgotPassword}/>
      <Route path="/auth/Dashboard" exact component={Dashboard}/>
      <Route path="/auth/ResetPassword" exact component={ResetPassword}/>
    </Switch>
  )
  }
}

export default Private;