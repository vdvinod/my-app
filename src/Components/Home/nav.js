import React from "react";

class Nav extends React.Component {
   
    gotoSignInForm = ()=>{
      this.props.showForms("SignIn");
    }
    gotoSignUpForm = ()=> {
      this.props.showForms("SignUp");
    }
    render (){
        return <div className="main-nav">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li><a href="#" onClick={this.gotoSignInForm}>Sign In</a>/<a href="#" onClick={this.gotoSignUpForm}>Sign Up</a></li>
        </ul>
      </div>
    }
}

export default Nav;
