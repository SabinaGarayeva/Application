import React, { useEffect, useState } from "react";
import Tasks from "../../../components/Tapshiriq";
import Servis from "../../../components/Servis";
import Card from "../../../components/Card";
import TaskUsers from "../../../components/TaskUsers";
import Performance from "../../../components/Performance";


function Main() {

  const [mainData, setMainData] = useState([]);
 
  const getData = async () => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(
      "http://135.181.42.192/services/mainpage/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 401) {
      
    } else if (response.status === 403) {
    
    } else {
      const mainData = await response.json();
      setMainData(mainData);
  };}
console.log(mainData.meetings,'-0---------')
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
     <div className="flex mt-[30px] gap-7">
     <Card data={mainData.meetings} />
     </div>
   
    <div className="flex mt-[30px]">
      <Tasks/>
      <Servis/>
    </div>
    <div className="flex mt-[30px]">
     <Performance/>
     <TaskUsers/>
    </div>
      
    </div>
  );
}

export default Main;
