import React from 'react';
import Nav from '../Home/nav.js';
import Main from '../Home/main-conatiner.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isSignIn:true
    }
  };
  showForms = formName =>{
    this.setState({
      isSignIn:formName === "SignIn" ? true : false
    });
  };
  render (){
    return <div className="wrapper">
      <Nav showForms={this.showForms}/>
      <Main isSignIn={this.state.isSignIn}/>
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
