import React from 'react';
import * as PropTypes from 'prop-types';
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

Dropdown.propTypes = {
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
  customElements: PropTypes.shape({
    decrementYearElement: PropTypes.element,
    decrementMonthElement: PropTypes.element,
    incrementMonthElement: PropTypes.element,
    incrementYearElement: PropTypes.element,
  }),
  localDate: PropTypes.instanceOf(Date),
  changeLocalDateHandler: PropTypes.func.isRequired,
  changeDateHandler: PropTypes.func.isRequired,
  toggleDropdownHandler: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: null,
  locale: null,
  customClassNames: {},
  customElements: {},
  localDate: null,
};

export default Dropdown;
