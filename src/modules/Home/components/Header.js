import React from 'react';

import './Header.scss';
import searchIcon from '../../../img/search.svg';

class Header extends React.Component {
  render(){
    const {
      searchText,
      handleSearchText
    } = this.props;

    return(
      <div className='header-wrapper'>
        <div>
          <img src={searchIcon}/>
          <input
            value = {searchText}
            onChange = {handleSearchText}
            placeholder="Search item" 
          />
        </div>
        <span>Embassy Golf Links</span>
        <span>Profile</span>
      </div>
    )
  }
}

export default Header;
