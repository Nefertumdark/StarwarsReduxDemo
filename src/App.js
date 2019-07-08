import React from 'react';
import ListCategories from './Components/ListCategories.js';
import SearchSection from './Components/SearchSection.js';
import ResultSection from './Components/ResultSection.js';	

class App extends React.Component {

  render(){
      return (
      <div className="App">
        <div><ListCategories /></div>
        <div><SearchSection /></div>
        <div><ResultSection /></div>
      </div>
    );
  }
}

export default App;
