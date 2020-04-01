import React from "react";

import "react-day-picker/lib/style.css";

import DayPickerInput from "react-day-picker/DayPickerInput";

import Link from "./Link";
import GithubCount from "./GithubCount";

const GpblReactDayPicker = () => {
  const [date, setDate] = React.useState(null);
  return (
    <>
      <h1>gpbl/react-day-picker</h1>
      <GithubCount useby="8.7k" star="3.7k" fork="487" size={"843kB"} />
      <ul>
        <li>
          NPM: <Link link="https://www.npmjs.com/package/react-day-picker" />
        </li>
        <li>
          홈페이지: <Link link="https://github.com/gpbl/react-day-picker" />
        </li>
        <li>
          코드샘플:{" "}
          <Link link="http://react-day-picker.js.org/examples/input" />
        </li>
        <li>자연님의 추천! 매우 가볍다.</li>
        <li>시간 입력 기능은 제공하지 않음.</li>
        <li>
          원하는 날짜 포맷을 사용하려면, moment나{" "}
          <a href="https://www.npmjs.com/package/date-fns">date-fns</a>모듈을
          사용해야한다.
        </li>
        <li>css로 className를 작성해야한다. css-in-js 기능은 제공하지 않음.</li>
      </ul>
      <hr />
      {/* <DayPicker /> */}
      <DayPickerInput
        classNames={{ container: "inputDate", overlayWrapper: "", overlay: "" }}
        placeholder="날짜를 입력하세요."
        format="yyyy-MM-dd"
        value={date}
        // selectedDay={date}
        // hideOnDayClick
        // showOverlay
        onDayChange={day => {
          // console.log({ day });
          setDate(day);
        }}
        // formatDate={(date, format, locale) => {
        //   console.log({ date, format, locale });
        //   return "";
        // }}
      />
    </>
  );
};

export default GpblReactDayPicker;
