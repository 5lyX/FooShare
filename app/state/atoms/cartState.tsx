import { atom } from "recoil";

export interface ItemInCart {
  id: number;
  quantity: number;
  imageSource: any;
  price: number;
}

export const cartState = atom({
  key: "cartState",
  default: [] as ItemInCart[],
});
