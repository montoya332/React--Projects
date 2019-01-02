import React, { Component } from "react";
import Button from "material-ui/Button";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { withRouter } from "react-router-dom";

class AppLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }
  handleToggle = () => this.setState({ openDrawer: !this.state.openDrawer });
  handleClose = () => this.setState({ openDrawer: false });
  handleTouchTap = (e, item = {}) => {
    if (item.href) {
      this.props.history.push({ pathname: item.href });
    }
  };
  renderListItem = (item, index) => (
    <ListItem
      key={index}
      value={2}
      onTouchTap={e => this.handleTouchTap(e, item)}
    >
      <ListItemText primary={item.title} />
    </ListItem>
  );
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.handleToggle}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              {" "}
              React{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          width={225}
          open={this.state.openDrawer}
          onRequestClose={this.handleClose}
        >
          <List defaultValue={1}>{list.map(this.renderListItem)}</List>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(AppLayoutContainer);
export const list = [
  {
    id: "",
    title: "Home",
    href: ""
  },
  {
    id: "",
    title: "youtube",
    href: "youtube"
  },
  {
    id: "",
    title: "booklist",
    icon: "",
    href: "booklist"
  },
  {
    id: "",
    title: "something",
    icon: "",
    href: "booklist"
  }
];
