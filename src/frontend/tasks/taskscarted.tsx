/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import down from '../../../assets/icons/down.svg';
import up from '../../../assets/icons/up.svg';
import carted from '../../../assets/icons/carted.svg';

export default function Carted(props: {
  carted:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  status: string;
}) {
  return (
    <div className="bg-gradient-to-tr from-white to-transparent rounded-2xl shadow-2xl h-full w-44 mx-6 pl-12 pt-10 pb-8">
      <div className="bg-mainblue w-14 h-14 rounded-lg relative flex items-center justify-center p-2.5">
        <img src={carted} alt="" className="w-full h-full" />
      </div>
      <h1 className="text-sm font-semibold text-cardtext pb-3 pt-9">Carted</h1>
      <div className="flex flex-row items-end">
        <h1 className="text-4xl font-medium text-cardtext">{props.carted}</h1>
        <img
          src={props.status === 'up' ? up : down}
          alt=""
          className="h-6 pl-1 pb-1.5"
        />
      </div>
    </div>
  );
}
