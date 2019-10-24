import React from 'react';
import './styles.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className="App">
          <Navbar/>
            <Router>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route strict path="/search">
                    {/*Search Page*/}
                </Route>
            </Router>
        </div>
    )
  }
}

export default App;
