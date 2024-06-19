import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  if (resMenu == null) {
    return <Shimmer />;
  }

  const { name, city, cuisines, costForTwo } = {
    ...resMenu?.cards[2]?.card?.card?.info,
  };

  console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  const itemList =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards !== undefined
      ? resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      : resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h4>{"cost for 2 " + costForTwo / 100 + " Rs"}</h4>
      <div>Menu</div>
      <ul>
        {itemList.map((x) => {
          return (
            <li key={x.card.info.name}>
              <div>
                <span>{x.card.info.name}</span>
                <span>
                  {" Rs. " +
                    Math.floor(
                      (x.card.info.price ?? x.card.info.defaultPrice) / 100
                    )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
