import RestaurantCard, { HasOffer } from "./RestaurantCard";
import { API } from "../constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResList, setFilterResList] = useState([]);
  const [set, reset] = useState(false);
  const ResWithOffer = HasOffer(RestaurantCard);
  const fetchData = async (api) => {
    const resListJson = await fetch(api, { mode: "cors" });
    const resList = await resListJson.json();
    const resData =
      resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setresList(resData);
    setFilterResList(resData);
  };

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    fetchData(API);
  }, []);

  return resList.length == 0 ? (
    <div className="card_container">
      <Shimmer />
    </div>
  ) : (
    <div className="body-container">
      <div className="flex">
        <div className="p-6 flex space-x-2">
          <input
            type="text"
            className="search-box border-slate-500 border-solid border-2 rounded-lg ml-8"
            value={searchText}
            onChange={handleInput}
          />
          <button
            onClick={() => {
              const filteredData = resList.filter((x) => {
                return x.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterResList(filteredData);
            }}
            className="bg-sky-500 px-4 py-2 text-neutral-50 rounded-lg hover:scale-110"
          >
            search
          </button>
          <button
            className="bg-rose-400 h-6 p-6 flex flex-col justify-center items-center rounded-lg text-white"
            onClick={() => {
              if (!set) {
                setFilterResList(resList.filter((x) => x.info.avgRating > 4.0));
                reset(true);
              } else {
                setFilterResList(resList);
                reset(false);
              }
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="card_container">
        {filterResList.map((res) => (
          <Link
            to={`restaurants/${res.info.id}`}
            key={res.info.id}
            className="link"
          >
            {/* {console.log()} */}
            {res?.info?.aggregatedDiscountInfoV3?.header != "ITEMS" ? (
              <RestaurantCard resData={res} />
            ) : (
              <ResWithOffer resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
