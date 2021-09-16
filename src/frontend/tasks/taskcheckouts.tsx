/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import down from '../../../assets/icons/down.svg';
import up from '../../../assets/icons/up.svg';
import checkouts from '../../../assets/icons/checkouts.svg';

export default function Checkouts(props: {
  checkouts:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  status: string | undefined;
}) {
  return (
    <div className="ml-auto bg-gradient-to-tr from-white to-transparent rounded-2xl shadow-2xl h-full w-44 ml-6 pl-12 pt-10 pb-8">
      <div className="bg-gradient-to-tl from-checkoutsblack  to-black w-14 h-14 rounded-lg relative flex items-center justify-center p-2.5">
        <img src={checkouts} alt="" className="w-full h-full" />
      </div>
      <h1 className="text-sm font-semibold text-cardtext pb-3 pt-9">
        Checkouts
      </h1>
      <div className="flex flex-row items-end">
        <h1 className="text-4xl font-medium text-cardtext">
          {props.checkouts}
        </h1>
        <img
          src={props.status === 'up' ? up : down}
          alt=""
          className="h-6 pl-1 pb-1.5"
        />
      </div>
    </div>
  );
}
