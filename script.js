function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
}
  // Change code above this line
let message = `You ordered droids worth ${totalPrice} credits. 
Delivery ${deliveryFee} is included in total price.`;