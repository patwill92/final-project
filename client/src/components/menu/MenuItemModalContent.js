import React, {Component} from 'react';
import axios from 'axios';

const Checkbox = props => (
  <div className="form-check">
    <label className="form-sides-label">
      <input value={props.item.toLowerCase()} name={props.item} onChange={props.sidesChange} type="checkbox" className="form-check-input mr-2"/>
      {props.item}
    </label>
  </div>
);

class MenuItemModalContent extends Component {
  state = {
    text: '',
    sides: [],
    qty: 1
  };

  toggleCheckbox = () => {
    let arrayOld = ['apple', 'orange', 'fig'];
    let index = 1;
    let arrayNew = [...arrayOld.slice(0, index), ...arrayOld.slice(index + 1)];
  };

  handleInputChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  sidesChange = (e) => {
    if(e.target.checked)
      this.setState({sides: [...this.state.sides, e.target.value]});
    else
      this.setState({sides: [...this.state.sides.slice(0, this.state.sides.indexOf(e.target.value)), ...this.state.sides.slice(this.state.sides.indexOf(e.target.value) + 1)]});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/add_cart/${this.props.info.id}`, this.state)
      .then(res => {
        console.log(res.data);
      })
  };

  render() {
    let name = this.props.info.name;
    let price = this.props.info.price;
    let id = this.props.info.id;
    let qty = Array(10).fill().map((item, index) => {
      return (
        <option className="order-option" key={index}>{index + 1}</option>
      )
    });
    let myList = ['Fries', 'Sweet Potato Fries', 'Warm Potato Salad', 'Texas Toast', 'Quinoa', 'House Salad', 'Cesar Salad', 'pudding'];
    let cbxList1 = myList.slice(0, myList.length / 2);
    let cbxList2 = myList.slice(myList.length / 2);
    cbxList1 = cbxList1.map((item, i) => (<Checkbox sidesChange={this.sidesChange} item={item} key={i}/>));
    cbxList2 = cbxList2.map((item, i) => (<Checkbox sidesChange={this.sidesChange} item={item} key={i}/>));
    return (
      <form>
        <div className="card border-0 mb-0 rounded-0">
          <div className="card-body pb-3">
            <div className='d-flex flex-row justify-content-between align-items-center mb-4'>
              <div className="form-group mb-0">
                <label htmlFor={`qty-${name}`}>Quantity</label>
                <select onChange={this.handleInputChange} name='qty' value={this.state.qty} className="form-control mb-0 rounded-0" id={`qty-${name}`}>
                  {qty}
                </select>
              </div>
              <p style={{fontWeight: 500}} className="mb-0">${price}.00</p>
            </div>
            <div  className="alert alert-primary rounded-0" role="alert">
              Sides
            </div>
            <div className='d-flex flex-row justify-content-between align-items-end'>
              <div className='d-flex flex-column justify-content-between align-items-start pl-4 pr-4'>
                {cbxList1}
              </div>
              <div className='d-flex flex-column justify-content-between align-items-start pl-4 pr-4'>
                {cbxList2}
              </div>
            </div>
            <div className="form-group mb-0 mt-2">
              <textarea onChange={this.handleInputChange} name='text' value={this.state.text} style={{fontSize: '0.8rem'}} className="form-control rounded-0" id={`txt-${this.props.name}`} rows="4"
                        placeholder='Add special instructions (additional charges may apply)'></textarea>
            </div>
          </div>
          <div className="card-footer bg-transparent d-flex justify-content-between">
            <button data-dismiss="modal" aria-label="Close" className="btn btn-outline-danger rounded-0">Cancel</button>
            <button onClick={this.handleSubmit} type='submit' className="btn btn-success rounded-0"><i className="fal fa-shopping-bag"></i> Add to Lunchbox</button>
          </div>
        </div>
      </form>
    )
  }
}

export default MenuItemModalContent;