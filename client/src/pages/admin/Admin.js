import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import AdminNav from '../../components/admin/AdminNav'
import AdminMain from '../../components/admin/AdminMain'
import AdminMenuAdd from '../../components/admin/AdminMenuAdd'
import AdminContent from '../../components/admin/AdminContent'

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
}

class Admin extends Component {
  componentWillMount = () => {
    this.props.history.push('/admin/menu')
  };
  render() {
    return (
      <div className='container mt-3'>
        <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
          <h1 className="display-4">Admin</h1>
        </div>
        <AdminNav/>
        <Switch>
          <Route exact path="/admin/menu" component={AdminMain}/>
          <Route exact path="/admin/menu/add-item" component={AdminMenuAdd}/>
          <Route exact path="/admin/edit-content" component={AdminContent}/>
        </Switch>
      </div>
    )
  }
}

export default connect(null, actions)(Admin)