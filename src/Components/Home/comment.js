import React from "react";
import uuid from "uuid";
import Button from "../common/button";
class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment : ""
        }
        if(localStorage.getItem("AuthData")){
           
            this.userId=JSON.parse(localStorage.getItem("AuthData")).userId;
          }
          this.userComments = {};
    }
    commentChanged = (event)=>{
        this.setState({
            comment:event.target.value
        });
        this.userComments ={
            comment:event.target.value,
            userId: this.userId,
            commentId: uuid.v4(),
            Likes:[],
            dislikes:[],
            replies:[]
        };
    };
    postComment = ()=>{
        this.setState({
            comment:""
        })
        this.props.addCommentList(this.userComments);
        
    }
    render (){
        return (<div className="comment-container">
            <div>
                <textarea className="comment-box"rows="5" cols="100" value={this.state.comment} onChange={this.commentChanged} placeholder="drop your Post here ..."></textarea>
                <Button clickHandler={this.postComment} class="post-btn" buttonContent='Post'/>
            </div>
        </div>
        
        )}
}

export default Comments;
