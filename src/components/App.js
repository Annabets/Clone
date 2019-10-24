import React from 'react';
import './styles.css';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className="App">
          <Navbar/>
        </div>
    )
  }
}

export default App;
