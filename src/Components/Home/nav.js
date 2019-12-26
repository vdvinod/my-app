import React from "react";
import {Link} from 'react-router-dom';
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {isSignin : true};
    this.changeSwitch = this.changeSwitch.bind(this);
    this.AuthData = this.props.authData;
    
  }
  changeSwitch(event){
    this.setState({isSignin : !this.state.isSignin});
  }
  logOut = ()=>{
    this.setState({isSignin : true});
    this.props.authData.isAuth = false;
    localStorage.setItem("AuthData","");
  }
    render (){
      
        return <div className="main-nav">
        
        <ul>
        
          <li>{this.props.authData.isAuth && <div className="brand-name">{this.props.authData.firstName}</div>}</li>
          <li></li>
          <li></li>
          {this.props.authData.isAuth ? 
          <li style={{textAlign:'right'}}>
            <Link className="signInUp" style={{display:"inline-block"}} to={`/signIn`} onClick={this.logOut}>Log out</Link> </li>
          :
          <li style={{textAlign:'right'}}><Link className={this.state.isSignin?"signInUp fadeIn":"signInUp fadeOut"} style={{display:this.state.isSignin ? "inline-block":"none"}} onClick={this.changeSwitch} to={`/signIn`}>Sign In</Link><Link className={this.state.isSignin?"signInUp fadeOut":"signInUp fadeIn"}style={{display:this.state.isSignin ? "none":"inline-block"}} to={`/signUp`} onClick={this.changeSwitch}>Sign Up</Link>
          </li>}
        </ul>
      </div>
    }
}

export default Nav;
