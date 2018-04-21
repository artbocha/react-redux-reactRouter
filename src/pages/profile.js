import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


const Profile = (props) => {
  const signOut = () => {
    props.signOut();
  };

  if (!props.isAuthorized) {
    props.history.push('/login');
  }

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
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    isAuthorized: state.isAuthorized
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

Profile.propTypes = {
  isAuthorized: PropTypes.bool,
  history: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
