import React from "react";

import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import Link from "./Link";
import GithubCount from "./GithubCount";

function App() {
  const [date, setDate] = React.useState(null);
  const [focused, setFocused] = React.useState(false);

  // https://github.com/airbnb/react-dates/blob/master/examples/SingleDatePickerWrapper.jsx
  return (
    <div>
      <h1>airbnb/react-dates</h1>
      <GithubCount useby="16.6k" star="15.5k" fork="1.5k" size={"1.27MB"} />
      <ul>
        <li>
          NPM: <Link link="https://www.npmjs.com/package/react-dates" />
        </li>
        <li>
          홈페이지: <Link link="https://github.com/airbnb/react-dates" />
        </li>
        <li>
          스토리북:{" "}
          <Link link="http://airbnb.io/react-dates/?path=/story/daypicker--default" />
        </li>
        <li>대부분의 기능이나 UI의 커스터마이징이 가능하다. 하지만 무겁다</li>
        <li>시간을 입력하는 기능은 제공하지 않는다.</li>
      </ul>
      <hr />
      <SingleDatePicker
        // withPortal
        // withFullScreenPortal
        showClearDate
        showDefaultInputIcon
        small
        // daySize={100}
        hideKeyboardShortcutsPanel
        numberOfMonths={1}
        placeholder="날짜를 입력하세요."
        date={date}
        onDateChange={date => setDate(date)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        displayFormat="YYYY-MM-DD"
        // monthFormat={'MMMM YYYY'}
        // phrases={SingleDatePickerPhrases}
        // orientation={HORIZONTAL_ORIENTATION}
        // displayFormat={() => moment.localeData().longDateFormat('L')} ,
        // startDate={startDate} // momentPropTypes.momentObj or null,
        // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        // endDate={endDate} // momentPropTypes.momentObj or null,
        // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        // onDatesChange={({ startDate, endDate }) =>
        // this.setState({ startDate, endDate })
        // } // PropTypes.func.isRequired,
        // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
    </div>
  );
}

export default App;
