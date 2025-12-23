class Cart{
  cartItem;
  #localStorageKey;

  constructor(localStorageKey){
  this.#localStorageKey=localStorageKey;
  this.#loadFromStorage();
  }
  #loadFromStorage() {
  this.cartItem= JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
      deliveryOptionsId: "2",
    },
    ];
  }
  saveToStorage() {
  localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItem));
  }

  whatIsTheQuantity(productId){
  const quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  )
    return quantity;
  }

  addtocart(productId,quantity=1) {
  let matchingItem;
  this.cartItem.forEach((obj) => {
    if (obj.productId === productId) {
      matchingItem = obj;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    this.cartItem.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionsId: "1",
    });
  }
    this.saveToStorage();
  }

  removeFromCart(productId) {
  const newCart = [];
  this.cartItem.forEach((item) => {
    if (item.productId !== productId) newCart.push(item);
  });
  this.cartItem = newCart;
  this.saveToStorage();
  }

  calculateCartQuantity() {
  let cartQuantity = 0;
  this.cartItem.forEach((item) => {
    cartQuantity += item.quantity;
  });
  return cartQuantity;
  }

  updateDeliveryOption(productId, deliveryOptionsId) {
  let matchingItem;
  this.cartItem.forEach((obj) => {
    if (obj.productId === productId) {
      matchingItem = obj;
    }
  });
  matchingItem.deliveryOptionsId = deliveryOptionsId;
  this.saveToStorage();
  }
}


const cart = new Cart('cart-oop');

const businessCart = new   Cart('cart-business');

console.log(cart);
console.log(businessCart);
// cart.#localStorageKey="dawdwa";
console.log(businessCart instanceof Cart );