function Cart(currentCart){
  if(!currentCart.items) {
    this.items = [];
  } else {
    this.items = currentCart.items;
  }
  this.totalPrice = currentCart.totalPrice ? currentCart.totalPrice : 0;
  this.totalQty = currentCart.totalQty ? currentCart.totalQty : 0;
  this.addToCart = (item) => {
    if (this.items.length === 0) {
      this.items = [...this.items, item]
    } else {
      let repeat = false;
      for(let index = 0; index < this.items.length; index ++) {
        if(String(item.id) === String(this.items[index].id)) {
          if(item.text === this.items[index].text && item.sides.join('') === this.items[index].sides.join('')){
            this.items[index].qty += item.qty;
            repeat = true;
            break;
          }
        }
      }
      if(!repeat) {
        this.items = [...this.items, item]
      }
    }
    this.totalQty += item.qty;
    this.totalPrice += item.price * item.qty;
  };
}

module.exports = Cart;
