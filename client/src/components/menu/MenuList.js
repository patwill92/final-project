import React, {Component} from 'react';

import MenuItem from './MenuItem';

class MenuList extends Component {
  render() {
    let menuList = this.props.list;
    if(menuList) {
      menuList = menuList.map((item) => {
        return (
          <MenuItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )
      });
    } else {
      menuList = <div/>
    }
    return (
      <div style={{display: 'inline-block'}} className='card-columns'>
        {menuList}
      </div>
    )
  }
}

export default MenuList;