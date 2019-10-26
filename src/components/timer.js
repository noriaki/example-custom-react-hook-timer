import React, { useState, useEffect } from 'react'

let timerId = null

export default ({ value, delay }) => {
  const [remaining, setRemaining] = useState(value)
  const [finishTime, setFinishTime] = useState(Date.now() + remaining)
  const [isActive, setActive] = useState(true)

  useEffect(() => {
    start()
    return () => stop() // <= componentWillUnmount
  }, [finishTime]) // <= componentDidMount, when `finishTime` is updated

  const start = () => {
    timerId = setInterval(() => {
      const nextRemaining = finishTime - Date.now()
      if (nextRemaining > 0) {
        setRemaining(nextRemaining)
      } else {
        setRemaining(0)
        stop()
      }
    }, delay)
    setActive(true)
  }

  const stop = () => {
    setActive(false)
    if (timerId !== null) {
      clearInterval(timerId)
      timerId = null
    }
  }

  const restart = () => setFinishTime(Date.now() + remaining)

  const reset = () => setRemaining(value)

  return (
    <div>
      <p>あと { remaining } msec</p>
      { !isActive && remaining > 0 && <button onClick={restart}>開始</button> }
      { isActive && <button onClick={stop}>一時停止</button> }
      { !isActive && remaining !== value && <button onClick={reset}>リセット</button> }
    </div>
  )
}
