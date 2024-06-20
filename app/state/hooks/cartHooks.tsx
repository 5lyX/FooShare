import { useRecoilState } from "recoil";

import { ItemInCart, cartState } from "../atoms/cartState";
import { FoodItem } from "../../../components/FoodOrderCard";

export const useAddProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return (food: FoodItem) => {
    const index = cart.findIndex((item) => item.id === food.id);

    if (index === -1) {
      return setCart([...cart, { ...food, quantity: 1 }]);
    }

    const newCart = cart.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(newCart);
  };
};

export const useRemoveProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return (food: FoodItem) => {
    // const index = cart.findIndex((item) => item.id === food.id);

    // if (index !== -1) {
    //   //   const newCart = cart
    //   //     .map((item, i) => {
    //   //       if (i === index) {
    //   //         item = { ...item, quantity: item.quantity - 1 };
    //   //       }
    //   //     });
    //   //   return item;
    //   // })
    //   // .filter((item) => item.quantity > 0);

    //   setCart(newCart);
    // }
    const itemInCart = cart.find((item) => item.id === food.id);
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        const removeFromCart = cart.filter((item) => item.id !== food.id);
        setCart(removeFromCart);
      } else {
        const removeFromCart = cart.map((item) => {
          if (item.id == food.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCart(removeFromCart);
      }
    }
  };
};
