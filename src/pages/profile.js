import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired
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
            <span>Admin</span>
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


const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(undefined, mapDispatchToProps)(Profile);
