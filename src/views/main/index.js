import React from 'react';
import { Match, Link } from 'react-router';
import { Drawer, MenuItem, AppBar, Toolbar } from 'material-ui';
import './index.css';

import Dashboard from '../dashboard/index.js';
import Settings from '../settings/index.js';

class main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <Drawer>
            <Toolbar style={{backgroundColor: this.context.muiTheme.palette.primary1Color}}>
              <h2>React-80</h2>
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

main.contextTypes = {
  muiTheme: React.PropTypes.object
};

export default main;