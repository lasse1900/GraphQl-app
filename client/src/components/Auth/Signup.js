import React from 'react'


class Signup extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <form className="form">
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="passwordConfirmation" placeholder="Confirm password" />
        <button type="submit" className="primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup