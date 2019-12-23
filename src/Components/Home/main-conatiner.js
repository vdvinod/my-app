import React from "react";
//import List from "./list.js";
class MainConatiner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            password: "",
            userList: []
        };
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

    formView (){
        return this.props.isSignIn ? 
        <div className="signinForm">
        <header className="showcase">
                <h2>Sign In</h2>
        </header>
        <form onSubmit={this.AddUserData} className="from-group">
        <div>
            <label>userName</label>
            <input type="text" name="name" value={this.state.name} onChange={this.changeUserData}/>
        </div>
        <div>
            <label>Password</label>
            <input type="text" name="password" value={this.state.password} onChange={this.changeUserData}/>
        </div>
        <div>
           
            <button type="submit" >Login</button>
        </div>
    </form>
        </div>
    : 
    <div className="signupForm">
    <header className="showcase">
        <h2>Sign Up</h2>
    </header>
    <form onSubmit={this.AddUserData} className="formControl">
    <div>
        <label>userName</label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeUserData}/>
    </div>
    <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.changeUserData}/>
    </div>
    <div>
        <label>Email</label>
        <input type="email" name="email" value={this.state.email} onChange={this.changeUserData}/>
    </div>
    <div>
        <label>Phone No</label>
        <input type="number" name="phoneNo" value={this.state.phoneNo} onChange={this.changeUserData}/>
    </div>
    <div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.changeUserData}/>
    </div>
    <div>
       
        <button type="submit" >SignUp</button>
    </div>
    </form>
    </div>
    };
    render() {
       
        return <section className="main-container" align="center">

                { this.formView()}
            {/* <div className="top-box top-box-a">
                 <h4 style={{display : this.state.userList.length ? "block" : "none"}}>List</h4>
                <List userList={this.state.userList}/>
            </div> */}
        </section>
        
    }
}

export default MainConatiner;
