import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import Signup from './components/signup';
// import Login from './components/login';
// import About from './components/about';
// import Team from './components/team';

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={App} />
            {/* <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={About} />
            <Route path='/team' component={Team} /> */}
        </div>
    </Router>
);

ReactDOM.render(
    routing,
    document.getElementById('root')
);