/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import icon from '../../../assets/icons/blackicon.svg';
import uparrow from '../../../assets/navicons/uparrow.svg';
import downarrow from '../../../assets/navicons/downarrow.svg';
import pfp from '../../../assets/navicons/pfp.png';
import search from '../../../assets/navicons/search.svg';
import noti from '../../../assets/navicons/noti.svg';
import notion from '../../../assets/navicons/notion.svg';

export default function Header() {
  const [notiStatus, setNotiStatus] = useState(true);

  return (
    <div className="header dragzone">
      <img src={icon} alt="A" className="pl-6" />
      <h1 className="header_name">Amante</h1>
      <img src={pfp} alt="pfp" className="pfp_props" />
      <div className="search_box">
        <img src={search} alt="" className="pr-5 h-3.5" />
        <input type="text" className="search_type" placeholder="Search" />
      </div>
      <div className="noti_box">
        <img
          src={notiStatus === false ? noti : notion}
          alt="off"
          className="h-full"
        />
      </div>
      <img src={downarrow} alt="\/" className="mr-6 h-4 cursor-pointer" />
      <img src={uparrow} alt="/\" className="h-4 mr-8 cursor-pointer" />
    </div>
  );
}
