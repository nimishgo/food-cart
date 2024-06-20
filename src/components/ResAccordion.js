import { CDN_URL } from "../constants";
import { useState } from "react";

const ResAccordion = ({ menuList }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");

    setOpenSection((prevSection) => (prevSection === value ? null : value));
  };

  return (
    <div>
      {menuList.map((x) => (
        <div key={x?.card?.card?.title}>
          <div
            className="p-4 m-4 border-b-2 border-solid border-slate-400 rounded-lg font-extrabold flex items-center justify-between cursor-pointer"
            data-value={x.card.card.title}
            onClick={handleClick}
          >
            <span>
              {x.card.card.title} {` - (${x.card.card.itemCards.length})`}
            </span>
            <span
              className={`-scale-90 ${
                openSection === x.card.card.title ? "rotate-180" : ""
              }`}
            >
              ⬆
            </span>
          </div>
          <div>
            {openSection === x?.card?.card?.title &&
              x.card.card.itemCards.map((item) => (
                <div
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
                    <button className="absolute bg-stone-900 text-neutral-50 -bottom-[10] left-1/3 px-4 py-2 font-bold rounded-lg">
                      Add +
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResAccordion;
