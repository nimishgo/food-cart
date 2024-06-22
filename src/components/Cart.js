import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center mx-auto p-10 w-6/12 flex-col items-start h-full">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-black font-bold text-white px-4 py-2 rounded-lg"
        onClick={handleClearCart}
      >
        clear cart
      </button>
      <div>
        {cartItems.length == 0 ? (
          <h1>Your cart is empty. Add items to cart</h1>
        ) : (
          <MenuList resMenu={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
