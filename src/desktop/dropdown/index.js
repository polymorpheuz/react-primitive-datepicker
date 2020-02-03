import React from 'react';
import classNames from 'classnames';
import './style.css';

import DropdownHead from './head';
import DropdownBody from './body';

const Dropdown = (props) => {
  const {
    customClassNames,
    customElements,
    isOpen,
    locale,
    value,
    localDate,
    changeLocalDateHandler,
    changeDateHandler,
    toggleDropdownHandler,
  } = props;

  return (
    <div
      className={classNames(
        'dp_dropdown--wrapper',
        {
          ['dp_dropdown--hidden']: !isOpen,
          [customClassNames.dropdownWrapper]: customClassNames.dropdownWrapper,
        },
      )}
    >
      <DropdownHead
        customElements={customElements}
        customClassNames={customClassNames}
        locale={locale}
        changeLocalDateHandler={changeLocalDateHandler}
        localDate={localDate}
      />
      <DropdownBody
        customClassNames={customClassNames}
        locale={locale}
        value={value}
        localDate={localDate}
        changeDateHandler={changeDateHandler}
        changeLocalDateHandler={changeLocalDateHandler}
        toggleDropdownHandler={toggleDropdownHandler}
      />
    </div>
  );
};

export default Dropdown;
