import React from "react";
import trendingIcon from "./assets/icons/trending.svg";
import newReleaseIcon from "./assets/icons/newRelease.svg";
import comingSoonIcon from "./assets/icons/commingSoon.svg";
import favouriteIcon from "./assets/icons/favourite.svg";
import watchLaterIcon from "./assets/icons/watchLater.svg";

const menuItems = [
  { icon: trendingIcon, label: "Trending", active: true },
  { icon: newReleaseIcon, label: "New Releases" },
  { icon: comingSoonIcon, label: "Coming Soon" },
  { icon: favouriteIcon, label: "Favourites" },
  { icon: watchLaterIcon, label: "Watch Later" },
];

const Sidebar = () => {
  return (
    <aside className="p-4">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={`
                flex items-center space-x-3 px-5 py-3.5 rounded-lg
                text-sm font-medium transition-all duration-200
                ${item.active
                  ? "bg-[#39e1aa] text-black shadow"
                  : "hover:bg-[#20232a] hover:text-white text-gray-400"}
              `}
            >
              <img
                src={item.icon}
                width="20"
                height="20"
                alt={item.label}
                className="opacity-80"
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
