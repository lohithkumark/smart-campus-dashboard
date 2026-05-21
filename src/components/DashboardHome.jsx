export default function DashboardHome() {

  return (
    <div>

      <div className='hero-box'>
        <h2>Good Evening 👋</h2>
        <p>
          Most building systems are operating normally today.
        </p>
      </div>

      <div className='stats-grid'>

        <div className='stat-card'>
          <div className='stat-title'>Buildings</div>
          <div className='stat-value'>2</div>
        </div>

        <div className='stat-card'>
          <div className='stat-title'>Users</div>
          <div className='stat-value'>5</div>
        </div>

        <div className='stat-card'>
          <div className='stat-title'>Assets</div>
          <div className='stat-value'>279</div>
        </div>

        <div className='stat-card'>
          <div className='stat-title'>Rooms</div>
          <div className='stat-value'>9</div>
        </div>

        <div className='stat-card'>
          <div className='stat-title'>Health Score</div>
          <div className='stat-value'>63%</div>
        </div>

      </div>

    </div>
  )
}