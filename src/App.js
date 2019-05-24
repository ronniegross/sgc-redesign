import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import FirstTimeJumpers from './components/FirstTimeJumpers.js'
import Header from './components/Header.js'
import ExperiencedJumpers from './components/ExperiencedJumpers.js'
import FAQs from './components/FAQ.js'
import Footer from './components/Footer.js'
import Pricing from './components/Pricing.js'
// import QuestionAnswerModal from './components/QuestionAnswerModal.js'


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header />
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/firsttimejumpers" component={FirstTimeJumpers} />
                        <Route path="/experiencedjumpers" component={ExperiencedJumpers} />
                        <Route path="/FAQs" component={FAQs} />
                        <Route path="/pricing" component={Pricing} />
                    </Switch>
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;
