import React from "react";

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
        return <div key={index}> {d.title} </div>;
      })}
    </div>
  );
};

export default Sidebar;
