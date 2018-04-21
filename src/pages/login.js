import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { logIn } from '../services/authService';
import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL } from '../store/actionTypes';

class Login extends React.Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    authorizationSuccess: PropTypes.func.isRequired,
    authorizationFail: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      error: '',
      username: '',
      password: ''
    };
  }

  render() {
    const { isAuthorized, history } = this.props;

    if (isAuthorized) {
      history.push('/');
    }

    const { error, username, password } = this.state;

    return (
      <div id='login'>
        <div className='error-message' hidden={!error}>
          {error}
        </div>
        <form id='login-form' onSubmit={this.handleSubmit}>
          <label>Login</label>
          <input required type='text' name='username' value={username} onChange={this.onChangeUsername} />
          <label>Password</label>
          <input required type='password' name='password' value={password} onChange={this.onChangePassword} />
          <button type="submit">Sign In</button>
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

    const { authorizationSuccess, authorizationFail } = this.props;
    const { username, password } = this.state;

    logIn(username, password).then(() => {
      this.setState({ error: '' });
      authorizationSuccess();
    }).catch(err => {
      this.setState({ error: err.message });
      authorizationFail(err);
    });
  }
}

const mapStateToProps = (state) => (
  {
    isAuthorized: state.isAuthorized
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    authorizationSuccess: () => dispatch({ type: AUTHORIZATION_SUCCESS }),
    authorizationFail: () => dispatch({ type: AUTHORIZATION_FAIL })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
