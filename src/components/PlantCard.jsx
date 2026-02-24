import React from "react";

function PlantCard({ plant, onUpdatePlant }) {

  function handleToggleStock() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inStock: !plant.inStock,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));
  }

  return (
    <li className="card" data-testid="plant-item">

      <img
        src="https://via.placeholder.com/400"
        alt="plant name"
      />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      <button onClick={handleToggleStock}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>

    </li>
  );
}

export default PlantCard;