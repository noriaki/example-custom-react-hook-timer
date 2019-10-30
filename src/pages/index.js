import Timer from '../components/timer'

export default () => [
  <Timer key="timer1" value={5000} delay={500} />,
  <Timer key="timer2" value={50000} delay={100} />
]
