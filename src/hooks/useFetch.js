import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setError(null)
        setLoading(false)
      })
      .catch((e) => {
        console.warn(e.message)
        setError('error fetching data')
        setLoading(false)
      })
  }, [url])

  return {
    loading,
    data,
    error,
  }
}
