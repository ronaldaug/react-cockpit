import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/pages/dashboard';
import Footer from './components/footer';
import Notfound from './components/pages/notFound';
import {checkAuth} from './services/token';
import Navbar from './components/navbar';

function App () {
  const location = useLocation();
  const history = useHistory();
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(() => {
    (async()=>{
      const {auth} = await checkAuth();
      setIsLoggedIn(auth);

      if (auth && location.pathname !== '/dashboard' && location.pathname !== '/quiz/new' && location.pathname === '/') {
        // redirect to dashboard
        history.push('/dashboard');
      }
      if(!auth && location.pathname !== '/' && location.pathname !== '/register') {
        // redirect to home page
        history.push('/');
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div>
      {isLoggedIn && (<Navbar />)}
      <Switch>
        <Route path="/register" exact component={Register}/>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route>
          <Notfound />
        </Route>
      </Switch>
      {isLoggedIn && (<Footer />)}
    </div>
  );
}

export default App;
