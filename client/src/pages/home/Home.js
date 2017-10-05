import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from "../../components/Navbar/Navbar"

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Home</h1>
            <p className="lead">Window Width: {this.props.width}</p>
            <p className="lead">Scroll Position: {this.props.scroll}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({window}) => {
  return {
    width: window.width,
    scroll: window.scroll
  }
};

export default connect(mapStateToProps)(Home)
