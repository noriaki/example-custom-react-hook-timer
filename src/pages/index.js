import Timer from '../components/timer'
import SyncTimers from '../components/syncTimers'

export default () => [
  <Timer key="timer1" value={5000} delay={500} />,
  <SyncTimers key="timer2" value={50000} delay={100} />
]
