import { CDN_URL } from "../constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, sla, avgRating } =
    resData?.info;
  return (
    <div className="w-9/12 h-5/6 shadow-2xl rounded-lg m-12 p-2 font-bold hover:bg-slate-100 hover:scale-110">
      <div className="flex p-1">
        <div className="flex flex-col relative">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="name"
            className="rounded-lg"
          />
          <h4 className="absolute w-full bottom-[-9px] left-[-9px] p-4 h-16 rounded-lg font-bold text-white  bg-gradient-to-t from-slate-800 text-lg">
            {costForTwo}
          </h4>
        </div>
      </div>
      <div className="card_info">
        <h3 className="res_name">{name}</h3>
        <h4 className="cuisine text-gray-700">{cuisines.join(", ")}</h4>
        <h4 className="res_rating">{avgRating + " ⭐"} </h4>
        <h4 className="res_time">{sla.deliveryTime + " Min"}</h4>
      </div>
    </div>
  );
};

export const HasOffer = (RestaurantCard) => {
  return (res) => {
    return (
      <div className="relative">
        <h4 className="absolute bg-black text-neutral-50 font-bold w-36 top-0 p-2 rounded-lg z-50 left-4">
          Offers Available
        </h4>
        <RestaurantCard {...res} />
      </div>
    );
  };
};

export default RestaurantCard;
