import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar"

class Fail extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Fail</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Fail;
