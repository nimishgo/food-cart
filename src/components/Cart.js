import { useSelector } from "react-redux";
import MenuList from "./MenuList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center mx-auto p-10 w-6/12">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div>
        <MenuList resMenu={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
