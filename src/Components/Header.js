import React from "react";

function Header(props) {
  console.log("Header:", props.cardData);

  return (
    <div className="Cartshop">
      <span>{props.cardData.length}</span>
    </div>
  );
}

export default Header;
