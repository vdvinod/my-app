import React from "react";
import Comment from "./comment.js";
import Post from "./post.js";

class CommentPost extends React.Component {
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
    render(){
        return <div>
                <Comment addCommentList={this.addCommentList}/>
                <Post commentList={this.state.commentList}/>
            </div>
            
    }
}
export default CommentPost;