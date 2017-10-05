import React, {Component} from 'react';
import styles from './OrderList.css';
import openSocket from 'socket.io-client'
import API from '../../api/api'
import AdminNavbar from "../AdminNavBar/AdminNavbar"

const uri = "http://locathost:8080";

const socket = openSocket('http://localhost:8080');

class OrderList extends Component {

    state = {
        value: " ",
        comments: []
    };
    
    componentDidMount() {
        socket.on("refresh feed", (msg) => {
            this.setState({
                comments: [msg, ...this.state.comments]
            })
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
                    <div className={styles.show_comments}>
                        {this.state.comments}
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList