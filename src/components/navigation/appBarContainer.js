import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from 'actions/navigation/navigationActionCreators';
import AppBar from './applicationBar';

export class AppBarContainer extends Component {
  static defaultProps = {
    menuAnchor: null,
    areaTitle: '',
  };

  static propTypes = {
    openMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired,
    areaTitle: PropTypes.string,
    menuAnchor: PropTypes.node, // anything that can be rendered
  };

  onHandleOpenMenu = (eventArgs) => {
    this.props.openMenu(eventArgs.currentTarget);
  }

  onHandleCloseMenu = () => {
    this.props.closeMenu();
  }

  render() {
    return (
      <div>
        <AppBar
          openMenu={this.onHandleOpenMenu}
          closeMenu={this.onHandleCloseMenu}
          areaTitle={this.props.areaTitle}
          menuAnchor={this.props.menuAnchor}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ openMenu: target => dispatch(openMenu(target)),
  closeMenu: target => dispatch(closeMenu(target)) });

const mapStateToProps = state => ({ menuAnchor: state.navigationReducer.menuAnchor,
  areaTitle: state.navigationReducer.areaTitle });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBarContainer));
