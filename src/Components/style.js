import styled from "styled-components";

export const Month = styled.span`
  font-size: 24px;
`;
export const Day = styled.span`
  margin-top: 10px;
  margin-left: 14px;
  font-size: 13px;
  font-weight: bold;
`;
export const Date = styled.div`
  width: 118px;
  height: 118px;
  margin: 10px;
  font-size: 13px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #c8c8c8;
  box-shadow: 3px 3px 3px 3px #e1e1e1;
`;
// background-color: rgb(197, 197, 197);
export const Today = styled.div`
  width: 118px;
  height: 118px;
  margin: 10px;
  font-size: 13px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #ae6fff;
  box-shadow: 3px 3px 3px 3px #e1e1e1;
`;
// background-color: rgb(197, 197, 197);
// ----------------------- Timetable --------------------

export const Schedule = styled.div`
  height: 750px;
`;
export const ScheduleTitle = styled.span`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #ae6fff;
  text-align: center;
`;
// text-align: center;
export const ScheduleBoard = styled.div`
  width: 26%;
  height: 750px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: beige;
`;
export const ScheduleList = styled.li`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
`;

export const TodayTitle = styled.span`
  display: block;
  padding-top: 12px;
  margin-bottom: 21px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ae6fff;
`;
// [위 오른쪽 아래 왼쪽]
export const LongButton = styled.button`
  width: 80%;
  height: 32px;
  display: block;
  font-size: 18px;
  background-color: #ae6fff;
  color: #ffffff;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border-radius: 30px;
`;
export const Line = styled.hr`
  width: 30%;
  border: solid 1px #c8c8c8;
`;
