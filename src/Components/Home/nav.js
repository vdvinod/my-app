import React from "react";
import {Link} from 'react-router-dom'
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {isSignin : true};
    this.changeSwitch = this.changeSwitch.bind(this);
  }
  changeSwitch(event){
    this.setState({isSignin : !this.state.isSignin});
  }
    render (){
        return <div className="main-nav">

        <ul>
        
          <li></li>
          <li></li>
          <li></li>
          <li><Link className={this.state.isSignin?"signInUp fadeIn":"signInUp fadeOut"} style={{display:this.state.isSignin ? "inline-block":"none"}} onClick={this.changeSwitch} to={"/signIn"}>Sign In</Link><Link className={this.state.isSignin?"signInUp fadeOut":"signInUp fadeIn"}style={{display:this.state.isSignin ? "none":"inline-block"}} to={"/signUp"} onClick={this.changeSwitch}>Sign Up</Link></li>
        
        </ul>
      </div>
    }
}

export default Nav;
