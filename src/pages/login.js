import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    logIn: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to='/' />;
    }

    const { username, password } = this.state;
    const { error } = this.props;

    return (
      <div id='login'>
        <form id='login-form' onSubmit={this.handleSubmit}>
          <label>Login</label>
          <input required type='text' name='username' value={username} onChange={this.onChangeUsername} />
          <label>Password</label>
          <input required type='password' name='password' value={password} onChange={this.onChangePassword} />
          <button type="submit">Sign In</button>
          <div className='error-message' hidden={!error}>
            {error}
          </div>
        </form>
      </div>
    );
  }

  onChangeUsername = (event) => {
    const { target: { value } } = event;

    this.setState({ username: value });
  }

  onChangePassword = (event) => {
    const { target: { value } } = event;

    this.setState({ password: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.logIn(username, password);
  }
}

const mapStateToProps = (state) => (
  {
    isAuthorized: Boolean(state.username),
    error: state.errorMessage
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (username, password) => dispatch({ type: 'LOG_IN', payload: { username, password } }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
