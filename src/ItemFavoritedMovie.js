import React, { Component } from 'react';

class ItemFavoritedMovie extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
		<section>
      		<h2>{this.props.title}</h2>
		</section>	
    );
  }
}

export default ItemFavoritedMovie;