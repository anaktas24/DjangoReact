import React from 'react'
import '../styles/Register.css'


function Register() {
    return (
      <>
        <div id="container">
            <h1>Register</h1>
            <h2>Your fruity companion to Migration</h2>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            <div id="labels">
              <label for="Register">Already registered? <span>Login</span></label>
              <label for="reset">Password lost? <span>Reset</span></label>
              <label for="Register"><span>Back</span></label>
              <label for="register">Not registered? <span>Create an account</span></label>
            </div>
        </div>
      </>
    )
}

export default Register
