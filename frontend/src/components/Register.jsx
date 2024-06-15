import React from 'react'
import '../styles/Register.css'


function Register() {
    return (
      <>

        <div className="main-title form-block">
          <div id="title">
             <h1>login.</h1>
             <h2>Your fruity companion to Migration</h2>
          </div>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            <div id="labels">
              Already registered? <span>Login</span>
              Password lost? <span>Reset</span>
              <span>Back</span>
              Not registered? <span>Create an account</span>
            </div>
        </div>

      </>
    )
}

export default Register
