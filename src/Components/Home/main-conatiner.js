import React from "react";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";
import {Route} from 'react-router-dom';
import CommentPost from "./commentPostComponent.js";
class MainConatiner extends React.Component { 
    render() {
        return (
            <div><section className="main-container" align="center">
                <Route exact path="/" render={(props) => <SignIn {...props} checkIsAuth={this.props.checkIsAuth} />} />
                <Route path="/signIn" render={(props) => <SignIn {...props} checkIsAuth={this.props.checkIsAuth} />} />
                <Route path="/signUp" component={SignUp} />
            </section>
                <section className="post-comment-container">
                    <Route path="/commentPost" component={CommentPost} />
                </section>
            </div>
            )
    }
}
export default MainConatiner;