
import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'
// import Dashboardadmin from './components/Dashboardadmin'
// import RestaurantFoodList from './components/RestaurantFoodList'

import Menu from './components/Menu'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboardadmin /> */}
      <BrowserRouter>
      <Routes>
      <Route path="/menu" element={<Menu />} />
    </Routes>
    </BrowserRouter>
      {/* <RestaurantFoodList/> */}
    </div>
  )
}

export default App