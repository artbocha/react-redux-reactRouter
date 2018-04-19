import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      login: '',
      password: ''
    };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { error, login, password } = this.state;
    return (
      <div id='login'>
        <div className='error-message' hidden={!error}>
          {error}
        </div>
        <form id='login-form' onSubmit={this.handleSubmit}>
          <label>Login</label>
          <input required type='text' name='username' value={login} onChange={this.onChangeLogin} />
          <label>Password</label>
          <input required type='password' name='password' value={password} onChange={this.onChangePassword} />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }

  onChangeLogin(event) {
    const { target: { value } } = event;

    this.setState({ login: value });
  }

  onChangePassword(event) {
    const { target: { value } } = event;

    this.setState({ password: value });
  }

  handleSubmit(event) {
    this.setState({ error: 'Incorrect username or password.' });
    event.preventDefault();
  }
}

export default Login;
