import React from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

import Link from './Link';
import GithubCount from "./GithubCount";

const Hacker0x01ReactDatepicker = () => {
  const [date, setDate] = React.useState(null);
  return (
    <>
      <h1>Hacker0x01/react-datepicke</h1>
      <GithubCount useby="30.9k" star="4.6k" fork="1.4k" size={"526kB"} />
      <ul>
        <li>NPM: <Link link="https://www.npmjs.com/package/react-datepicker"/></li>
        <li>홈페이지: <Link link="https://github.com/Hacker0x01/react-datepicker"/></li>
        <li>데모페이지: <Link link="https://reactdatepicker.com/"/></li>
        <li>많은 기능을 제공하면서 airbnb보다 가벼움</li>
      </ul>
      <hr />
      <DatePicker
        className="inputDate"
        // popperClassName="inputDate"
        placeholderText="날짜를 입력하세요."
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={setDate}
      />{" "}
      <DatePicker
        className="inputDate"
        placeholderText="날짜와 시간을 입력하세요."
        selected={date}
        onChange={setDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="yyyy-MM-dd hh:mm"
      />
    </>
  );
};

export default Hacker0x01ReactDatepicker;
