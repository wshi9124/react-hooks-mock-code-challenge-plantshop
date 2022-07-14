import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plant, search, setSearch, filteredSearch, removePlant, addNewPlant}) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} setSearch={setSearch}  />
      <PlantList plant={plant} filteredSearch={filteredSearch} removePlant={removePlant} />
    </main>
  );
}

export default PlantPage;
