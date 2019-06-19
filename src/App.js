import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Notifications from './components/dashboard/Notifications';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreatePojects';
import Profile from './components/auth/Profile';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/mp' component={Notifications} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/new' component={CreateProject} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
