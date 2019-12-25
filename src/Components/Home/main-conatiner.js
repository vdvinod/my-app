import React from "react";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";
import Comments from "./comment.js";
import {Route,Link} from 'react-router-dom';
import CommentList from './commentlist';
//import List from "./list.js";
class MainConatiner extends React.Component { 
    constructor(props){
        super(props);
        this.state={};
        this.state.commentList=[];
    }
    addCommentList = (value)=>{
        this.state.commentList.push(value);
        this.setState({
            commentList:this.state.commentList
        });
    }
    render() {
        return <div><section className="main-container" align="center">

                <Route path = "/signIn" render={(props) => <SignIn {...props}  checkIsAuth={this.props.checkIsAuth}/>} />
                 <Route path = "/signUp" component = {SignUp} />

        </section>
        <section className="post-comment-container">
             <Route path = "/comment" render={(props) => <Comments {...props}  addCommentList={this.addCommentList}/>} />
             <CommentList commentList={this.state.commentList}/>
        </section>
        </div>
    }
}

export default MainConatiner;
