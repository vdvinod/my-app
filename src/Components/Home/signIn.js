import React from "react"
import {Link} from 'react-router-dom'
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
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
        this.userList.forEach((function(val){
            if(val.email === user.email && val.password === user.password){
                let obj =Object.assign(val,{isAuth:true});
                console.log(JSON.stringify(obj));
                localStorage.setItem("AuthData",JSON.stringify(obj));
                this.props.checkIsAuth(true);
                this.props.history.push("/commentPost")
            }
        }).bind(this));
        this.setState((prevState)=>{
           const obj = {
            email: "",
            password: ""
            };
            return obj;
        });

    }
    render (){
        return  <div className="signup-inForm">
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
            <button className="button" type="submit">Login</button>
            <div>
                <Link to={`/signUp`}>click here to register</Link>
            </div>
        </div>
    </form>
        </div>
    }
}

export default SignIn;