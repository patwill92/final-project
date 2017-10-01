import React, {Component} from 'react';
import API from "../../utils/API"

class Admin extends Component {
  state = {
    menus: [],
    menuType: "",
    menuSection: ""
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

  deleteMenu = id => {
    API.deleteMenu(id)
      .then(res => this.loadmenus())
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
              <table className="table">
                <thead className="thead-default">
                <tr>
                  <th>Menu Type</th>
                  <th>Section </th>
                  <th>Item </th>
                  <th>Description </th>
                  <th>Price </th>
                  <th>Available</th>
                  <th>Special </th>
                </tr>
                </thead>
                <tbody>
                {this.state.menus.map(menu => (
                  <tr key={menu._id}>
                    <TypeHeader menuType={menu.menuType}/>
                    <td>{menu.menuSection} </td>
                    <td>{menu.itemName} </td>
                    <td>{menu.itemDescription} </td>
                    <td>{menu.itemPrice} </td>
                    {menu.available ? (
                      <td>Yes</td>
                    ) : (
                      <td>No</td>
                    )
                    }
                    {menu.special ? (
                      <td>Yes</td>
                    ) : (
                      <td>No</td>
                    )
                    }
                    <td><button type="submit"
                                className="btn btn-default"
                                onClick={this.handleEditMenu}
                                id="editMenu"><i className="fa fa-pencil"></i> Edit</button> </td>
                    <td><button type="submit"
                                className="btn btn-default"
                                onClick={() => this.deleteMenu(menu._id)}
                                id="editMenu"><i className="fa fa-window-close"></i> Delete</button> </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h3>No Menu Items Added Yet</h3>
          )}
        </div>
      </div>
    );
  }
}

let prevHeader = "";
function TypeHeader (props) {
  const typeHeaderValue = props.menuType;
  if (prevHeader === typeHeaderValue) {
    return <td>{"   "}</td>;
  } else {
    prevHeader = typeHeaderValue;
    return <td><strong>{typeHeaderValue}</strong></td>
  }
}

export default Admin;
