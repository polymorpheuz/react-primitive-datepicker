import React, { useState, useRef } from 'react';
import {
  parse,
  format,
} from 'date-fns';
import classNames from 'classnames';
import useOutsideClick from '../hooks/useOutsideClick';
import style from './style.module.css';
import shared from '../shared.module.css';

const Mobile = (props) => {
  const {
    changeHandler,
    locale,
    customClassNames,
    value,
    placeholder,
  } = props;

  const [inputIsFocused, toggleInputFocus] = useState(false);
  const inputRef = useRef(null);

  const toggleInputFocusHandler = () => toggleInputFocus(!inputIsFocused);
  const unFocusHandler = () => toggleInputFocus(false);
  useOutsideClick(inputRef, () => unFocusHandler());

  const localChangeHandler = (e) => {
    const parsedValue = parse(e.target.value, 'yyyy-mm-dd', new Date());
    changeHandler(parsedValue);
  };
  return (
    <div className={style.wrapper}>
      <label
        className={style.label}
        htmlFor="dateInput"
      >
        <div
          ref={inputRef}
          onClick={toggleInputFocusHandler}
          className={classNames(
            shared.input,
            {
              [customClassNames.input]: customClassNames.input,
              [shared.inputFocused]: inputIsFocused,
              [customClassNames.inputFocused]: (
                inputIsFocused && customClassNames.inputFocused
              ),
            },
          )}
        >
          {
            value
              ? format(value, 'P', { locale })
              : (
                <span
                  className={classNames(
                    style.placeholder,
                    { [customClassNames.placeholder]: customClassNames.placeholder },
                  )}
                >
                  { placeholder }
                </span>
              )
          }
        </div>
      </label>
      <input
        id="dateInput"
        className={style.dateInput}
        type="date"
        onChange={localChangeHandler}
      />
    </div>
  );
};

export default Mobile;