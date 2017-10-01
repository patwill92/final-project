import React, {Component} from 'react';

const style = {
  maxWidth: '350px'
};
class AuthModal extends Component {
  render() {
    return (
      <div  className='modal fade' id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby={`${this.props.id}Label`} aria-hidden="true">
        <div style={style} className="modal-dialog" role="document">
          <div style={style} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${this.props.id}Label`}>{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pt-4 pb-4">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthModal;

