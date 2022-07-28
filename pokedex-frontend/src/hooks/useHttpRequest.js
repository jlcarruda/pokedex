import { useState, useEffect } from 'react'

export default function useHttpRequest(url = "", options = null) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true;
    setLoading(true)
    console.log(url, options)
    fetch(url, options)
      .then(res => {
        console.log(res)
        
        return res.json()
      })
      .then(data => {
        console.log(data)
        if (isMounted) {
          setData(data.data)
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
