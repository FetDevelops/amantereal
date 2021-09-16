/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import dash from '../../../assets/navicons/dash.svg';
import tasks from '../../../assets/navicons/tasks.svg';
import profiles from '../../../assets/navicons/profiles.svg';
import proxies from '../../../assets/navicons/proxies.svg';
import captcha from '../../../assets/navicons/captcha.svg';
import monitor from '../../../assets/navicons/monitor.svg';
import settings from '../../../assets/navicons/settings.svg';

export default function Nav() {
  return (
    <div className="w-nav h-full">
      <div className="absolute pt-40 flex flex-col items-center w-nav">
        <NavLink
          to="/dash"
          className="mb-4 w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/tasks"
          className="mb-4 w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/profiles"
          className="mb-5 w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/proxies"
          className="mb-4 w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/captcha"
          className="margin-suit w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/monitors"
          className="margin-suit w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
        <NavLink
          to="/settings"
          className="w-full h-9 opacity-0 hover:opacity-100 naveffect"
          activeClassName="opacity-100"
        >
          <div className="left_box" />
        </NavLink>
      </div>
      <div className="pt-40 flex flex-col items-center">
        <div className="py-2.5 mb-4 w-full">
          <img src={dash} alt="D" className="w-4 h-4 mx-auto" />
        </div>
        <div className="py-2.5 mb-4 w-full">
          <img src={tasks} alt="T" className="w-4 h-4 mx-auto" />
        </div>
        <div className="py-2.5 mb-4 w-full">
          <img src={profiles} alt="P" className="w-4 h-4 mx-auto" />
        </div>
        <div className="py-2.5 mb-4 w-full">
          <img src={proxies} alt="P" className="w-4 h-5 mx-auto" />
        </div>
        <div className="py-2.5 mb-4 w-full">
          <img src={captcha} alt="P" className="w-4 h-4 mx-auto" />
        </div>
        <div className="py-2.5 mb-3.5 w-full">
          <img src={monitor} alt="M" className="w-4 h-5 mx-auto" />
        </div>
        <div className="py-2.5 w-full">
          <img src={settings} alt="S" className="w-4 h-5 mx-auto" />
        </div>
      </div>
    </div>
  );
}
