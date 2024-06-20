import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResAccordion from "./ResAccordion";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  if (resMenu == null) {
    return <Shimmer />;
  }

  console.log(resMenu);
  console.log(
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card[
      "@type"
    ]
  );

  const { name, city, cuisines, costForTwo } = {
    ...resMenu?.cards[2]?.card?.card?.info,
  };

  const freshList = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const menuList = freshList.filter((x) => {
    console.log(x.card.card["@type"]);
    return (
      x.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="h-full mx-auto my-4 w-6/12 text-center">
      <div className="flex flex-col gap-6 justify-center">
        <span className="font-extrabold text-2xl">{name}</span>
        <div className="flex gap-6 justify-center font-semibold text-xl text-slate-600">
          <span>{"Location: " + city}</span>
          <span>{"Cuisines: " + cuisines.join(", ")}</span>
          <span>{"Cost For 2 approx. " + costForTwo / 100 + " Rs"}</span>
        </div>
      </div>
      <ResAccordion menuList={menuList} />
    </div>
  );
};

export default RestaurantMenu;
