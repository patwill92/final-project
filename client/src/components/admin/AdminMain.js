import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import * as actions from '../../actions';
import AdminMenuItem from './AdminMenuItem';

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

const weight = {
  fontWeight: 300
};

class AdminMain extends Component {
  componentDidMount = () => {
    this.props.getAdminTab({
      menu: true,
      content: false
    })
  };

  renderMenus = (type) => {
    let menuItems = this.props[type] ? this.props[type].map(({name, image, price, available, description, _id, category}) => {
      return (
        <AdminMenuItem
          key={name + _id}
          id={_id}
          name={name}
          price={price}
          image={image}
          available={available}
          description={description}
          category={category}
        />
      )
    }) : <div/>;
    return (
      <div className="card rounded-0 mb-3">
        <div className="card-header rounded-0">
          <h4 style={weight} className="display-6 mb-0">{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
        </div>
        <div className="card-body p-0">
          <ul className="list-unstyled mb-0">
            {menuItems}
          </ul>
        </div>
      </div>
    )
  };

  render() {
    let menus = ['main', 'dessert', 'starter'].map(item => {
      return this.renderMenus(item)
    });
    return (
      <div className='jumbotron bg-light border border-secondary p-4 rounded-0'>
        <div style={style}
             className="jumbotron bg-white border border-primary pt-2 pb-2 mb-3 rounded-0 d-flex justify-content-between align-items-center">
          <h1 style={weight} className="display-5">Current Menu</h1>
          <Link to='/admin/menu/add-item' className='btn btn-outline-success btn-sm rounded-0'><i
            className='fal fa-plus-circle'/> Add Menu Item</Link>
        </div>
        {menus}
      </div>
    );
  }
}

function mapStateToProps({menu}) {
  return {
    starter: menu.adminStarter,
    dessert: menu.adminDessert,
    main: menu.adminMain,

  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'menuForm'
})(AdminMain))
