import React from "react";
// import { useState } from "react";
import "../scss/Timetable.scss";
import * as S from "./style";

export default function Timetable() {
  return (
    <S.Schedule>
      <S.ScheduleTitle>광소마 일정</S.ScheduleTitle>
      <S.ScheduleBoard>
        <S.TodayTitle>0월 0일 할일</S.TodayTitle>
        <ul>
          <S.ScheduleList>짧은 할일</S.ScheduleList>
          <S.ScheduleList>보통 길이의 할일</S.ScheduleList>
          <S.ScheduleList>조금 조금 긴 길이의 할일</S.ScheduleList>
          <S.ScheduleList>
            진짜 엄청 많이 매우 되게 긴 길이의 할일
          </S.ScheduleList>
          <S.ScheduleList>너무 길면 ... 처리 </S.ScheduleList>
        </ul>

        <S.LongButton style={{ margin: "430px auto 8px" }}>추가하기</S.LongButton>
        <S.Line/>
        <S.LongButton style={{ margin: "8px auto 8px" }}>수정하기</S.LongButton>
      </S.ScheduleBoard>
      {/* <img
          className="boardimg1"
          src="https://i.ibb.co/DRjBz1N/clip20220204-0144-40-674-removebg-preview.png"
          alt="남자의폰을여자가보는사진"
        /> */}
    </S.Schedule>
  );
}
