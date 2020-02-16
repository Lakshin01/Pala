import React, { Component } from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './Sidebar.css'
class Sidebar extends Component {
  render() {
      var height =  window.innerHeight;
    return (
     <div>
        <div className="sidebar" style={{ height : `${height}px` }}>
        <List disablePadding dense>
        {this.props.items.map(({ categoryname, _id, ...rest }) => (
            <ListItem key={_id} button {...rest}>
                 <ListItemText>{categoryname}</ListItemText>
            </ListItem>
        ))}
        </List>
      </div>
     </div>
    );
  }
}

export default Sidebar;

