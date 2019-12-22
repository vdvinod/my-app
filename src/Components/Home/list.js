import React from "react";

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userList : props.userList
        }
        console.log(this.state);
        this.showList = this.showList.bind(this);
    }
    showList(item, key){
        console.log(item);
        return <li key={key}>{item.name}-{item.password}</li>
    }
    render (){
       const value = this.props.userList.map(this.showList);
        return (<ul >
            {value}</ul>
      
        )}
}

export default List;
