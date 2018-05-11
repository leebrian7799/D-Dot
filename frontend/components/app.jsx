import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import FrontPageContainer from './front_page/front_page_container';
const App = () => (
  <div>
     <header>
       <NavBarContainer />
     </header>

     <Switch>
       <Route exact path="/" component={FrontPageContainer} />
       <Route path="/login" component={SessionFormContainer} />
       <Route exact path="/signup" component={SessionFormContainer} />
      </Switch>
   </div>
);

export default App;
