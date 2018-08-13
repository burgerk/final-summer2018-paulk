import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to='/' className="navLink">HOME</Link>
        {Object.keys(this.props.recipes).map((key) => 
          <Link key={key} to={'/detail/'+key} className="navLink">{this.props.recipes[key].title}</Link> 
        )}
        {/*<Link to='/' className="navLink">Home</Link>
        <Link to='/detail/foo' className="navLink">Foo</Link>*/}
      </nav>
      )
  }
}

export default NavBar;