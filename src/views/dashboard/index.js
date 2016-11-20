import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { Match, Link } from 'react-router';

const dashboard = (props) => {
  return (
    <div id="dashboard" className="Dashboard">
      <AppBar title="Dashboard" onLeftIconButtonTouchTap={ props.toggleSidebar } />
    </div>
  );
}

export default dashboard;
