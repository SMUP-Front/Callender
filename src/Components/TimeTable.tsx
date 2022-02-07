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

  console.log(now.format());

  let [showTime, setShowTime] = useState(now.format());
  let today = now.format("MM-DD HH:mm");
  let nowMonth = now.format("MM-DD");
  console.log(today);

  $(".1restTime").css("visibility", "hidden");
  $(".2restTime").css("visibility", "hidden");
  $(".3restTime").css("visibility", "hidden");
  $(".4restTime").css("visibility", "hidden");
  $(".5restTime").css("visibility", "hidden");
  $(".6restTime").css("visibility", "hidden");
  $(".7restTime").css("visibility", "hidden"); // 쉬는시간 UI들 다 안보이게 처리

  let testdate = dayjs(`${nowMonth} 14:13`, `MM-DD HH:mm`); // 여기서 테스트용 시계 시간 조작

  if (
    // 1교시
    testdate.isSameOrAfter(`${nowMonth} 08:40`) &&
    testdate.isSameOrBefore(`${nowMonth} 09:40`)
  ) {
    $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
    if (
      // 쉬는시간 UI
      testdate.isSameOrAfter(`${nowMonth} 09:30`) &&
      testdate.isSameOrBefore(`${nowMonth} 09:39`)
    ) {
      $(".1period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".1restTime").css("visibility", "visible");
    }
  } else if (
    // 2교시

    testdate.isSameOrAfter(`${nowMonth} 09:40`) &&
    testdate.isSameOrBefore(`${nowMonth} 10:40`)
  ) {
    $(".2period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".1restTime").css("visibility", "hidden");
    if (
      // 쉬는시간 UI
      testdate.isSameOrAfter(`${nowMonth} 10:30`) &&
      testdate.isSameOrBefore(`${nowMonth} 10:39`)
    ) {
      $(".2period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".2restTime").css("visibility", "visible");
    }
  } else if (
    // 3교시

    testdate.isSameOrAfter(`${nowMonth} 10:40`) &&
    testdate.isSameOrBefore(`${nowMonth} 11:40`)
  ) {
    $(".3period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".2restTime").css("visibility", "hidden");
    if (
      // 쉬는시간 UI
      testdate.isSameOrAfter(`${nowMonth} 11:30`) &&
      testdate.isSameOrBefore(`${nowMonth} 11:39`)
    ) {
      $(".3period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".3restTime").css("visibility", "visible");
    }
  } else if (
    //4 교시

    testdate.isSameOrAfter(`${nowMonth} 11:40`) &&
    testdate.isSameOrBefore(`${nowMonth} 13:20`)
  ) {
    $(".4period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".3restTime").css("visibility", "hidden");
    if (
      // 점심시간 UI
      testdate.isSameOrAfter(`${nowMonth} 12:30`) &&
      testdate.isSameOrBefore(`${nowMonth} 13:20`)
    ) {
      $(".4period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".4restTime").css("visibility", "visible");
    }
  } else if (
    // 5교시

    testdate.isSameOrAfter(`${nowMonth} 13:20`) &&
    testdate.isSameOrBefore(`${nowMonth} 14:20`)
  ) {
    $(".5period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".4restTime").css("visibility", "hidden");
    if (
      // 쉬는시간 UI
      testdate.isSameOrAfter(`${nowMonth} 14:10`) &&
      testdate.isSameOrBefore(`${nowMonth} 14:19`)
    ) {
      $(".5period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".5restTime").css("visibility", "visible");
    }
  } else if (
    // 6교시
    testdate.isSameOrAfter(`${nowMonth} 14:20`) &&
    testdate.isSameOrBefore(`${nowMonth} 15:20`)
  ) {
    $(".6period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".5restTime").css("visibility", "hidden");
    if (
      // 쉬는시간 UI
      testdate.isSameOrAfter(`${nowMonth} 15:10`) &&
      testdate.isSameOrBefore(`${nowMonth} 15:19`)
    ) {
      $(".6period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".6restTime").css("visibility", "visible");
    }
  } else if (
    // 7교시
    testdate.isSameOrAfter(`${nowMonth} 15:20`) &&
    testdate.isSameOrBefore(`${nowMonth} 16:30`)
  ) {
    $(".7period").css("color", "#ffffff").css("background-color", "#ae6fff");
    $(".6restTime").css("visibility", "hidden");
    if (
      // 종례시간 UI
      testdate.isSameOrAfter(`${nowMonth} 16:10`) &&
      testdate.isSameOrBefore(`${nowMonth} 16:29`)
    ) {
      $(".7period").css("color", "#ae6fff").css("background-color", "#ffffff");
      $(".7restTime").css("visibility", "visible");
    }
  }

  // else if (
  //   now.isSameOrAfter(`9:40`) &&
  //   now.isSameOrBefore(`9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // } else if (
  //   now.isSameOrAfter(`${today} 8:40`) &&
  //   now.isSameOrBefore(`${today} 9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // } else if (
  //   now.isSameOrAfter(`${today} 8:40`) &&
  //   now.isSameOrBefore(`${today} 9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // } else if (
  //   now.isSameOrAfter(`${today} 8:40`) &&
  //   now.isSameOrBefore(`${today} 9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // } else if (
  //   now.isSameOrAfter(`${today} 8:40`) &&
  //   now.isSameOrBefore(`${today} 9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // } else if (
  //   now.isSameOrAfter(`${today} 8:40`) &&
  //   now.isSameOrBefore(`${today} 9:30`)
  // ) {
  //   $(".1period").css("color", "#ffffff").css("background-color", "#ae6fff");
  // }
  else {
    console.log("버그입니당");
  }
  console.log(testdate);

  return (
    <>
      {showTime}
      <S.Timetable>
        <S.TimetableTitle>광소마 {dayof} 시간표</S.TimetableTitle>
        <div className="flex">
          <S.period>
            <S.periodCount className="1period">1</S.periodCount>
            <S.periodName>{period[0]}</S.periodName>
            <S.restTime className="1restTime">
              <img src="img/알람시계.png" alt="알람" className="logo" />{" "}
              쉬는시간
            </S.restTime>
          </S.period>
        </div>
        <S.period>
          <S.periodCount className="2period">2</S.periodCount>
          <S.periodName>{period[1]}</S.periodName>
          <S.restTime className="2restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 쉬는시간
          </S.restTime>
        </S.period>
        <S.period>
          <S.periodCount className="3period">3</S.periodCount>
          <S.periodName>{period[2]}</S.periodName>
          <S.restTime className="3restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 쉬는시간
          </S.restTime>
        </S.period>
        <S.period>
          <S.periodCount className="4period">4</S.periodCount>
          <S.periodName>{period[3]}</S.periodName>
          <S.restTime className="4restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 점심시간
          </S.restTime>
        </S.period>
        <S.period>
          <S.periodCount className="5period">5</S.periodCount>
          <S.periodName>{period[4]}</S.periodName>
          <S.restTime className="5restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 쉬는시간
          </S.restTime>
        </S.period>
        <S.period>
          <S.periodCount className="6period">6</S.periodCount>
          <S.periodName>{period[5]}</S.periodName>
          <S.restTime className="6restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 쉬는시간
          </S.restTime>
        </S.period>
        <S.period>
          <S.periodCount className="7period">7</S.periodCount>
          <S.periodName>{period[6]}</S.periodName>
          <S.restTime className="7restTime">
            <img src="img/알람시계.png" alt="알람" className="logo" /> 종례시간
          </S.restTime>
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
