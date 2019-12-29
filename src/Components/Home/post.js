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
        this.previousUlId = {};
    }
    saveLike = (index)=>{
        this.props.commentList[index].Likes.push(this.userData.userId);
        localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        this.setState({likesCount:this.props.commentList[index].Likes.length})
    }
    showMore = (id,currentId,isForPrevious)=>{
    let ul = isForPrevious ? id : '#reply'+id+ ' li';
       let listItems = document.querySelectorAll(ul);
       for (let i = isForPrevious?2 :0; i < listItems.length; i++) {
        listItems[i].style.display= isForPrevious  ? 'none' : 'block';
      }
      document.getElementById(currentId).style.display= isForPrevious ? 'block' : 'none';
      
      if(!isForPrevious && this.previousUlId.ulId){

        this.showMore(this.previousUlId.ulId,this.previousUlId.showMoreid,true);
      }
      this.previousUlId = {ulId:ul,showMoreid:currentId};
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
                            <ul id={'reply'+key}>
                                {this.state.repliesLi}
                            </ul>
                            {(element.replies.length > 2) && <div className="showMore" onClick={()=>this.showMore(key,'showMore'+element.commentId)} id={'showMore'+element.commentId}>Show All Comments</div>}
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