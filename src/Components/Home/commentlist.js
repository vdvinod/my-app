import React from "react";

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.state.commentList = this.props.commentList;
    }
    repeatList=()=>{
        this.li = this.props.commentList.map((element,key) => {
            return <li key={key}>{element.comment}</li>
        });
    }
    render(){
        this.repeatList();
        return <div className="show-comments-container">
                <div className="box1">

                </div>
                <div>
                <ul>
                <li>asdasdadasd</li>
                <li>asdasdadasd</li>
                <li>asdasdadasd</li>
                <li>asdasdadasd</li>
               {this.li}
            </ul>
                </div>
            
        </div>
    }
}
export default CommentList;