import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Athorization = (WrappedComponent) => {
  class WithAuthorization extends React.Component {
    static propTypes = {
      isAuthorized: PropTypes.bool,
      history: PropTypes.object.isRequired,
    };

    render() {
      const { isAuthorized, history } = this.props;

      if (!isAuthorized) {
        history.push('/login');
      }

      return <WrappedComponent/>;
    }
  }

  const mapStateToProps = (state) => (
    {
      isAuthorized: state.isAuthorized
    }
  );

  return connect(mapStateToProps)(WithAuthorization);
};

export default Athorization;
