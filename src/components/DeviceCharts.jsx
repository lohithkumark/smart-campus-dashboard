import { useFetch } from '../hooks/useFetch'

export default function DeviceCharts() {

  const {
    data,
    loading,
    error
  } = useFetch('/data/deviceHealth.json')

  if (loading) {
    return <p>Loading analytics data...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>

      <div className='section-title'>
        <h2>Device Health Analytics</h2>
        <p>Monthly device performance overview</p>
      </div>

      <div className='analytics-grid'>

        {
          data.map((item) => (

            <div
              className='analytics-card'
              key={item.month}
            >

              <div className='analytics-top'>
                <h3>{item.month}</h3>

                <span className='device-count'>
                  {item.healthy}
                </span>
              </div>

              <div className='progress-bar'>

                <div
                  className='progress-fill'
                  style={{
                    width: `${item.healthy / 3}%`
                  }}
                ></div>

              </div>

              <p className='analytics-text'>
                Healthy devices this month
              </p>

            </div>

          ))
        }

      </div>

    </div>
  )
}