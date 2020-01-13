import React from "react"
import Button from "../common/button";
class Replies extends React.Component {
constructor(props){
    super(props);
    this.state = {
        repliesLi : [],
        min:3
    };
    
}

showList = (showMoreCliked)=>{
        this.setState({min:this.props.replies.length});
        this.props.showMore(this.props.key,'showMore'+this.props.commentId);
}
    
    
    render (){
        let replies =  [...this.props.replies];
        this.state.repliesLi = replies.map((reply,childKey)=>{
            var userName = JSON.parse(localStorage.getItem("userList")).find((val) => {
                if(val.userId === reply.userId){
                    return val;
                }
                return undefined;
            });
            
            return childKey < this.state.min? (<li key={childKey} className="commentList">
            <div className="comment-user-name">
                    {userName.firstName} {userName.lastName}
                </div>
                <div className="post-comment">
                {reply.reply}
                </div>
                <div className="replyLike">
                    <Button class="btnLikeDislike" buttonContent="Like" />
                    <Button class="btnLikeDislike" 
                            clickHandler={()=>this.showReplyBox(this.props.key)}
                            buttonContent="Reply" />
        
                </div>
            </li>) : null;
         });
         
        return (
            <div className="replyUl">
                                <ul id={'reply'+this.props.key}>
                                    {this.state.repliesLi}
                                </ul>
                                {(this.props.replies.length > 2) && <div className="showMore" onClick={()=>this.showList(true)} id={'showMore'+this.props.commentId}>Show All Comments</div>}
                            </div>
        );
    }
}
export default Replies;