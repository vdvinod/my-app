import React from 'react';
import Nav from './Components/Home/nav.js';
import Main from './Components/Home/main-conatiner.js';
import './App.css';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {};
    
  //   if(localStorage.getItem("AuthData")){
  //     this.state.AuthData=JSON.parse(localStorage.getItem("AuthData"));
  //   }else{
  //     this.state.AuthData={isAuth:false};
  //   }
  // }
  // checkIsAuth = (val)=>{
  //   console.log(val);
  //   if(val){
  //     this.setState({
  //       AuthData:JSON.parse(localStorage.getItem("AuthData"))
  //     })
  //   }
  // }
  render (){
    return <Main>
        <AuthContainer></AuthContainer>
        <PostContainer></PostContainer>
    </Main>
  }
  
}


export default App;
