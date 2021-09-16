/* eslint-disable prettier/prettier */
import React from 'react';
import sidedeco from '../../../assets/icons/sidedeco.svg';
import Declines from './taskdeclines';
import Checkouts from './taskcheckouts';
import Carted from './taskscarted';

import taskstart from '../../../assets/icons/taskstart.svg';
import taskpause from '../../../assets/icons/taskpause.svg';
import taskedit from '../../../assets/icons/taskedit.svg';
import taskdelete from '../../../assets/icons/taskdelete.svg';

import Task from './taskItem';

export default function TaskContent() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-info_cards w-full flex flex-row items-center pt-6 poppins">
        <Checkouts checkouts="22k" status="up" />
        <Carted carted="900" status="down" />
        <Declines declines="10k" status="up" />
        <img src={sidedeco} alt="" className="ml-8 h-3/5" />
      </div>
      <div className="flex-grow w-full mt-6 flex flex-col">
        <div className="flex flex-row items-center mb-8">
          <h1 className="poppins font-semibold text-3xl text-darkgray pl-1 pr-3 mb-1">
            Tasks
          </h1>
          <img src={taskstart} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskpause} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskedit} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskdelete} alt="" className="mx-1 h-3 cursor-pointer" />
        </div>
        <div className="flex flex-row items-center font-medium text-sm text-taskheader poppins pr-8">
          <h1 className="flex07 pr-2">ID</h1>
          <h1 className="flex4 pr-2">Product</h1>
          <h1 className="flex2 pr-2">Store</h1>
          <h1 className="flex2 pr-2">Proxies</h1>
          <h1 className="flex2 pr-2">Size</h1>
          <h1 className="flex3 pr-2">Status</h1>
          <h1 className="flex2 pl-2 text-right">Manage</h1>
        </div>
        <div className="flex-grow w-full overflow-y-auto">
          {/* map thru once data established */}
          <Task
            keyValue="1"
            product="Nike Dunk Low Blue/White"
            store="Footlocker"
            proxies="Arial"
            size="9"
            status="Successful Checkout"
          />
          <Task
            keyValue="2"
            product="Nike Dunk Low Blue/White"
            store="Footlocker"
            proxies="Arial"
            size="9"
            status="Successful Checkout"
          />
        </div>
      </div>
    </div>
  );
}
