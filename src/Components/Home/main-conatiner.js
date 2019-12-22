import React from "react";
import List from "./list.js";
class MainConatiner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            password: "",
            userList: [{name:"ankit",password:31231}]
        };
        this.AddUserData = this.AddUserData.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
    };
   changeUserData (event) {
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    AddUserData (event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password
        };
        this.setState((prevState)=>{
           const obj = {
                userList : prevState.userList.concat(user),
                name: "",
                password: ""
            };
            return obj;
        });
        
    }
    render() {
        return <section className="main-container">
            <header className="showcase">
                <form onSubmit={this.AddUserData}>
                    <div>
                        <label>userName</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeUserData}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.changeUserData}/>
                    </div>
                    <div>
                       
                        <button type="submit" >Add</button>
                    </div>
                </form>
            </header>
            <div className="top-box top-box-a">
            list
                    <List userList={this.state.userList}/>
                
                
            </div>
            
        </section>
    }
}

export default MainConatiner;
