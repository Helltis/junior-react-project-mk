const TAX = 21;

export function itemPrice(item, currencyIndex) {
  return (item.prices[currencyIndex].amount * item.quantity).toFixed(2);
}

export function calculateTotalWithTax(products, currencyIndex) {
  let total = products.reduce(
    (total, item) => total + item.prices[currencyIndex].amount * item.quantity,
    0
  );
  total += (total / 100) * TAX;
  return total.toFixed(2);
}

export function calculateTotal(products, currencyIndex) {
  let total = products.reduce(
    (total, item) => total + item.prices[currencyIndex].amount * item.quantity,
    0
  );
  return Number(total.toFixed(2));
}

export function calculateTax(total) {
  return Number(((total / 100) * TAX).toFixed(2));
}
