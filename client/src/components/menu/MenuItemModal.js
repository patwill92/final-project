import React, {Component} from 'react';

import MenuItemModalContent from './MenuItemModalContent'

class MenuItemModal extends Component {
  render() {
    return(
      <div  className='modal fade' id={`${this.props.info.id}-modal`} tabIndex="-1" role="dialog" aria-labelledby={`${this.props.info.id}Label`} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-0">
            <div style={{backgroundColor: '#e7e8ea'}} className="modal-header">
              <h5 style={{fontWeight: 400, color: '#464a4e'}} className="modal-title" id={`${this.props.info.id}-modal-label`}>{this.props.info.name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <MenuItemModalContent
                info={this.props.info}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItemModal