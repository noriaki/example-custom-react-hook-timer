import Timer from '../containers/timer'
import TimerDisplay from './timerDisplay'
import TimerDisplaySeconds from './timerDisplaySeconds'
import TimerControls from './timerControls'

export default ({ value, delay }) => (
  <Timer.Provider initialState={{ value, delay }}>
    <TimerDisplay />
    <TimerDisplaySeconds />
    <TimerControls />
  </Timer.Provider>
)
