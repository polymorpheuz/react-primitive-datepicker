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
      <header className={style.header}>
        <div className={style.datePickerContainer}>
          <h2 className={style.heading}>React primitive date picker</h2>
          <DatePicker
            placeholder="Please enter"
            customClassNames={{
              wrapper: style.customWrapper,
            }}
            value={date}
            onChange={setDate}
          />
        </div>
      </header>
      <article className={style.body}>
        <h1 id="react-primitive-date-picker">React primitive date picker</h1>
        <div className={style.badges}>
          <img
            alt="npm version badge"
            src="https://img.shields.io/npm/v/react-primitive-datepicker"
          />
        </div>
        <p>
          Simplest datepicker possible with modest amount of features and native behaviour
          on mobile devices. Easily customizable.
        </p>
        <h3 id="components-props">Component props</h3>
        <div className={style.tableWrapper}>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>value</td>
                <td>Date</td>
                <td>n/a</td>
                <td>Javascript date object that will be date picker value</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>Function</td>
                <td>n/a</td>
                <td>Change handler that expects date object</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>String</td>
                <td>n/a</td>
                <td>Input placeholder</td>
              </tr>
              <tr>
                <td>locale</td>
                <td>String</td>
                <td>enUS</td>
                <td>
                  Locale that will be mapped in date-ins locale and used for date
                  formatting and translations. [List of all available locales] (
                  <a href="https://github.com/date-fns/date-fns/tree/master/src/locale">
                    https://github.com/date-fns/date-fns/tree/master/src/locale
                  </a>
                  ).
                </td>
              </tr>
              <tr>
                <td>customClassNames</td>
                <td>Object</td>
                <td>n/a</td>
                <td>
                  Object with classes that you can use to customize the element.
                  List of properties you can find below.
                </td>
              </tr>
              <tr>
                <td>customElements</td>
                <td>Object</td>
                <td>n/a</td>
                <td>
                  List of classes that you can use to customize the element.
                  List of properties you can find below.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 id="customclassnames-object">customClassNames object</h3>
        <div className={style.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>wrapper</td>
                <td>String</td>
                <td>
                  General wrapper of all elements. A good place to pass your custom
                  font or adjust text color of all elements.
                </td>
              </tr>
              <tr>
                <td>dropdownWrapper</td>
                <td>String</td>
                <td>Wrapper of date picker dropdown where you can stylize </td>
              </tr>
              <tr>
                <td>input</td>
                <td>String</td>
                <td>Input class.</td>
              </tr>
              <tr>
                <td>inputFocused</td>
                <td>String</td>
                <td>Input class when it&#39;s focused.</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>String</td>
                <td>Input placeholder.</td>
              </tr>
              <tr>
                <td>dateHeading</td>
                <td>String</td>
                <td>Date heading class in dropdown head between controls. </td>
              </tr>
              <tr>
                <td>weekDay</td>
                <td>String</td>
                <td>Class of shortened week days above calendar.</td>
              </tr>
              <tr>
                <td>dateItem</td>
                <td>String</td>
                <td>
                  Class of every calendar item. You can adjust font-size of every
                  element in here and dropdown will stretch accordingly.
                </td>
              </tr>
              <tr>
                <td>dateItemSelected</td>
                <td>String</td>
                <td>Class of selected item. </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>customElements object</h3>
        <div className={style.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>decrementYearElement</td>
                <td>JSX element</td>
                <td>First left dropdown head control.</td>
              </tr>
              <tr>
                <td>decrementMonthElement</td>
                <td>JSX element</td>
                <td>Second left dropdown head control. </td>
              </tr>
              <tr>
                <td>incrementMonthElement</td>
                <td>JSX element</td>
                <td>First right dropdown head control. </td>
              </tr>
              <tr>
                <td>incrementYearElement</td>
                <td>JSX element</td>
                <td>Second right dropdown head control. </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

render(<App />, document.getElementById('root')); // eslint-disable
