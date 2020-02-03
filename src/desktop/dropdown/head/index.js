import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import chevron from './chevron.svg';
import doubleChevron from './double-chevron.svg';
import './style.css';

const Head = (props) => {
  const {
    localDate,
    changeLocalDateHandler,
    locale,
    customElements,
    customClassNames,
  } = props;

  const decrementYearHandler = () => changeLocalDateHandler('year', 'decrement', localDate);
  const decrementMonthHandler = () => changeLocalDateHandler('month', 'decrement', localDate);
  const incrementMonthHandler = () => changeLocalDateHandler('month', 'increment', localDate);
  const incrementYearHandler = () => changeLocalDateHandler('year', 'increment', localDate);

  const decrementYearElement = (customElements && customElements.decrementYearElement)
    ? customElements.decrementYearElement
    : (
      <img
        alt="Decrement year"
        src={doubleChevron}
        className={classNames(
          'dp_head--chevron',
          'dp_head--chevronLeft',
          'dp_head--leftDoubleChevron',
        )}
      />
    );

  const decrementMonthElement = (customElements && customElements.decrementMonthElement)
    ? customElements.decrementMonthElement
    : (
      <img
        alt="Decrement month"
        src={chevron}
        className={classNames('dp_head--chevron', 'dp_head--chevronLeft')}
      />
    );

  const incrementYearElement = (customElements && customElements.incrementYearElement)
    ? customElements.incrementYearElement
    : (
      <img
        alt="Increment year"
        src={doubleChevron}
        className={classNames(
          'dp_head--chevron',
          'dp_head--rightDoubleChevron',
        )}
      />
    );

  const incrementMonthElement = (customElements && customElements.incrementMonthElement)
    ? customElements.incrementMonthElement
    : (
      <img
        alt="Increment month"
        src={chevron}
        className="dp_head--chevron"
      />
    );

  return (
    <div className="dp_head--wrapper">
      <div className="dp_head--controlsWrapper">
        <div
          className="dp_head--control"
          onClick={decrementYearHandler}
        >
          { decrementYearElement }
        </div>
        <div
          className="dp_head--control"
          onClick={decrementMonthHandler}
        >
          { decrementMonthElement }
        </div>
      </div>
      <h5 className={classNames(
        'dp_head--dateHeading',
        { [customClassNames.dateHeading]: customClassNames.dateHeading },
      )}
      >
        { format(localDate, 'LLL yyyy', { locale }) }
      </h5>
      <div className="dp_head--controlsWrapper">
        <div
          className="dp_head--control"
          onClick={incrementMonthHandler}
        >
          { incrementMonthElement }
        </div>
        <div
          className="dp_head--control"
          onClick={incrementYearHandler}
        >
          { incrementYearElement }
        </div>
      </div>
    </div>
  );
};

export default Head;
