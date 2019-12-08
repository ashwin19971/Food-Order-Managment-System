import React from 'react';

import Header from '../components/Header';
import Feed from '../components/Feed';
import { getApiData } from '../api';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      data: '',
      searchText: ''
    }
  }

  componentDidMount(){
    getApiData().then(data=>this.setState({data}));
  }

  handleSearchText = (e) => {
    const searchText = e.target.value;
    this.setState({searchText});
  }

  sortMenuData = (val) => {
    let { data } = this.state;
    if(val == 1 ){
      data = data.sort((a,b) => a.price-b.price);
    }else{
      data = data.sort((a,b) => b.price-a.price);
    }
    this.setState({data});
  }

  render() {
    const {
      data,
      searchText
    } = this.state;
    return (
      <div>
        <Header
          searchText = {searchText}
          handleSearchText = {this.handleSearchText}
        />
        <Feed 
          menu = {data}
          searchText = {searchText}
          sortMenu = {this.sortMenuData}
        />
      </div>
    )
  }
}

Home.propTypes = {
};

export default Home;
