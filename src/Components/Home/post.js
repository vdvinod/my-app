import React from "react";
import nestedReplies from "./nestedReplies";
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
        this.state.isLiked = {};
        this.state.likeDislikeList = [];
    }
    saveLike = (index, notFromButton)=>{
        let likeId = this.props.commentList[index].Likes.indexOf(this.userData.userId)
        if(likeId<0){
            this.props.commentList[index].Likes.push(this.userData.userId);
        }else{
            this.props.commentList[index].Likes.splice(likeId,1);
        }
        if(this.props.commentList[index].dislikes.indexOf(this.userData.userId) > -1 && this.props.commentList[index].Likes.indexOf(this.userData.userId) > -1){
            this.props.commentList[index].dislikes.splice(this.props.commentList[index].dislikes.indexOf(this.userData.userId),1);
        }
        localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        this.setState({likesCount:this.props.commentList[index].Likes.length})
    }
    saveDislike = (index, notFromButton)=>{
        let disLikeId = this.props.commentList[index].dislikes.indexOf(this.userData.userId)
        if(disLikeId<0){
            this.props.commentList[index].dislikes.push(this.userData.userId);
        }else{
            this.props.commentList[index].dislikes.splice(disLikeId,1);
        }
        if(this.props.commentList[index].Likes.indexOf(this.userData.userId) > -1 && this.props.commentList[index].dislikes.indexOf(this.userData.userId) > -1){
            this.props.commentList[index].Likes.splice(this.props.commentList[index].Likes.indexOf(this.userData.userId),1);
        }
        localStorage.setItem("postList",JSON.stringify(this.props.commentList));
        this.setState({disLikesCount:this.props.commentList[index].dislikes.length})
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
    changeReplies =(event, key)=>{
        this.reply = event.target.innerText;
        if(event.which === 13 && event.shiftKey === true){
            return false;
        }else if(event.which === 13){
            this.savereplies(key)
        }
       
    }
    showReplyBox=(key)=>{
       this.setState({
           replyBox : {
                [key]: <div className="replyContainer-fadeIn">
              
                    <div contentEditable="true" placeholder="Write a comment ..." className="replyBox" onKeyDown={(event)=>this.changeReplies(event,key)}/>

                </div>
             }});
    }
    repeatList=()=>{
        this.li = this.props.commentList.map((element,key) => {
                this.repliesLi = element.replies.map((reply,childKey)=>{
                var userName = JSON.parse(localStorage.getItem("userList")).find((val) => {
                    if(val.userId === reply.userId){
                        return val;
                    }
                    return undefined;
                });
                return (<li key={childKey} className="commentList">
                <div className="comment-user-name">
                        {userName.firstName} {userName.lastName}
                    </div>
                    <div className="post-comment">
                    {reply.reply}
                    </div>
                    <div className="replyLike">
                        <span>Like</span>
                        <span onClick={()=>this.showReplyBox(key)}>Reply</span>
                    </div>
                </li>)
             });
            /// this.setState({repliesLi : repliesList});
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
                        <div className="likeDislikes">
                            <button className="btnLikeDislike" onClick={()=>this.saveLike(key)} onMouseOver={(event)=>this.showLikeDislikeList(event,key,'Likes')} onMouseOut={()=>this.hideLikeDislikeList(key)}> 
                                <span style={{display:(element.Likes.indexOf(this.userData.userId)===-1)?"inline":"none"}}>Likes</span> 
                                <span style={{display:(element.Likes.indexOf(this.userData.userId)>-1)?"inline":"none"}}>Liked</span>
                                <span style={{display:(element.Likes.length?"inline":"none")}}> {element.Likes.length}</span></button>
                            <button className="btnLikeDislike" onClick={()=>this.saveDislike(key)} onMouseOver={(event)=>this.showLikeDislikeList(event,key,'dislikes')} onMouseOut={()=>this.hideLikeDislikeList(key)}>
                                <span style={{display:(element.dislikes.indexOf(this.userData.userId)===-1)?"inline":"none"}}>Dislikes</span> 
                                <span style={{display:(element.dislikes.indexOf(this.userData.userId)>-1)?"inline":"none"}}>DisLiked</span>
                                <span style={{display:(element.dislikes.length?"inline":"none")}}> {element.dislikes.length}</span></button>
                            <button className="btnLikeDislike" onClick={()=>this.showReplyBox(key)}>comment</button>
                            <div className="likeDislikeList" id={'likeDislikeList'+key}>
                                <ul>
                                    {this.state.likeDislikeList}
                                </ul>
                            </div>
                        </div>
                        <div>
                            {this.state.replyBox[key]}
                        </div>
                        <div className="replyUl">
                            <ul id={'reply'+key}>
                                {this.repliesLi}
                            </ul>
                            {(element.replies.length > 2) && <div className="showMore" onClick={()=>this.showMore(key,'showMore'+element.commentId)} id={'showMore'+element.commentId}>Show All Comments</div>}
                        </div>

                    </div>
                </li>
        });
    }

    showLikeDislikeList = (event, key,list) => {
        
        this.likeDislikeList = this.props.commentList[key][list].map((value,k) =>{
            let listLD = JSON.parse(localStorage.getItem("userList")).find((val)=>{
                 return val.userId === value;    
             });
             return <li key={k}>{listLD.firstName} {listLD.lastName}</li>;
         });
        this.setState({
            likeDislikeList: this.likeDislikeList
        })
      
            document.getElementById("likeDislikeList"+key).style.display= 'block';
            document.getElementById("likeDislikeList"+key).style.top= event.clientX;
            document.getElementById("likeDislikeList"+key).style.left= event.clientY;
        
    }
    hideLikeDislikeList = (key) =>{
        document.getElementById("likeDislikeList"+key).style.display= 'none';
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