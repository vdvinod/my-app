import React from "react";
import Comment from "./comment.js";
import Post from "./post.js";

class CommentPost extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.state.commentList = [];
        if(localStorage.getItem("postList")){
            this.state.commentList = JSON.parse(localStorage.getItem("postList"));
        }
        
    }
    addCommentList = (value)=>{
        let postList = [];
        if(localStorage.getItem("postList")){
            postList = JSON.parse(localStorage.getItem("postList"));
        }
        postList.unshift(value);
        localStorage.setItem("postList",JSON.stringify(postList));
       
        this.setState({
            commentList:[]
        });
        this.setState({
            commentList:postList
        });
    }
    render(){
        return <div>
                <Comment addCommentList={this.addCommentList}/>
                <Post commentList={this.state.commentList}/>
            </div>
            
    }
}
export default CommentPost;