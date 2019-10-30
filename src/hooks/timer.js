import { useState, useEffect, useRef } from 'react'

let timerId = null

export default ({ value, delay }) => {
  const [remaining, setRemaining] = useState(value)
  const [finishTime, setFinishTime] = useState(Date.now() + remaining)
  const [isActive, setActive] = useState(true)
  const timerId = useRef(null)

  useEffect(() => {
    start()
    return () => stop() // <= componentWillUnmount
  }, [finishTime]) // <= componentDidMount, when `finishTime` is updated

  const start = () => {
    timerId.current = setInterval(() => {
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
    if (timerId.current !== null) {
      clearInterval(timerId.current)
      timerId.current = null
    }
  }

  const restart = () => setFinishTime(Date.now() + remaining)

  const reset = () => setRemaining(value)

  return [
    remaining,
    { isActive, start, stop, restart, reset },
  ]
}
