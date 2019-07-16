import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './container/HomePage';
import ShowPage from './container/ShowPage';
import TopPicks from './container/TopPicks';
import SortByYear from './container/SortByYear';
import SortByGenre from './container/SortByGenre';
import AboutMe from './container/AboutMe';
import Subscribe from './container/Subscribe';
import Admin from './container/Admin';
import FormAdd from './container/FormAdd'
import ForgotPassword from './container/ForgotPassword'

class Routes extends React.Component {

render() {
  console.log('routes rendering')
  const { data } = this.props
  console.log(data)

  return (
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/show" exact component={ShowPage} />
      <Route path="/toppicks" exact component={TopPicks} />
      <Route path="/sortbyyear" exact component={SortByYear} />
      <Route path="/sortbygenre" exact component={SortByGenre} />
      <Route path="/aboutme" exact component={AboutMe} />
      <Route path="/subscribe" exact component={Subscribe} />
      <Route path="/adminjaclyn" exact component={Admin} />
      <Route path="/addreview" exact component={FormAdd} />
      <Route path="/subscribe" exact component={Subscribe}/>
      <Route path="/ForgotPassword" exact component={ForgotPassword}/>
    </Switch>
  )
  }
}

export default Routes;