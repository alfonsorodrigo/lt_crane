import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Sidebar = ({ dataLinks }) => {
  return (
    <React.Fragment>
      <List>
        {dataLinks.map((item, index) => {
          const { id, text, onClick, icon } = item;
          return (
            <ListItem button key={id} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default Sidebar;
