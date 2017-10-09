import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {myFields} from "./MenuFields";
import * as actions from '../../actions'

class AdminMenuFormReview extends Component {
  sendItem = (item) => {
    let formData = new FormData();
    let myItem = {
      ...item,
      avatar: item.avatar[0]
    };
    for(let name in myItem) {
      formData.append(name, myItem[name])
    }
    this.props.addMenuItem(formData, this.props.history)
  };
  render() {
    let textFields = myFields.map(field => {
      return (
        <div>
          <p className='font-weight-bold'>{field.label}</p>
          <p className='text-muted'>{this.props.menuForm[field.name]}</p>
        </div>
      )
    });
    let availability = Number(this.props.menuForm.available) ? 'Yes' : 'No';
    return (
      <div>
        <div className="media">
          <img style={{width: '200px', height: 'auto'}} className="d-flex mr-3" src={this.props.adminTab.blob} alt="Generic placeholder image"/>
          <div className="media-body">
            {textFields}
            <p className='font-weight-bold'>Description</p>
            <p className='text-muted'>{this.props.menuForm.description}</p>
            <p className='font-weight-bold'>Available</p>
            <p className='text-muted'>{availability}</p>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <button onClick={this.props.onEditReviewCancel} className="btn btn-sm btn-outline-warning rounded-0">Back</button>
          <button onClick={() => this.sendItem(this.props.menuForm)}  className="btn btn-sm btn-success rounded-0">Add Menu Item</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({form, adminTab}) {
  return {
    menuForm: form.menuForm.values,
    adminTab
  }
}

export default connect(mapStateToProps, actions)(withRouter(AdminMenuFormReview));