import React from "react";
import Logo from "../../../assets/logo.svg";
import mainPage from "../../../assets/mainPage.svg";
import tasks from "../../../assets/tasks.svg";
import warehouse from "../../../assets/warehouse.svg";
import performance from "../../../assets/performance.svg";
import employees from "../../../assets/employees.svg";
import parameters from "../../../assets/parameters.svg";
import contact from "../../../assets/contact.svg";
import signOut from "../../../assets/signOut.svg";

function Navbar() {
  return (
    <div className="sidebar h-[100%] w-[15%] pl-[8px] pr-[8px]">
      <img className="w-[75px] pt-[28px]" src={Logo} alt="" />
      <div className="w-[100%] mt-[38px]">
        <p className="pl-[20px] text-[18px] text-[#909094] font-semibold">Əsas</p>
        <ul>
          
          
            <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
            <img className="" src={mainPage} alt="" />
              <a href="">Ana Səhifə</a>
            </li>
        
         
            <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
            <img src={tasks} alt="" />
              <a href="">Tapşırıqlar</a>
            </li>
          
       
            <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
            <img src={warehouse} alt="" />
              <a href="">Anbar</a>
            </li>
        
            <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
            <img src={performance} alt="" />
              <a href="">Performans</a>
            </li>
          
            <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
            <img src={employees} alt="" />
              <a href="">İşçilər</a>
            </li>
         
        </ul>
      </div>

      <div className="mt-[80px]">
        <p className="pl-[20px] text-[18px] text-[#909094] font-semibold" >Digər</p>
        <ul>
          <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
          <img src={parameters} alt="" />
            <a href="">Parametrlər</a>
          </li>
          <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff]">
          <img src={contact} alt="" />
            <a href="">Əlaqə</a>
          </li>
          <li className="flex items-center gap-[12px] pl-[20px] py-[16px] rounded-[6px] hover:bg-[#2B75CC] hover:text-[#fff] text-[#EA0A0A]">
          <img src={signOut} alt="" />
            <a href="">Çıxış</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
