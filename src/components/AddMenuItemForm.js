import React, { useState } from 'react'

function AddMenuItemForm({ onAddMenuItem }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const newMenuItem = {
      name,
      description,
      price,
      image,
    }
    onAddMenuItem(newMenuItem)
    setName('')
    setDescription('')
    setPrice('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />
      <button type="submit">Add Menu Item</button>
    </form>
  )
}

export default AddMenuItemForm