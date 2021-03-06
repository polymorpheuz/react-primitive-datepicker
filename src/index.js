/* global navigator */
import React from 'react';
import * as PropTypes from 'prop-types';
import isMobile from 'ismobilejs';
import classNames from 'classnames';
import * as locales from 'date-fns/locale';
import './style.css';
import './shared.css';

import DesktopDatePicker from './desktop';
import MobileDatePicker from './mobile';

const DatePicker = (props) => {
  const {
    onChange,
    value,
    locale,
    customClassNames,
    customElements,
    placeholder,
  } = props;

  const getLocale = (localeString) => {
    if (localeString && Object.prototype.hasOwnProperty.call(locales, localeString)) {
      return locales[localeString];
    }

    const transformedNavigatorLocale = navigator.language.replace(/-/g, '');
    if (
      !localeString
      && Object.prototype.hasOwnProperty.call(locales, transformedNavigatorLocale)
    ) {
      return locales[transformedNavigatorLocale];
    }

    return locales.enUS;
  };

  const localeObject = getLocale(locale && locale.replace(/-/g, ''));

  return (
    <div className={classNames(
      'dp_root--wrapper',
      { [customClassNames.wrapper]: customClassNames.wrapper },
    )}
    >
      {
        isMobile(navigator.userAgent).any
          ? (
            <MobileDatePicker
              value={value}
              placeholder={placeholder}
              locale={localeObject}
              customClassNames={customClassNames}
              changeHandler={onChange}
            />
          )
          : (
            <DesktopDatePicker
              placeholder={placeholder}
              customClassNames={customClassNames}
              customElements={customElements}
              locale={localeObject}
              value={value}
              changeHandler={onChange}
            />
          )
      }
    </div>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
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
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  value: null,
  locale: null,
  customClassNames: {},
  customElements: {},
  placeholder: '',
};

export default DatePicker;
