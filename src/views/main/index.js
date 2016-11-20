import React from 'react';
import { Match, Link } from 'react-router';
import { Drawer, MenuItem, AppBar, Toolbar, List, ListItem, Divider, Avatar, IconMenu, IconButton } from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
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
              <ListItem
                primaryText="Cadell Christo"
                leftAvatar={<Avatar src={Logo} />}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem key={1} primaryText="My Profile" />,
                  <ListItem key={2} primaryText="Sign out" />,
                ]}
              />
              <Divider />
              <Link className="Main-menu-item" to="/">
  							<ListItem primaryText="Dashboard" />
  						</Link>
  						<Link className="Main-menu-item" to="/settings">
              	<ListItem primaryText="Settings" />
  						</Link>
            </List>
          </Drawer>
        </div>
        <div className="Main-content" style={{marginLeft: showSidebar ? "256px" : 0}}>
          <Match exactly pattern="/" component={() => <Dashboard toggleSidebar={this.toggleSidebar} />} />
          <Match pattern="/settings" component={() => <Settings toggleSidebar={this.toggleSidebar} />} />
        </div>
      </div>
    );
  }
}

export default main;
