import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Athorization = (WrappedComponent) => {
  class WithAuthorization extends React.Component {
    static propTypes = {
      isAuthorized: PropTypes.bool
    };

    render() {
      const { isAuthorized } = this.props;

      if (!isAuthorized) {
        return <Redirect to='/login' />;
      }

      return <WrappedComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => (
    {
      isAuthorized: Boolean(state.username)
    }
  );

  return connect(mapStateToProps)(WithAuthorization);
};

export default Athorization;
