import React from 'react';
import './styles.css';
import HomePageContainer from '../containers/HomePageContainer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App(props) {
    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    <HomePageContainer/>
                </Route>
                <Route strict path="/search">
                    <SearchPage/>
                </Route>
            </Router>
        </div>
    )
}

export default App;
