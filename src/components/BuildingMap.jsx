export default function BuildingMap() {

  const buildings = [
    {
      id: 1,
      name: 'Garuda Bhive',
      city: 'Bangalore',
      floors: 12,
      health: 72
    },
    {
      id: 2,
      name: 'Marathon Futurex',
      city: 'Mumbai',
      floors: 9,
      health: 64
    },
    {
      id: 3,
      name: 'Tech Park One',
      city: 'Hyderabad',
      floors: 15,
      health: 81
    }
  ]

  return (
    <div>

      <div className='section-title'>
        <h2>Building Locations</h2>
        <p>Campus building details and health overview</p>
      </div>

      <div className='building-grid'>

        {
          buildings.map((building) => (

            <div className='building-card' key={building.id}>

              <div className='building-top'>
                <h3>{building.name}</h3>

                <span
                  className='health-badge'
                  style={{
                    background:
                      building.health > 75
                        ? '#166534'
                        : '#854d0e'
                  }}
                >
                  {building.health}%
                </span>

              </div>

              <p>{building.city}</p>

              <p>{building.floors} Floors</p>

              <div className='mini-map'>
                📍 Building Location
              </div>

            </div>

          ))
        }

      </div>

    </div>
  )
}