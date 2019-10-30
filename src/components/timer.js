import useTimer from '../hooks/timer'

export default ({ value, delay }) => {
  const {
    remaining, isActive, start, stop, restart, reset,
  } = useTimer({ value, delay })

  return (
    <div>
      <p>あと { remaining } msec</p>
      { !isActive && remaining > 0 && <button onClick={restart}>開始</button> }
      { isActive && <button onClick={stop}>一時停止</button> }
      { !isActive && remaining !== value && <button onClick={reset}>リセット</button> }
    </div>
  )
}
