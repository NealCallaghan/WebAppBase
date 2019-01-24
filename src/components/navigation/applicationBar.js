import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const theme = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export const ApplicationBar = (props) => {
  const { classes } = props;
  const open = Boolean(props.menuAnchor);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            aria-owns={open ? 'menu-appbar' : undefined}
            onClick={props.openMenu}
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={props.menuAnchor}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={open}
            onClose={props.closeMenu}
          >
            <MenuItem
              primaryText="Document types"
              component={Link}
              onClick={props.closeMenu}
              to="/DocumentTypes"
            >
              {'Document Types'}
            </MenuItem>
            <MenuItem
              primaryText="Verify"
              component={Link}
              onClick={props.closeMenu}
              to="/Verify"
            >
              {'Verify'}
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.grow}
          >
            { `Blue Prism ${props.areaTitle}` }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ApplicationBar.defaultProps = {
  areaTitle: '',
  menuAnchor: React.node,
  classes: theme,
};

ApplicationBar.propTypes = {
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  areaTitle: PropTypes.string,
  menuAnchor: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.object),
};

export default withStyles(theme)(ApplicationBar);
