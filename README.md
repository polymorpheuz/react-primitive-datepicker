# React primitive date picker

Simplest datepicker possible with modest amount of features and native behaviour on mobile devices. Easily customizable.

### Components props

Name | Type | Default value | Description
------------ | ------------- | ------------ | -------------
value  | { Date } | n/a | Javascript date object that will be date picker value
onChange  | { Function } | n/a | Change handler that expects date object
placeholder  | { String } | n/a | Input placeholder
locale | { String } | enUS | Locale that will be mapped in date-ins locale and used for date formatting and translations. [List of all available locales] (https://github.com/date-fns/date-fns/tree/master/src/locale).
customClassNames | { Object } | n/a | Object with classes that you can use to customize the element. List of properties you can find below.
customElements | { Object } | n/a | List of classes that you can use to customize the element. List of properties you can find below.

### customClassNames object

Name | Type | Description
------------ | ------------ | -------------
wrapper  | { String } | General wrapper of all elements. A good place to pass your custom font or adjust text color of all elements.
dropdownWrapper  | { String } | Wrapper of date picker dropdown where you can stylize 
input  | { String } | Input class.
inputFocused | { String } | Input class when it's focused.
placeholder | { String } | Input placeholder.
dateHeading | { String } | Date heading class in dropdown head between controls. 
weekDay | { String } | Class of shortened week days above calendar.
dateItem | { String } | Class of every calendar item. You can adjust font-size of every element in here and dropdown will stretch accordingly.
dateItemSelected | { String } | Class of selected item. 

### customElements object

Name | Type | Description
------------ | ------------ | -------------
decrementYearElement  | { JSX element } | First left dropdown head control.
decrementMonthElement  | { JSX element } | Second left dropdown head control. 
incrementMonthElement  | { JSX element } | First right dropdown head control. 
incrementYearElement | { JSX element } | I Second right dropdown head control. 
