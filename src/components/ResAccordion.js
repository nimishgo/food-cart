import { useState } from "react";

import MenuList from "./MenuList";

const ResAccordion = ({ menuList }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("data-value");

    setOpenSection((prevSection) => (prevSection === value ? null : value));
  };

  return (
    <div className="h-[180vh]">
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
            {openSection === x?.card?.card?.title && (
              <MenuList resMenu={x.card.card.itemCards} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResAccordion;
