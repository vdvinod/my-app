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
        this.reply ="";
    }
    saveLike = (index)=>{
        this.props.commentList[index].Likes.push(this.userData.userId);
        localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        this.setState({likesCount:this.props.commentList[index].Likes.length})
    }
    savereplies = (index)=>{
        let obj = {
            reply: this.reply,
            userId:this.userData.userId,

        };
        this.props.commentList[index].replies.push(obj);
         localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        // this.setState({likesCount:this.props.commentList[index].Likes.length})
         this.setState({replyBox:{}});
    };
    changeReplies =(event)=>{
       this.reply = event.target.value;
    }
    showReplyBox=(key)=>{
       this.setState({
           replyBox : {
                [key]: <div className="replyContainer-fadeIn">
                    <textarea className="replyBox" onChange={this.changeReplies} placeholder="Comment ..." rows="2" cols="80"></textarea>
                    <button onClick={()=>this.savereplies(key)} className="reply-btn-post">Reply</button>
                </div>
             }});
    }
    repeatList=()=>{
        console.log(this.state.reply);
        this.li = this.props.commentList.map((element,key) => {
             this.state.repliesLi = element.replies.map((reply,key)=>{
                var userName = JSON.parse(localStorage.getItem("userList")).find((val) => {
                    if(val.userId === reply.userId){
                        return val;
                    }
                    return undefined;
                });
                return (<li key={key} className="commentList">
                <div className="comment-user-name">
                        {userName.firstName} {userName.lastName}
                    </div>
                    <div className="post-comment">
                    {reply.reply}
                    </div>
                    
                </li>)
             });
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
        <button className="btnLikeDislike" onClick={()=>this.saveLike(key)}>Like{element.Likes.length}</button>
                            <button className="btnLikeDislike">DisLike</button>
                            <button className="btnLikeDislike" onClick={()=>this.showReplyBox(key)}>comment</button>
                        </div>
                        <div>
                            {this.state.replyBox[key]}
                        </div>
                        <div className="replyUl">
                            <ul >
                                {this.state.repliesLi}
                            </ul>
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