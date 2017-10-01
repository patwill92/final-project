import React, {Component} from 'react';

import MenuNav from './MenuNav';
import MenuList from './MenuList';

class MenuPage extends Component {
  render() {
    return (
      <MenuNav
        tab={this.props.tab}
      >
        <MenuList
          list={this.props.list}
        />
      </MenuNav>
    );
  }
}

export default MenuPage;
