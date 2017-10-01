import React, {Component} from 'react';

import MenuItem from './MenuItem';

class MenuList extends Component {
  render() {
    let menuList = this.props.list;
    menuList = menuList.map((item) => {
      return (
        <MenuItem
          key={item._id}
          id={item._id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      )
    });
    return (
      <div style={{display: 'inline-block'}} className='card-columns'>
        {menuList}
      </div>
    )
  }
}

export default MenuList