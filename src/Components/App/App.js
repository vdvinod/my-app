import React from 'react';
import Nav from '../Home/nav.js';
import Main from '../Home/main-conatiner.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    
    if(localStorage.getItem("AuthData")){
      this.state.AuthData=JSON.parse(localStorage.getItem("AuthData"));
    }else{
      this.state.AuthData={isAuth:false};
    }
  }
  checkIsAuth = (val)=>{
    console.log(val);
    if(val){
      this.setState({
        AuthData:JSON.parse(localStorage.getItem("AuthData"))
      })
    }
  }
  render (){
    return <div className="wrapper">
      <Nav authData={this.state.AuthData}/>
      <Main checkIsAuth={this.checkIsAuth}/>
                

      {/* <section className="boxes">

      </section>
      <section>

      </section>
      <footer>

      </footer> */}
    </div>
  }
  
}


export default App;
