export const calcTotalPrice = (items) =>
  items.reduce((acc, dish) => (acc += dish.price), 0);
