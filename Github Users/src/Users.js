import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
   width: 900,
    overflowY: 'auto',
  },
};

export default function Users(props) {
  const { users } = props;
  return (
    <div style={styles.root}>
    <GridList
      style={styles.gridList}
      cols={4}
      cellHeight={180}
      >
        <Subheader>List of most popular github users by programming language</Subheader>
        {users.map((user) => (
          <GridTile
            key={user.id}
            title={user.login}
          >
            <img src={user.avatar_url} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}