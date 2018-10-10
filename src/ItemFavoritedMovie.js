import React, { Component } from 'react';
import ListUsers from './ListUsers';

class ItemFavoritedMovie extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
		<section>
      		<h2>{this.props.title}</h2>
      		<ListUsers 
      			users={this.props.users}
  				usersIDs={this.props.usersIDs}/>
		</section>	
    );
  }
}

export default ItemFavoritedMovie;