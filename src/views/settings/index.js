import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { Match, Link } from 'react-router';

const settings = (props) => {
  return (
    <div id="settings" className="Settings">
      <AppBar title="Settings" onLeftIconButtonTouchTap={ props.toggleSidebar } />
    </div>
  );
}

export default settings;
