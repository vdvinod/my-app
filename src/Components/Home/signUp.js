import React from "react";
import uuid from 'uuid'
class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            password: ""
        };
    
        this.userList = [];
        this.AddUserData = this.AddUserData.bind(this);
         this.changeUserData = this.changeUserData.bind(this);
    };
   changeUserData= (event)=> {
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    AddUserData (event) {
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            password: this.state.password,
            userId: uuid.v4()
        };
        if(localStorage.getItem("userList")){
            this.userList = JSON.parse(localStorage.getItem("userList"));
        }
        this.userList.push(user);
        localStorage.setItem("userList",JSON.stringify(this.userList));
        this.setState((prevState)=>{
           const obj = {
            firstName:"",
            lastName: "",
            email: "",
            phoneNo: "",
            password: ""
            };
            return obj;
        });
        this.props.history.push("/signIn");
    }
    render (){
        return <div className="signup-inForm">
        <header className="showcase">
            <h2>Sign Up</h2>
        </header>
        <form onSubmit={this.AddUserData} className="formControl">
        <div>
            <label>First Name</label>
            <input type="text" className="input-control" name="firstName" value={this.state.firstName} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" className="input-control" name="lastName" value={this.state.lastName} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" className="input-control" name="email" value={this.state.email} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Phone No</label>
            <input type="text" className="input-control" name="phoneNo" value={this.state.phoneNo} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" className="input-control" name="password" value={this.state.password} onChange={this.changeUserData}/>
        </div>
        <div>
           
            <button className="button" type="submit" >Sign Up</button>
        </div>
        </form>
        </div>
    }
}

export default SignUp;