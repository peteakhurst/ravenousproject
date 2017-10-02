import React from 'react';
import './App.css';
import BusinessList from './components//BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
//import logo from './logo.svg';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          //Add SearchBar component here
            <SearchBar / >
          // Add BusinessList component here
            <BusinessList />
      </div>
    );
  }
}

export default App;
