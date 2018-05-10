import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
     <switch>
       <Route path="/" component={NavBarContainer} />
       <Route path="/login" component={SessionFormContainer} />
       <Route path="/signup" component={SessionFormContainer} />
     </switch>
   </div>
);

export default App;
