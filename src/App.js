import React, { Component, Fragment } from 'react';
// import LibraryForm from './components/LibraryForm'; 

import Main from './components/Main'

import Checkout from './components/Checkout/Checkout'

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <LibraryForm /> */}
//       <HomePage />

//       {/* <Checkout /> */}
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Fragment>
        <Main />
        {/* <Checkout /> */}
      </Fragment>
    );
  }
}

export default App;
