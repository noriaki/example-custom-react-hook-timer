import Timer from '../containers/timer'

export default () => {
  const timer = Timer.useContainer()

  return (
    <p>
      { !timer.isActive && timer.remaining > 0 && <button onClick={timer.restart}>開始</button> }
      { timer.isActive && <button onClick={timer.stop}>一時停止</button> }
      { !timer.isActive && timer.remaining !== timer.initialValue && <button onClick={timer.reset}>リセット</button> }
    </p>
  )
}
