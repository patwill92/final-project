import axios from "axios";

export default {
  // Gets all books
  getMenus: function() {
    return axios.get("/api/menus");
  },
  getOrders: function() {
    return axios.get("/api/orders")
  },
  // Deletes the book with the given id
  deleteMenu: function (id) {
    return axios.delete("/api/menus/" + id);
  },
  // Gets the book with the given id
  getMenu: function(id) {
    return axios.get("/api/menus/" + id);
  },
  // Saves a book to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menus", menuData);
  }
};