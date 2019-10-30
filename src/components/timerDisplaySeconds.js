import Timer from '../containers/timer'

export default () => {
  const timer = Timer.useContainer()

  return (
    <p>あと { Math.ceil(timer.remaining / 1000) } sec</p>
  )
}
