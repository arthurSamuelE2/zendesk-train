import { useEffect, useState } from "react"

const useRequest = ({ enabled = true, fn }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    if (enabled) {
      const fetch = async () => {
        setIsLoading(true)
        const results = await fn()
        setData(results)
        setIsLoading(false)
      }

      fetch()
    }
  }, [enabled])

  return {
    data,
    isLoading
  }
}

export default useRequest