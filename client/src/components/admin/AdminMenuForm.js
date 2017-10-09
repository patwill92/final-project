import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions'

import {
  myFields, ImageField, TextField,
  TextAreaField,RadioYes, RadioNo
} from "./MenuFields";

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class AdminMenuForm extends Component {
  state = {
    imgSrc: ''
  };

  onImgChange = (e) => {
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.props.getImageSrc({blob: reader.result})
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    let myTextFields = myFields.map((item, i) => {
      return (
        <Field
          key={item.name + '-' + i}
          label={item.label}
          type={item.type}
          name={item.name}
          component={TextField}
        />
      )
    });
    return (
      <div>
        <form style={style} className={'mt-3 border border-secondary p-3'} onSubmit={this.props.handleSubmit(this.props.onMenuFormSubmit)}>
          <Field name="avatar"
                 label={this.props.adminTab.blob}
                 onChange={this.onImgChange}
                 component={ImageField}/>
          {myTextFields}
          <Field name="description"
                 label='Description'
                 component={TextAreaField}/>
          <legend className='col-form-legend'>Availability</legend>
          <Field
            name='available'
            component={RadioYes}
          />
          <Field
            name='available'
            component={RadioNo}
          />
          <br/>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <Link to='/menu' className="mt-2 btn btn-sm btn-danger rounded-0">Cancel</Link>
            <button type='submit' className="mt-2 btn btn-sm btn-outline-success rounded-0">Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({adminTab}) {
  return {
    adminTab
  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'menuForm',
  destroyOnUnmount: false
})(AdminMenuForm));