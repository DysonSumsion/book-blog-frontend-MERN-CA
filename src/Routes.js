import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';

class Routes extends React.Component {

render() {
  console.log('routes rendering')
  const { data } = this.props
  console.log(data)

  return (
    <Switch>
      <Route path="/home" exact component={Homepage} />


    </Switch>
  )
  }
}

export default Routes;