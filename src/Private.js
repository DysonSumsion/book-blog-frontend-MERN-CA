import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminShowPage from './container/AdminShowPage';
import ResetPassword from './container/ResetPassword';
import AdminAddReview from './container/AdminAddReview'

class Private extends React.Component {

render() {
  return (
    <Switch>
      <Route path="/auth/adminaddreview" exact render={(props) => {
        return <AdminAddReview {...props} />
      }} />
      <Route path="/auth/adminshow" exact render={(props) => {
        return <AdminShowPage {...props} />
      }} />
      {/* <Route path="/auth/ForgotPassword" exact component={ForgotPassword}/> */}
      <Route path="/auth/ResetPassword" exact component={ResetPassword}/>
    </Switch>
  )
  }
}

export default Private;