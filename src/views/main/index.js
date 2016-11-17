import React from 'react';
import { Match, Link } from 'react-router';
import { Drawer, MenuItem, AppBar, Toolbar, ToolbarTitle } from 'material-ui';
import './index.css';

import Dashboard from '../dashboard/index.js';
import Settings from '../settings/index.js';

class main extends React.Component {
  static contextTypes = {
    muiTheme: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <Drawer>
            <Toolbar style={{backgroundColor: this.context.muiTheme.palette.primary1Color}}>
              <ToolbarTitle text="React-80" />
            </Toolbar>
            <MenuItem style={{ textAlign: "left" }}><Link to="/">Dashboard</Link></MenuItem>
            <MenuItem style={{ textAlign: "left" }}><Link to="/settings">Settings</Link></MenuItem>
          </Drawer>
        </div>
        <div className="App-main">
          <Toolbar style={{backgroundColor: this.context.muiTheme.palette.primary1Color}} />
          <div className="App-body">
            <Match exactly pattern="/" component={Dashboard} />
            <Match pattern="/settings" component={Settings} />
          </div>
        </div>
      </div>
    );
  }
}

export default main;
