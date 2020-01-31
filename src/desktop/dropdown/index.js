import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

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
        style.wrapper,
        {
          [style.hidden]: !isOpen,
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
