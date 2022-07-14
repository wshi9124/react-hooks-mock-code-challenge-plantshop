import React from "react";
import { useState } from "react";


function NewPlantForm({addNewPlant}) {
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [price, setPrice] = useState ('')

const handleSubmit= (e) => {
  e.preventDefault()
  const newPlant= {
    name:name,
    image:image,
    price:price
  }
  addNewPlant(newPlant)
}

const handleNameChange= (e) => {
  setName(e.target.value)
}

const handleImageChange= (e) => {
  setImage(e.target.value)
}

const handlePriceChange= (e) => {
  setPrice(e.target.value)
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
