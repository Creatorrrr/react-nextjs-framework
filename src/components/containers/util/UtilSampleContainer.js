import { Fragment, useEffect, useState } from "react";
import { Divider, TextField } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { format } from "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import filesize from "filesize";
import CommonUtil from "utils/common-util";
import styled from "styled-components";
import styles from "./UtilSampleContainer.module.css";

console.debug("UtilSampleContainer.js");

const BackgroundColorWrapper = styled.div`
  background-color: #dddddd;

  @media only screen and (min-width: 1200px) {
    background-color: #555555;
  }
`;

export default function UtilSampleContainer() {
  const now = new Date();
  const [fileSize, setFileSize] = useState("12345678");
  const [date, setDate] = useState(now);
  const [json, setJson] = useState('{ "test" : "test" }');
  const [url, setUrl] = useState("http://www.dongkuksystems.com");
  const [sec, setSec] = useState(format(now, "yyyy/MM/dd HH:mm:ss"));
  const [ms, setMs] = useState(format(now, "yyyy/MM/dd HH:mm:ss.SSS"));

  useEffect(() => {
    const timer = setInterval(() => {
      const intervalNow = new Date();
      setSec(format(intervalNow, "yyyy/MM/dd HH:mm:ss"));
      setMs(format(intervalNow, "yyyy/MM/dd HH:mm:ss.SSS"));
    }, 1);

    return () => {
      clearInterval(timer);
    };
  });

  /**
   * 파일 사이즈 입력 시 이벤트
   */
  const changeFileSize = (event) => {
    setFileSize(event.target.value);
  };

  /**
   * 날짜 입력 시 이벤트
   */
  const changeDate = (pickedDate) => {
    setDate(pickedDate);
  };

  /**
   * JSON 입력 시 이벤트
   */
  const changeJson = (event) => {
    setJson(event.target.value);
  };

  /**
   * URL 입력 시 이벤트
   */
  const changeUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <TextField size="small" type="number" label="파일 사이즈 Bytes" variant="outlined" value={fileSize} onChange={changeFileSize} />
      </div>
      <div>파일 사이즈: {filesize(fileSize)}</div>
      <Divider className={styles.divider} />
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker variant="inline" format="MM/dd/yyyy" margin="normal" label="날짜 선택" value={date} onChange={changeDate} disableToolbar />
        </MuiPickersUtilsProvider>
      </div>
      <div>날짜: {format(date, "MMMM Do yyyy, h:mm:ss a")}</div>
      <div>날짜 (현재 초): {sec}</div>
      <div>날짜 (현재 밀리초): {ms}</div>
      <Divider className={styles.divider} />
      <div>
        <TextField id="outlined-multiline-static" label="JSON 입력" variant="outlined" multiline rows={4} value={json} onChange={changeJson} />
      </div>
      <div>JSON 여부: {CommonUtil.isJson(json).toString()}</div>
      <Divider className={styles.divider} />
      <BackgroundColorWrapper>
        <div>
          <TextField size="small" type="text" label="URL" variant="outlined" value={url} onChange={changeUrl} />
        </div>
        <div>URL 여부: {CommonUtil.isUrl(url).toString()}</div>
        <Divider className={styles.divider} />
        <div>IE 여부: {CommonUtil.isIe().toString()}</div>
        <Divider className={styles.divider} />
        <div>모바일 여부: {CommonUtil.isMobile().toString()}</div>
      </BackgroundColorWrapper>
    </Fragment>
  );
}
