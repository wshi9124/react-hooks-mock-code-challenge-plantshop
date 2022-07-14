import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant, filteredSearch, removePlant}) {

const plantCards= filteredSearch.map((plant) => {
  return <PlantCard key={plant.id} plant={plant} removePlant={removePlant}/>
})

  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
