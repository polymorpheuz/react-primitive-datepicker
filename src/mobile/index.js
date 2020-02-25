import React, { useState, useRef } from 'react';
import * as PropTypes from 'prop-types';
import {
  parse,
  format,
} from 'date-fns';
import classNames from 'classnames';
import useOutsideClick from '../hooks/useOutsideClick';
import './style.css';

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
    console.log(e.target.value);
    const parsedValue = e.target.value
      ? parse(e.target.value, 'yyyy-MM-dd', new Date())
      : null;
    changeHandler(parsedValue);
  };
  return (
    <div className="dp_mobile--wrapper">
      <label htmlFor="dateInput">
        <div
          ref={inputRef}
          onClick={toggleInputFocusHandler}
          className={classNames(
            'dp_shared--input',
            {
              [customClassNames.input]: customClassNames.input,
              ['dp_shared--inputFocused']: inputIsFocused,
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
                    'dp_mobile--placeholder',
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
        className="dp_mobile--date-input"
        type="date"
        onChange={localChangeHandler}
      />
    </div>
  );
};

Mobile.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  locale: PropTypes.shape({}),
  customClassNames: PropTypes.shape({
    wrapper: PropTypes.string,
    dropdownWrapper: PropTypes.string,
    input: PropTypes.string,
    inputFocused: PropTypes.string,
    placeholder: PropTypes.string,
    dateHeading: PropTypes.string,
    weekDay: PropTypes.string,
    dateItem: PropTypes.string,
    dateItemSelected: PropTypes.string,
  }),
  placeholder: PropTypes.string,
};

Mobile.defaultProps = {
  value: null,
  locale: null,
  customClassNames: {},
  placeholder: '',
};

export default Mobile;
