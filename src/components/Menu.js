import React, { useState, useEffect } from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import AddMenuItemForm from './AddMenuItemForm'

function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch menu items from an API or a local data source
    // Set the menu items to the state variable when the data is fetched
    // Set the loading state to false when the data is fetched
  }, [])

  function addMenuItem(newMenuItem) {
    // Add the new menu item to the state variable
    // Send a request to an API to save the new menu item
  }

  return (
    <div>
      <h1>Menu</h1>
      {loading ? (
        <CirclesWithBar color="#00BFFF" height={80} width={80} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((menuItem) => (
              <tr key={menuItem.id}>
                <td>{menuItem.name}</td>
                <td>{menuItem.description}</td>
                <td>{menuItem.price}</td>
                <td><img src={menuItem.image} alt={menuItem.name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <AddMenuItemForm onAddMenuItem={addMenuItem} />
    </div>
  )
}

export default Menu