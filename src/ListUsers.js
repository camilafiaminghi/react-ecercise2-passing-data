import React, { Component } from 'react';

class ListUsers extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const usersIDs = this.props.usersIDs;
    const users    = this.props.users;
    const hasUsers = (usersIDs.length > 0) ? true : false;
    
    if (!hasUsers) {
      return <p>None liked this movie.</p>;
    }
    
    const listUsers = usersIDs.map(id => (<li key={id}>{users[id].name}</li>));
    
    return (
      <div>
      	<p>Liked By:</p>
      	<ul>{listUsers}</ul>
	   </div>
    );
  }
}

export default ListUsers;