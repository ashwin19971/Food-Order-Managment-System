import React from 'react';
import map from 'lodash/map';

import './Feed.scss';
import { calculateDateInFormat } from '../../../utils/util';


class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tag: "Lunch",
      currentHour: (new Date()).getHours(),
      currentMin: (new Date()).getMinutes(),
      addedItems: [],
      totalAmt: 0,
    }
  }

  handleAddBtnClick = (name, val) => {
    let { addedItems } = this.state;
    if(val == 0) {
      addedItems[name] = addedItems[name] - 1;
      if(addedItems[name] <= 0){
        addedItems.pop(name);
      }
    }else if(addedItems[name]){
      addedItems[name] = addedItems[name] + 1;
    }else{
      addedItems[name] = 1;
    }
    this.setState({addedItems});
  }

  render(){
    const { 
      tag,
      showSortDropdown,
      currentHour,
      currentMin,
      addedItems,
      totalAmt
    } = this.state;

    const {
      menu,
      searchText,
      sortMenu
    } = this.props;

    console.log(totalAmt, "==ttoal");

    return(
      <span>
        <div className='filter-wrapper'>
          <span onClick={() => this.setState({tag:'Lunch'})} className={`${tag=='Lunch'?'selected':''} tag`}>Lunch</span>
          <span onClick={() => this.setState({tag:'Buffet'})} className={`${tag=='Buffet'?'selected':''} tag`}>Buffet</span>
          <div className='sort-wrapper'>
            <span className='tag'>{calculateDateInFormat(Date.now())}</span>
            <span className='tag' onClick={() => this.setState(state=>({showSortDropdown: !state.showSortDropdown}))}>
              Sort
              {
                showSortDropdown ?
                <div>
                  <p onClick = {() => sortMenu(1)}>Ascending</p>
                  <p onClick = {() => sortMenu(2)}>Descending</p>
                </div>
                : ''
              }
            </span>
          </div>
        </div>
        <p className='selected-text'>{tag}</p>
        <div className='feed-wrapper'>
          <h1>{tag}</h1>
          <div className='item-wrapper'>
            {map(menu, (val, index) => (
              val.itemname.toLowerCase().includes(searchText.toLowerCase())?
                <div className='item' key={index}>
                  <div>
                    <p className='name'>{val.itemname}</p>
                    <p className='price'>{`₹ ${val.price}`}</p>
                  </div>
                  {
                    !addedItems[val.itemname] ?
                      <button onClick={()=>this.handleAddBtnClick(val.itemname, 1)}>
                        Add
                      </button>
                    :
                      <button id="change-btn">
                        <button id="add" onClick={()=>this.handleAddBtnClick(val.itemname, 0)}>-</button>
                        {addedItems[val.itemname]}
                        <button id="minus" onClick={()=>this.handleAddBtnClick(val.itemname, 1)}>+</button>
                      </button>
                  }
                </div>
              : 
                ''
            ))}
          </div>
          {
            addedItems.length ?
            <div>{totalAmt}</div> 
            : ''
          }
        </div>
      </span>
    )
  }
}

export default Feed;

// computeTimeArray = (str) => {
//   const arr = [];
//   let time = str.split(',');

//   let Time = (time[0].split('-'))[0];
//   arr.push(Time[0].split(':')[0]);
//   arr.push(Time[0].split(':')[1]);

//   arr.push(Time[1].split(':')[0]);
//   arr.push(Time[1].split(':')[1]);

//   Time = (time[1].split('-'))[0];
//   arr.push(Time[0].split(':')[0]);
//   arr.push(Time[0].split(':')[1]);

//   arr.push(Time[1].split(':')[0]);
//   arr.push(Time[1].split(':')[1]);
//   console.log(arr);
// }
