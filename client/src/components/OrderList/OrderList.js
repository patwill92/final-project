import React, {Component} from 'react';
import styles from './OrderList.css';
import openSocket from 'socket.io-client'
import API from '../../utils/API'
import AdminNavbar from "../AdminNavBar/AdminNavbar"

const uri = "http://locathost:8080";

const socket = openSocket('http://localhost:8080');

const style = {
    boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
  };

class OrderList extends Component {
   

    state = {
        value: " ",
        comments: []
    };
    
    componentDidMount() {
        socket.on("refresh feed", (msg) => {
            console.log(msg)
        })
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
          value: event.target.value
        })
      };

    post = (event) => {
        event.preventDefault()
        socket.emit('status added', this.state.value);
    }

    render() {
        return (
            <div>
                <AdminNavbar/>
                <div>
                <form onSubmit={this.post}>
                <textarea type="text" value={this.state.value} onChange={this.handleChange} rows="5" cols="70"/><br /><br />
                <input type="submit" value="Submit"/>
                </form>
                <div className={styles.show_comments}
                >{this.state.comments}
                </div>
            </div>
            </div>
        )
    }
}

export default OrderList