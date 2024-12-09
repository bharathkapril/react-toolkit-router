
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState()
    useEffect(() => {
        const fn = async() => {
            const response = await fetch(url)
            const resData = await response.json()
            setData(resData)
        }
        fn()
    },[url])
  return{data}
}

export default useFetch