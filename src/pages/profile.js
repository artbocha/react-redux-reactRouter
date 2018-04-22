import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <div className='header profile'>
          <h2>Profile</h2>
        </div>
        <div className='profile-info'>
          <div className='group'>
            <label>Username:</label>
            <span>{this.props.username}</span>
          </div>
          <button onClick={this.signOut}>Sign out</button>
        </div>
      </div>
    );
  }

  signOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = (state) => (
  {
    username: state.username
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
