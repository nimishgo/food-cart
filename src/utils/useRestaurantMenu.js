import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const dataJson = await data.json();
    setResMenu(dataJson.data);
  };

  return resMenu;
};
export default useRestaurantMenu;
