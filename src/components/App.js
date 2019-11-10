import React from 'react';
import './styles.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App(props) {
    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route strict path="/search">
                    <SearchPage/>
                </Route>
            </Router>
        </div>
    )
}

export default App;
