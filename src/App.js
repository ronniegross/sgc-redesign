import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import FirstTimeJumpers from './components/FirstTimeJumpers.js'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/firsttimejumpers" component={FirstTimeJumpers}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
