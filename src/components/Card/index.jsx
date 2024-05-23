import React from "react";

function Card({data}) {
  console.log(data)
  return (
    <>
      {data?.map((meeting) => (
        <div className="tedbirler w-[300px] h-[160px] bg-[blue] text-[white]">
        <p>{meeting.date}</p>
      <p>{meeting.title}</p>
      <p>{meeting.meeting_type}</p>
      </div>
      ))}
      
    </>
  );
}

export default Card;
