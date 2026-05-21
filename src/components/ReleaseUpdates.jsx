export default function ReleaseUpdates() {

  const updates = [
    {
      title: 'Dashboard customization released',
      version: 'v3.4.0',
      status: 'Completed'
    },
    {
      title: 'Email notifications added',
      version: 'v3.4.1',
      status: 'Testing'
    },
    {
      title: 'Energy monitoring improvements',
      version: 'v3.5.0',
      status: 'In Progress'
    }
  ]

  return (
    <div>

      <div className='section-title'>
        <h2>Recent Product Updates</h2>
        <p>Latest internal system changes</p>
      </div>

      <div className='updates-grid'>

        {
          updates.map((update, index) => (

            <div className='update-card' key={index}>

              <h3>{update.title}</h3>

              <p>{update.version}</p>

              <span className='update-badge'>
                {update.status}
              </span>

            </div>

          ))
        }

      </div>

    </div>
  )
}