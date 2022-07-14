import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {
  const [plant, setPlant] = useState([]) 
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setPlant(data))
  },[])

  const filteredSearch= plant.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  function removePlant(plantToremove){
    fetch(`http://localhost:6001/plants/${plantToremove.id}`, {
      method: 'DELETE'
    })
    const showRestOfPlants= plant.filter(plant => {
      return plant.id !== plantToremove.id
    })
      setPlant(showRestOfPlants)
  }

  const addNewPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newData => setPlant([...plant, newData]))
  }
  
  return (
    <div className="app">
      <Header />
      <PlantPage plant={plant} search={search} setSearch={setSearch} filteredSearch={filteredSearch} removePlant={removePlant} addNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;
