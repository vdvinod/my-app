import React from "react";

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.state.commentList = this.props.commentList;
        if(localStorage.getItem("AuthData")){
           
            this.userData=JSON.parse(localStorage.getItem("AuthData"));
          }
        this.state.replyBox = {};
        this.state.likesCount = "";
    }
    saveLike = (userId,index)=>{
        this.props.commentList[index].Likes.push(userId);
        localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        this.setState({likesCount:this.props.commentList[index].Likes.length})
    }
    showReplyBox=(key)=>{
       this.setState({
           replyBox : {
                [key]: <div className="replyContainer">
                    <textarea className="replyBox" placeholder="reply ..." rows="2" cols="80"></textarea>
                    <button onClick={this.postComment} className="reply-btn-post">Reply</button>
                </div>
             }});
    }
    repeatList=()=>{
        this.li = this.props.commentList.map((element,key) => {
            var userName = JSON.parse(localStorage.getItem("userList")).find((val) => {
                if(val.userId === element.userId){
                    return val;
                }
                return undefined;
            });
            return <li key={key} className="postContainer">
                    <div className="postUserName">
                        {userName.firstName} {userName.lastName}
                    </div>
                    <div className="post-s">
                        {element.comment}
                        <div>
        <button className="btnLikeDislike" onClick={()=>this.saveLike(element.userId,key)}>Like{element.Likes.length}</button>
                            <button className="btnLikeDislike">DisLike</button>
                            <button className="btnLikeDislike" onClick={()=>this.showReplyBox(key)}>reply</button>
                        </div>
                        <div>
                            {this.state.replyBox[key]}
                        </div>
                    </div>
                </li>
        });
    }
    render(){
        this.repeatList();
        return <div className="show-comments-container">
                <div className="box1">

                </div>
                <div>
                <ul>
                
               {this.li}
            </ul>
                </div>
            
        </div>
    }
}
export default CommentList;