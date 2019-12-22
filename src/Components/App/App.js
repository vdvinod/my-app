import React from 'react';
import Nav from '../Home/nav.js';
import Main from '../Home/main-conatiner.js';
import './App.css';

class App extends React.Component {
  render (){
    return <div className="wrapper">
      <Nav/>
      <Main/>
      <section className="boxes">

      </section>
      <section>

      </section>
      <footer>

      </footer>
    </div>
  }
  
}


export default App;
