import React from "react";

import "@y0c/react-datepicker/assets/styles/calendar.scss";

import { DatePicker } from "@y0c/react-datepicker";

import Link from "./Link";
import GithubCount from "./GithubCount";

const Y0cReactDatepicker = () => {
  const [date, setDate] = React.useState(null);
  return (
    <>
      <h1>/y0c/react-datepicker</h1>
      <GithubCount useby="93" star="137" fork="14" size={"154kB"} />
      <ul>
        <li>
          NPM:{" "}
          <Link link="https://www.npmjs.com/package/@y0c/react-datepicker" />
        </li>
        <li>
          홈페이지: <Link link="https://github.com/y0c/react-datepicker" />
        </li>
        <li>
          스토리북: <Link link="https://y0c.github.io/react-datepicker" />
        </li>
        <li>제일 가볍다.</li>
        <li>모듈에서 sass-loader를 사용하고 있어서, npm node-sass이 필요함.</li>
      </ul>
      <hr />
      <DatePicker
        placeholder="날짜를 입력하세요."
        initialDate={date}
        showDefaultIcon
        dateFormat="YYYY-MM-DD"
        onChange={setDate}
      />{" "}
      <DatePicker
        placeholder="날짜와 시간을 입력하세요."
        initialDate={date}
        onChange={setDate}
        includeTime
      />
    </>
  );
};

export default Y0cReactDatepicker;
