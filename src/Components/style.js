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
  width: 700px;
  height: 1080px;
`;
export const ScheduleTitle = styled.span`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #ae6fff;
  text-align: center;
`;
export const ScheduleBoard = styled.div`
  width: 30%;
  height: 750px;
  border-radius: 10px;
  background-color: #c8c8c8;
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
