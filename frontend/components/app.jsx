import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import FrontPageContainer from './front_page/front_page_container';
import {AuthRoute} from '../util/route_util'
const App = () => (
    <div className="app">
     <Switch>
       <Route exact path="/" component={FrontPageContainer} />
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute exact path="/signup" component={SessionFormContainer} />
      </Switch>
   </div>
);

export default App;
