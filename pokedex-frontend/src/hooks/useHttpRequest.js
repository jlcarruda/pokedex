import { useState, useEffect } from 'react'

export default function useHttpRequest(url = "", options = null) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true;
    setLoading(true)

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err)
          setData(null)
        }
      })
      .finally(() => isMounted && setLoading(false))

    return () => { isMounted = false }
  }, [url, options])

  return { data, error, loading }
}
