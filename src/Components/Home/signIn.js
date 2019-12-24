import React from "react"

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: undefined,
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
            password: this.state.password
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
        
    }
    render (){
        return  <div className="signinForm">
        <header className="showcase">
                <h2>Sign In</h2>
        </header>
        <form onSubmit={this.AddUserData} className="from-group">
        <div>
            <label>userName</label>
            <input type="text" className="input-control" name="email" value={this.state.email} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" className="input-control" name="password" value={this.state.password} onChange={this.changeUserData}/>
        </div>
        <div>
           
            <button className="button" type="submit" >Login</button>
        </div>
    </form>
        </div>
    }
}

export default SignIn;