import Timer from '../containers/timer'

export default () => {
  const timer = Timer.useContainer()

  return (
    <p>あと { timer.remaining } msec</p>
  )
}
