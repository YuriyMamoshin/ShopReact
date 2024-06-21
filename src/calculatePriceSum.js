export default function calculatePriceSum(cartDataArray) {
  return cartDataArray.reduce((prevAmount, cartItem) => {
    return prevAmount + cartItem.price * cartItem.amount;
  }, 0);
}
