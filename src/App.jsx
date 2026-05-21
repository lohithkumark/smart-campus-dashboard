import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardHome from './components/DashboardHome'
import ReleaseUpdates from './components/ReleaseUpdates'
import DeviceCharts from './components/DeviceCharts'
// import BuildingMap from './components/BuildingMap'
import './App.css'

export default function App() {

  const [activePage, setActivePage] = useState('overview')

  return (
    <div className='app-layout'>

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className='main-content'>

        <div className='top-bar'>
          <div>
            <h1>Smart Building Monitor</h1>
            <p>System health overview and analytics</p>
          </div>
          <div className='status-box'>
            Last updated: 10 mins ago
          </div>
        </div>

        {activePage === 'overview' && <DashboardHome />}

        {activePage === 'updates' && <ReleaseUpdates />}

        {activePage === 'analytics' && <DeviceCharts />}

        {activePage === 'map' && <h2>Map module coming soon...</h2>}

        <footer>
          Built by Lohith Kumar using React + Vite
        </footer>

      </div>
    </div>
  )
}