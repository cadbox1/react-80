import React from 'react';
import { Route, Link } from 'react-router-dom';
import Avatar from "material-ui/Avatar";
import Drawer from "material-ui/Drawer";
import {
	List,
	ListItem,
	ListItemText,
    ListItemIcon,
} from "material-ui/List";
import './index.css';
import Logo from "./logo.svg";

import Dashboard from '../dashboard/index.js';
import Settings from '../settings/index.js';

class main extends React.Component {
  static contextTypes = {
    muiTheme: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showSidebar: true,
      overlaySidebar: false,
    };
  }

  componentWillMount() {
    this.mql = window.matchMedia(`(min-width: 800px)`);
    this.mql.addListener(this.handleScreenSize);
    this.handleScreenSize();
    console.log('hi');
  }

  componentWillUnmount() {
    if (this.mql) {
      this.mql.removeListener(this.handleScreenSize);
    }
  }

  handleScreenSize = () => {
    const isDesktop = this.mql.matches;
    this.setState({
      showSidebar: isDesktop,
      overlaySidebar: !isDesktop,
    });
  }

  toggleSidebar = () => {
    this.setState({showSidebar: !this.state.showSidebar});
  }

  setShowSidebar = (showSidebar) => {
    this.setState({showSidebar});
  }

  render() {
    const { showSidebar, overlaySidebar } = this.state;
    return (
      <div className="Main">
        <div className="Main-sidebar">
          <Drawer
              open={showSidebar}
              docked={!overlaySidebar}
              onRequestChange={this.setShowSidebar}
            >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Avatar src={Logo} />
                </ListItemIcon>
                <ListItemText primary="Cadell Christo" />
              </ListItem>
              {/*<Divider />*/}
              {/*<Link className="Main-menu-item" to="/">*/}
  							{/*<ListItem primaryText="Dashboard" />*/}
  						{/*</Link>*/}
  						{/*<Link className="Main-menu-item" to="/settings">*/}
              	{/*<ListItem primaryText="Settings" />*/}
  						{/*</Link>*/}
            </List>
          </Drawer>
        </div>
        {/*<div className="Main-content" style={{marginLeft: showSidebar ? "256px" : 0}}>*/}
          {/*<Route exactly path="/" component={() => <Dashboard toggleSidebar={this.toggleSidebar} />} />*/}
          {/*<Route path="/settings" component={() => <Settings toggleSidebar={this.toggleSidebar} />} />*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default main;
