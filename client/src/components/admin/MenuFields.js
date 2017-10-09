import React from 'react'

export const myFields = [
  {name: 'name', type: 'text', label: 'Name'},
  {name: 'price', type: 'text', label: 'Price'},
  {name: 'category', type: 'text', label: 'Category'}
];

export const TextField = ({input, label}) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} className='form-control rounded-0'/>
  </div>
);

export const TextAreaField = ({input, label}) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea {...input} className="form-control rounded-0" rows="3"/>
  </div>
);

export const ImageField = ({input, label}) => {
  return (
    <div className='form-group'>
      <label>Image</label>
      <input type='file' {...input} value={null} className={'form-control-file'}/>
      {label && <img style={{width: 'auto', maxHeight: '180px'}} src={label} alt="" className='mt-3'/>}
    </div>
  )
};

export const RadioYes = ({input}) => (
  <div className="form-check form-check-inline">
    <label className="form-check-label">
      <input type='radio' {...input} className="form-check-input" value='1' checked={input.value === "1"}/> Yes
    </label>
  </div>
);

export const RadioNo = ({input}) => (
  <div className="form-check form-check-inline">
    <label className="form-check-label">
      <input type='radio' {...input} className="form-check-input" value='0' checked={input.value === "0"}/> No
    </label>
  </div>
);