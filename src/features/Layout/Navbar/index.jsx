import React from "react";
import Logo from "../../../assets/logo.svg";

function Navbar() {
  return (
    <div className="h-[100vh] flex flex-col">
      <img className="w-[74px]" src={Logo} alt="" />
      <div>
        <p>Əsas</p>
        <ul>
          <li><a href="">Ana Səhifə</a></li>
          <li><a href="">Tapşırıqlar</a></li>
          <li><a href="">Anbar</a></li>
          <li><a href="">Performans</a></li>
          <li><a href="">İşçilər</a></li>
        </ul>
      </div>

      <div>
      <p>Digər</p>
        <ul>
          <li><a href="">Parametrlər</a></li>
          <li><a href="">Əlaqə</a></li>
          <li><a href="">Çıxış</a></li>
        </ul>
      </div>
    </div>
    

  );
}

export default Navbar;
