import React from "react";
import {Link} from 'react-router-dom'
class Nav extends React.Component {
    render (){
        return <div className="main-nav">

        <ul>
        
          <li></li>
          <li></li>
          <li></li>
          <li><Link className="signInUp" to={"/signIn"}>Sign In</Link><Link className="signInUp" to={"/signUp"}>Sign Up</Link></li>
        
        </ul>
      </div>
    }
}

export default Nav;
