import React from "react";
import "../css/popup.css"
import image from "../img/hahafunny.jpg"
export const Popup = ({ closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <button onClick={closePopup}>Close</button>
      <img src={image} />
     </div>
    </div>
  );
};