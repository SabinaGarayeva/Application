import React from "react";
import date from "../../assets/date.svg";
import meetings from "../../assets/meeting.svg";

function Card({ data }) {
  console.log(data);
  return (
    <>
      {data?.map((meeting) => (
        <div className="tedbirler w-[33%] h-[160px] bg-[blue] text-[white] rounded-[16px] flex p-[16px] justify-between grad">
          <div>
            <div className="flex gap-[6px]">
              <img src={date} alt="" />
              <p>{meeting.date}</p>
            </div>

            <p className="text-[28px] font-semibold pt-[30px]">{meeting.title}</p>
            <p className="text-[20px]">{meeting.meeting_type}</p>
          </div>
          <div>
            <img className="w-[100%]" src={meetings} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
