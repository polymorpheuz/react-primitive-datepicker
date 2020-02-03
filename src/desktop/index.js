import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import {
  addYears,
  subYears,
  addMonths,
  subMonths,
  startOfMonth,
  format,
} from 'date-fns';
import './style.css';

import Dropdown from './dropdown';
import useOutsideClick from '../hooks/useOutsideClick';

const Desktop = (props) => {
  const {
    value,
    changeHandler,
    locale,
    customClassNames,
    customElements,
    placeholder,
  } = props;

  const [localDate, changeLocalDate] = useState(startOfMonth(new Date()));
  const [dropdownIsOpen, toggleDropdown] = useState(false);
  const [inputIsFocused, toggleInputFocus] = useState(false);

  const toggleDropdownHandler = () => toggleDropdown(!dropdownIsOpen);
  const hideDropdown = () => toggleDropdown(false);
  const toggleInputFocusHandler = () => toggleInputFocus(!inputIsFocused);
  const unFocusHandler = () => toggleInputFocus(false);

  const changeLocalDateHandler = (subject, operation, date) => {
    let newDate = date;

    if (subject === 'month' && operation === 'increment') newDate = addMonths(date, 1);
    if (subject === 'month' && operation === 'decrement') newDate = subMonths(date, 1);
    if (subject === 'year' && operation === 'increment') newDate = addYears(date, 1);
    if (subject === 'year' && operation === 'decrement') newDate = subYears(date, 1);

    changeLocalDate(newDate);
  };

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useOutsideClick(dropdownRef, () => hideDropdown());
  useOutsideClick(inputRef, () => unFocusHandler());

  return (
    <div
      className="dp_desktop--wrapper"
      ref={dropdownRef}
    >
      <div
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
        onClick={() => {
          toggleDropdownHandler();
          toggleInputFocusHandler();
        }}
        ref={inputRef}
      >
        {
          value
            ? format(value, 'P', { locale })
            : (
              <span
                className={classNames(
                  'dp_desktop--placeholder',
                  { [customClassNames.placeholder]: customClassNames.placeholder },
                )}
              >
                { placeholder }
              </span>
            )
        }
      </div>
      <Dropdown
        customElements={customElements}
        customClassNames={customClassNames}
        isOpen={dropdownIsOpen}
        toggleDropdownHandler={toggleDropdownHandler}
        value={value}
        locale={locale}
        localDate={localDate}
        changeLocalDateHandler={changeLocalDateHandler}
        changeDateHandler={changeHandler}
      />
    </div>
  );
};

export default Desktop;
