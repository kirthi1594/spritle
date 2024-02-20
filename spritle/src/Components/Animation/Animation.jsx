import React, { useEffect } from "react";
import "./Animation.css";

const Animation = () => {
  useEffect(() => {
    showAnimation();
  }, []);
  const showAnimation = () => {
    const objectsArr = Array.from({ length: 5 }, (_, index) => index + 1);

    for (let count = 1; count <= objectsArr.length; count++) {
      document
        .getElementById(`centered-${count}`)
        .classList.add(`elem${count}`);
    }
  };
  return (
    <div>
      <div className="animation-container">
        <div className="centeredElem"></div>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            id={`centered-${index + 1}`}
            className={`centered image${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Animation;
