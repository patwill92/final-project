import React, {Component} from 'react';
import API from "../../utils/API"

class Admin extends Component {
  state = {
    menus: []
  };

  componentDidMount() {
    this.loadmenus();
  }

  // Add code here to get all books from the database and save them to this.state.books
  loadmenus = () => {
    API.getMenus()
      .then(res => this.setState({ menus: res.data }))
      // .then(res => console.log(res.data)     )
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Admin</h1>
        </div>
        <div>
          {this.state.menus.length ? (
            <div className="list-overflow-container">
              <ul className="list-group">
                {this.state.menus.map(menu => (
                  <li className="list-group-item" key={menu._id}>
                    <p>{menu.menuType} </p>
                    <p>{menu.menuSection} </p>
                    <p>{menu.itemName} </p>
                    <p>{menu.itemDescription} </p>
                    <p>{menu.itemPrice} </p>
                    <p>{menu.available} </p>
                    <p>{menu.special} </p>
                    <p>{menu.deleted} </p>
                    {/* <DeleteBtn /> */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    );
  }
}

export default Admin;
