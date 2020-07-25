import React, { Component } from "react"
import { connect } from "react-redux";
import { userRegister } from "../redux/actions/userActions";

class RegisterPage extends Component{
  state={
    name: null,
email:null,
password: null
  }
  handleSubmit=(e)=>{
e.prevetntDefault();
this.userRegister(this.state)
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
render(){
  return(<div ClassName="signup">
  <div ClassName="signup-classic" >
    <h2>Register Here</h2>
    <form ClassName="form" onSubmit={this.handleSubmit}>
      <fieldset ClassName="name">
        <input type="text" placeholder="name" name="name" onClick={this.handleChange} />
      </fieldset>
      <fieldset ClassName="email">
        <input type="email" name="email" placeholder="email" onClick={this.handleChange} />
      </fieldset>
      <fieldset ClassName="password">
        <input type="password" name="password" placeholder="password" onClick={this.handleChange} />
      </fieldset>
      <button type="submit" ClassName="btn">sign up</button>
    </form>
  </div>
</div>)
}
}
export default connect({userRegister})(RegisterPage)
