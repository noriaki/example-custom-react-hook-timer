import React, { useState, useEffect } from 'react'

let timerId = null

export default ({ value, delay }) => {
  const [remaining, setRemaining] = useState(value)
  const [finishTime, setFinishTime] = useState(Date.now() + value)

  useEffect(() => {
    timerId = setInterval(() => {
      const nextRemaining = finishTime - Date.now()
      if (nextRemaining > 0) {
        setRemaining(nextRemaining)
      } else {
        setRemaining(0)
        if (timerId !== null) {
          clearInterval(timerId)
          timerId = null
        }
      }
    }, delay)
    return () => clearInterval(timerId) // <= componentWillUnmount
  }, []) // <= componentDidMount

  return <p>あと { remaining } msec</p>
}
