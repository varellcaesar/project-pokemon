import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

import '../style/nav-button.css';

class NavButton extends Component {
  render(){
    const pathname = window.location.pathname;
    return(
      <nav>
        <Link 
          to='/'
          onClick={ () => this.forceUpdate() }
          className={ pathname === '/' ? 'active' : '' }
        >Pokemon List
        </Link>
        <Link 
          to='/my-pokemon'
          onClick={ () => this.forceUpdate() }
          className={ pathname === '/my-pokemon' ? 'active' : '' }
        >My Pokemon
        </Link>
      </nav>
    )
  }
} 

export default NavButton