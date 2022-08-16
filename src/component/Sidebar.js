import React from "react";
import book from "../static/images/book.png";

let data = [
  {
    title: "FIVE FEET APART",
    author: "By xyz",
    description:
      "In this moving story two teens fall in love with just one minor complica...",
  },
  {
    title: "FIVE FEET APART",
    author: "By xyz",
    description:
      "In this moving story two teens fall in love with just one minor complica...",
  },
  {
    title: "FIVE FEET APART",
    author: "By xyz",
    description:
      "In this moving story two teens fall in love with just one minor complica...",
  },
];

const Sidebar = () => {
  return (
    <div>
      {data.map((d, index) => {
        return (
          <div key={index} className="bg-white rounded-lg">
            <div className=" flex  mt-2  py-2 px-2">
              <img
                src={book}
                alt="Logo"
                width="58"
                height="68"
                className="h-14 w-12 rounded-lg"
              />
              <div className="ml-4">
                <div className="text-base font-light"> {d.title} </div>
                <div className="text-xs"> {d.author}</div>
              </div>
            </div>
            <div className="text-sm px-2 py-1 ">{d.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
