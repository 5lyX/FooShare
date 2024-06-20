import { selector } from "recoil";

import { cartState } from "../atoms/cartState";

export const cartStatus = selector({
  key: "cartStatus",
  get: ({ get }) => {
    const cart = get(cartState);
    const totalQuantity =
      cart.length === 0
        ? 0
        : cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    const totalPrice = !totalQuantity
      ? 0
      : cart.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0
        );

    return {
      totalQuantity,
      totalPrice,
    };
  },
});
