import { useEffect, useState } from 'react'

export function useFetch(url) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    // fetching dashboard data
    setTimeout(() => {

      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result)
          setLoading(false)
        })
        .catch(() => {
          setError('Unable to load data')
          setLoading(false)
        })

    }, 1200)

  }, [url])

  return {
    data,
    loading,
    error
  }
}