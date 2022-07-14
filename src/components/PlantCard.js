import React from "react";
import { useState } from "react";

function PlantCard({plant, removePlant}) {

  const [inStock, setInStock] = useState(true) 

  const stockSwitch= () => {
    setInStock((inStock) => false)
  }

  const handleDelete= () => {
    removePlant(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={stockSwitch} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
        <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
