import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../constants";

const MenuList = ({ resMenu }) => {
  const dispatch = useDispatch();
  const funAddItems = (item) => {
    dispatch(addItem(item));
  };
  console.log(resMenu);
  return (
    <>
      {resMenu?.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.name}
          className="flex justify-between items-center border-b-2 border-solid border-slate-400 p-4 shadow-lg rounded-lg m-4"
        >
          <div className="text-left w-8/12">
            <h4>{item.card.info.name}</h4>
            <h4>Rs. {item.card.info.price / 100}</h4>
            <h4>{item.card.info.description}</h4>
          </div>
          <div className="relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-48 h-36 object-cover shadow-xl rounded-lg"
            />
            <button
              className="absolute bg-stone-900 text-neutral-50 -bottom-[10] left-1/3 px-4 py-2 font-bold rounded-lg"
              onClick={() => funAddItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default MenuList;
