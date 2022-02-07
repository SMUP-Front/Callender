// eslint-disable
import React, { useEffect } from "react";
import * as S from "./style";
import { useState } from "react";
import "../scss/Timetable.scss";
import dayjs from "dayjs";
import $ from "jquery";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
export default function TimeTable() {
  dayjs.extend(isSameOrBefore);
  dayjs.extend(isSameOrAfter);

  let exjson = [
    {
      id: 1,
      title: "프로그래밍",
    },
    {
      id: 2,
      title: "디지털 논리 회로",
    },
    {
      id: 3,
      title: "국어",
    },
    {
      id: 4,
      title: "수학",
    },
    {
      id: 5,
      title: "창업일반",
    },
    {
      id: 6,
      title: "영어",
    },
    {
      id: 7,
      title: "과학",
    },
  ];

  const refreshOne = () => {
    window.location.reload();
  };
  setTimeout(() => refreshOne(), 60000);

  function getTodayLabel() {
    var week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    var today = new Date().getDay();
    var todayLabel = week[today];

    return todayLabel;
  }
  var today_of_the_week = getTodayLabel();
  let [dayof, setdayof] = useState(today_of_the_week);

  let [period, setPeriod] = useState<string[]>([]);

  useEffect(() => {
    var copy1 = [...period];
    for (var i = 0; i < 7; i++) {
      copy1.push(exjson[i].title);
    }
    // console.log(copy1[0].title);

    setPeriod(copy1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(period);

  var now = dayjs();
  now.format();

  console.log(now);

  let [showTime, setShowTime] = useState(now.format());

  // date.isBefore("2021-10-09"); // false
  if (now.isSameOrBefore("2022-10-09") || now.isSameOrAfter("2023-10-09")) {
    $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  } else if (now.isSameOrAfter("2021-10-09")) {
    console.log("smrn1");
  } else {
    console.log("느그");
  }

  return (
    <>
      {showTime}
      <S.Timetable>
        <S.TimetableTitle>광소마 {dayof} 시간표</S.TimetableTitle>

        <S.period>
          <S.periodCount className="1period">1</S.periodCount>
          <S.periodName>{period[0]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="2period">2</S.periodCount>
          <S.periodName>{period[1]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="3period">3</S.periodCount>
          <S.periodName>{period[2]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="4period">4</S.periodCount>
          <S.periodName>{period[3]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="5period">5</S.periodCount>
          <S.periodName>{period[4]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="6period">6</S.periodCount>
          <S.periodName>{period[5]}</S.periodName>
        </S.period>
        <S.period>
          <S.periodCount className="7period">7</S.periodCount>
          <S.periodName>{period[6]}</S.periodName>
        </S.period>

        {/* <img
          src="https://i.ibb.co/DVVF6CD/Kakao-Talk-20220207-202737309-removebg-preview-1.png"
          alt="여자와나무1"
          style={{ width: "825px", height: "477px" }}
        /> */}
      </S.Timetable>
      {/* <img src="https://i.ibb.co/GVyqCw4/image.png" alt="타원" /> */}
    </>
  );
}
// </S.Flex>
