// eslint-disable

import React, { useEffect } from "react";
import * as S from "./style";
import { useState } from "react";
import "../scss/Timetable.scss";
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

  return (
    <S.Timetable>
      <S.TimetableTitle>XX소마고 월요일 시간표</S.TimetableTitle>
      <img
        src="https://i.ibb.co/DVVF6CD/Kakao-Talk-20220207-202737309-removebg-preview-1.png"
        alt="여자와나무1"
        style={{ width: "825px", height: "477px" }}
      />
      {period.map((data: any, index: number) => (
        <p key={index}>{data}</p>
      ))}
      <S.period>
        <S.periodCount>2</S.periodCount>
        <S.periodName>수학</S.periodName>
      </S.period>
    </S.Timetable>
  );
}
