import React from 'react'
import { useParams } from 'react-router-dom'

const Example = () => {
  const array = [1, 2, 3, 4, 5, 6, 3, 4, 34, 3, 23]
  const { userId } = useParams()
  return (
    <div>
      <h1>{userId}</h1>
      <ul>
        {array.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </div>
  )
}

export default Example
