import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                <Route exact path="/" component={About}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
