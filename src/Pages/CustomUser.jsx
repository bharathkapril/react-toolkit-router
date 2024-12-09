import React from 'react'
import useFetch from '../hooks/useFetch'

const CustomUser = () => {
    const {data} = useFetch('https://jsonplaceholder.typicode.com/users')
    console.log(data)
  return (
    <div>{data && data.map(d => (
        <ul key={d.id}>
            <li>{d.name}</li>
        </ul>
    ))}</div>
  )
}

export default CustomUser