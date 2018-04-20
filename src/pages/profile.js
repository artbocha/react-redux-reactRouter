import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = (props) => {
  if (!props.isAuthorized) {
    props.history.push('/login');
  }

  return (
    <div>Profile</div>
  );
};

const mapStateToProps = (state) => (
  {
    isAuthorized: state.isAuthorized
  }
);

Profile.propTypes = {
  isAuthorized: PropTypes.bool,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Profile);
