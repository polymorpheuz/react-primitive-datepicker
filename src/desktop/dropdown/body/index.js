import React from 'react';
import * as PropTypes from 'prop-types';
import {
  addDays,
  getDate,
  getMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  compareAsc,
  format,
  addMonths,
} from 'date-fns';
import classNames from 'classnames';
import './style.css';

const Body = (props) => {
  const {
    customClassNames,
    localDate,
    changeDateHandler,
    changeLocalDateHandler,
    value,
    toggleDropdownHandler,
    locale,
  } = props;
  const start = startOfWeek(localDate, { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(localDate), { weekStartsOn: 1 });
  const eachDayArray = eachDayOfInterval({ start, end });

  const weekDays = [
    format(start, 'EEE', { locale }),
    format(addDays(start, 1), 'EEE', { locale }),
    format(addDays(start, 2), 'EEE', { locale }),
    format(addDays(start, 3), 'EEE', { locale }),
    format(addDays(start, 4), 'EEE', { locale }),
    format(addDays(start, 5), 'EEE', { locale }),
    format(addDays(start, 6), 'EEE', { locale }),
  ].map((weekday) => weekday.toUpperCase());

  const monthSwitchHandler = (date, localDateValue) => {
    if (getMonth(date) !== getMonth(localDateValue)) {
      if (getMonth(addMonths(date, 1)) === getMonth(localDateValue)) {
        changeLocalDateHandler('month', 'decrement', localDateValue);
      } else {
        changeLocalDateHandler('month', 'increment', localDateValue);
      }
    }
  };

  return (
    <div className="dp_body--wrapper">
      { weekDays.map((weekDay) => (
        <div
          className={classNames(
            'dp_body--weekDay',
            { [customClassNames.weekDay]: customClassNames.weekDay },
          )}
          key={weekDay}
        >
          { weekDay }
        </div>
      ))}
      { eachDayArray.map((date) => (
        <div
          className={classNames(
            'dp_body--dateItem',
            {
              [customClassNames.dateItem]: customClassNames.dateItem,
              ['dp_body--dateItemSelected']: compareAsc(value, date) === 0,
              [customClassNames.dateItemSelected]: (
                customClassNames.dateItemSelected
                && compareAsc(value, date) === 0
              ),
              ['dp_body--dateItemFromOtherMonth']: getMonth(localDate) !== getMonth(date),
            },
          )}
          key={date.getTime()}
          onClick={() => {
            changeDateHandler(date);
            monthSwitchHandler(date, localDate);
            toggleDropdownHandler();
          }}
        >
          { getDate(date) }
        </div>
      ))}
    </div>
  );
};

Body.propTypes = {
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
  localDate: PropTypes.instanceOf(Date),
  changeLocalDateHandler: PropTypes.func.isRequired,
  changeDateHandler: PropTypes.func.isRequired,
  toggleDropdownHandler: PropTypes.func.isRequired,
};

Body.defaultProps = {
  value: null,
  locale: null,
  customClassNames: {},
  localDate: null,
};

export default Body;
