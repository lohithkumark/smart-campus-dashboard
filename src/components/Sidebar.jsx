export default function Sidebar({ activePage, setActivePage }) {

  const menuItems = [
    'overview',
    'updates',
    'analytics',
    'map'
  ]

  return (
    <div className='sidebar'>

      <h2>Campus Dashboard</h2>

      {/* sidebar navigation items */}
      {
        menuItems.map((item) => (
          <button
            key={item}
            className={activePage === item ? 'active-btn' : ''}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))
      }

    </div>
  )
}