import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import AdminMenuForm from './AdminMenuForm'
import AdminMenuFormReview from './AdminMenuFormReview'

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class AdminMenuAdd extends Component {
  state = {
    showMenuFormReview: false
  };

  renderContent = () => {
    if(this.state.showMenuFormReview) {
      return (
        <AdminMenuFormReview
          onEditReviewCancel={() => this.setState({showMenuFormReview: false})}
        />
      )
    }
    return (
      <AdminMenuForm
        onMenuFormSubmit={() => this.setState({showMenuFormReview: true})}
      />
    )

  };

  componentDidMount = () => {
    this.props.getAdminTab({
      menu: true,
      content: false
    })
  };

  componentWillUnmount = () => {
    this.props.getImageSrc({blob: null})
  };

  render() {
    return (
      <div>
        <div className='col-12 pl-0 col-md-6'>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(reduxForm({
  form: 'menuForm'
})(AdminMenuAdd))
