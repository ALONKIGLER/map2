import React, { useState, useEffect } from "react";

function FlatListPlace(props) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch(
      "https://my.foodtrack.co.il/api/app/truck_by_distance.php?lat=37.785834&lng=-122.406417"
    )
      .then((response) => response.json())
      .then((data) => {
        setArray(data);
      });
  }, []);

  return (
    <div>
      {array.length > 0
        ? array.map((list, index) => (
            <div key={index} className="object_list">
              <h3>{list.slogan}</h3>
              <img className="logo" src={list.logo} alt="" />
              <p> {list.name}</p>
              <p> {list.phone}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default FlatListPlace;
