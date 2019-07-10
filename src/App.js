import React from 'react';
import ListCategories from './Components/ListCategories.js';
import SearchSection from './Components/SearchSection.js';
import ResultSection from './Components/ResultSection.js';	
import {BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
      return (
      <div className="App">
       <BrowserRouter>
            <Route path="/" exact component={ListCategories}/>
            <Route path="/search" exact component={SearchSection}/>
            <Route path="/detail" exact component={ResultSection}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
