// eslint-disable
import React, { useEffect } from "react";
import * as S from "./style";
import { useState } from "react";
import "../scss/Timetable.scss";
import dayjs from "dayjs";
export default function TimeTable() {
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

  var date = dayjs("YYYY-MM-DD");

  let [time, setTile] = useState(date);

  let [period, setPeriod] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    var copy1 = [...period];
    for (var i = 0; i < 7; i++) {
      copy1.push(exjson[i]);
    }
    // console.log(copy1[0].title);

    setPeriod(copy1);
  }, []);
  console.log(period);
  // console.log

  // console.log
  return (
    <>
      <S.Timetable>
        {time}
        <S.TimetableTitle>XX소마고 월요일 시간표</S.TimetableTitle>

        {period.map((data: any, index: number) => (
          <S.period key={index}>
            <S.periodCount>{index + 1}</S.periodCount>
            <S.periodName>{period[index].title}</S.periodName>
          </S.period>
        ))}

        <img
          src="https://i.ibb.co/DVVF6CD/Kakao-Talk-20220207-202737309-removebg-preview-1.png"
          alt="여자와나무1"
          style={{ width: "825px", height: "477px" }}
        />
      </S.Timetable>
      <img src="https://i.ibb.co/GVyqCw4/image.png" alt="타원" />
    </>
  );
}
// </S.Flex>
