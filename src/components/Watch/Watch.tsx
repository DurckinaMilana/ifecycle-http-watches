import './watch-style.css';
import { useState } from 'react';
import Clock from "../Clock/Clock";
import InputRow from "../InputRow/InputRow";
import { Time } from '../../interfaces/Time';

const Watch = () => {
  const [times, setTimes] = useState<Time[]>([{
    title: 'Гринвич',
    timeZone: 0
  }])
  return (
    <div className="watch">
      <h1 className='watch__title'>Мировые часы</h1>
      <ul className="watch__list">
        {
          times.map(time => <li className='watch__item' key={time.title}>{time.title}</li>)
        }
      </ul>
      <InputRow times={times} setTimes={setTimes} />
      <div className="watch__container">
        {
          times.map(item => <Clock
            key={item.title}
            title={item.title}
            timeZone={item.timeZone}
            times={times}
            setTimes={setTimes}
          />)
        }
      </div>
    </div>
  )
}

export default Watch