/* global document */
import React, { useState } from 'react';
import { render } from 'react-dom';
import DatePicker from '../../src';
import style from './style.module.css';
import './style.css';

const App = () => {
  const [date, setDate] = useState(null);

  return (
    <div className={style.wrapper}>
      <div className={style.datePickerWrapper}>
        <h2 className={style.heading}>React primitive date picker</h2>
        <DatePicker
          placeholder="Please enter"
          customClassNames={{
            wrapper: style.customWrapper,
          }}
          value={date}
          onChange={setDate}
        />
        <div>{ date ? date.toDateString() : 'No value' }</div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root')); // eslint-disable
