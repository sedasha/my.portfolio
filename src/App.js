import React, { Component } from 'react';
import './App.css';
import './Media.css';
import Contain from './components/Contain/Contain';
import Header from './components/Header/Header';
import SingleBlog from './components/Mini_comp/SingleBlog';



class App extends Component {
  state = {  }
  render() {
    return (
      <div className="App">
        <Header />
        <Contain />
      </div>
      
    );
  }
}

export default App;

