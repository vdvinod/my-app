import React from "react";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";
import {Route,Link} from 'react-router-dom'
//import List from "./list.js";
class MainConatiner extends React.Component {
    render() {
        return <section className="main-container" align="center">

                <Route path = "/signIn" component = {SignIn} />
                 <Route path = "/signUp" component = {SignUp} />
            {/* <div className="top-box top-box-a">
                 <h4 style={{display : this.state.userList.length ? "block" : "none"}}>List</h4>
                <List userList={this.state.userList}/>
            </div> */}
        </section>
        
    }
}

export default MainConatiner;
