/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Static from '../../../assets/icons/static.png';
import redfolder from '../../../assets/icons/redfolder.svg';
import bluefolder from '../../../assets/icons/bluefolder.svg';
import whitetrash from '../../../assets/icons/whitetrash.svg';
import bluetrash from '../../../assets/icons/bluetrash.svg';
import whiteedit from '../../../assets/icons/whiteedit.svg';
import blueedit from '../../../assets/icons/blueedit.svg';

export default function TaskGroup(props: { GroupType: string; name: string }) {
  return (
    <div
      className={
        props.GroupType === 'dark'
          ? 'from-bottomgroup to-topgroup group_box groupshadow'
          : 'from-white to-white group_box groupshadow  hover:to-toptextwhite hover:from-bottomtextwhite'
      }
    >
      <div className="w-full h-full flex flex-row items-center">
        <img
          src={props.GroupType === 'dark' ? bluefolder : redfolder}
          alt=""
          className="h-4 ml-5"
        />
        <h1
          className={
            props.GroupType === 'dark'
              ? 'group_text text-bottomtextwhite'
              : 'group_text text-grouptext'
          }
        >
          {props.name}
        </h1>
        <img
          src={props.GroupType === 'dark' ? whiteedit : blueedit}
          alt=""
          className="ml-auto h-3 cursor-pointer pl-5"
        />
        <img
          src={props.GroupType === 'dark' ? whitetrash : bluetrash}
          alt=""
          className="mr-5 ml-3 h-3 cursor-pointer"
        />
      </div>
      <img src={Static} alt="" className="absolute h-full w-full top-0" />
    </div>
  );
}
