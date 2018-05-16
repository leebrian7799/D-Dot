import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import FrontPageContainer from './front_page/front_page_container';
import FeedContainer from './feed/feed_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div className="app">
     <Route path='/' component={NavBarContainer}/>
     <Switch>
       <ProtectedRoute exact path='/feed' component={FeedContainer} />
       <Route exact path="/" component={FrontPageContainer} />
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute exact path="/signup" component={SessionFormContainer} />
      </Switch>
   </div>
);

export default App;
