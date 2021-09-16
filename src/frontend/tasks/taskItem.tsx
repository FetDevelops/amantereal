/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import taskstart from '../../../assets/icons/taskstart.svg';
import taskpause from '../../../assets/icons/taskpause.svg';
import taskedit from '../../../assets/icons/taskedit.svg';
import taskdelete from '../../../assets/icons/taskdelete.svg';
import copy from '../../../assets/icons/copy.svg';

export default function Task(props: {
  keyValue:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  product:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  store:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  proxies:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  size:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  status:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <div className="mt-4">
      <div className="flex flex-row items-center font-bold text-sm text-grouptext poppins pr-8">
        <h1 className="flex07 pr-2 text-keyblue">{props.keyValue}</h1>
        <h1 className="flex4 pr-2 truncate">{props.product}</h1>
        <h1 className="flex2 pr-2 truncate">{props.store}</h1>
        <h1 className="flex2 pr-2 truncate">{props.proxies}</h1>
        <h1 className="flex2 pr-2 truncate text-sizeblue font-extrabold">
          {props.size}
        </h1>
        <h1 className="flex3 pr-2 truncate text-statuscheckout">
          {props.status}
        </h1>
        <div className="flex2 pl-2 flex flex-row items-center justify-end">
          <img src={taskstart} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskpause} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={copy} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskedit} alt="" className="mx-1 h-3 cursor-pointer" />
          <img src={taskdelete} alt="" className="ml-1 h-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
