import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">EGG Muffins</h2>
          <p className="mb-2"> Crispy, Delicious, and Nutritious</p>
          <span>$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">EGG Salad</h2>
          <p className="mb-2"> Crispy, Delicious, and Nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
