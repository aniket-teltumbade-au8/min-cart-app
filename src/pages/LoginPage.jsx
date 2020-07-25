import React, { Component } from "react"


class LoginPage extends Component{
render(){
  return(<div ClassName="signup">
  <div ClassName="signup-classic">
    <h2>Login</h2>
    <form ClassName="form">
      <fieldset ClassName="username">
        <input type="text" placeholder="username" />
      </fieldset>
      <fieldset ClassName="password">
        <input type="password" placeholder="password" />
      </fieldset>
      <button type="submit" ClassName="btn">Login</button>
    </form>
  </div>
</div>)
}
}
export default LoginPage