/* eslint-disable prettier/prettier */
import React from 'react';
import TaskGroup from './taskgroup';
import TaskContent from './taskcontent';

export default function Tasks() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-groups h-full flex flex-col ">
        <h1 className="poppins font-semibold text-3xl pb-6 text-darkgray pl-3">
          Groups
        </h1>
        <div className="flex-grow overflow-y-auto pl-3 pr-4">
          <TaskGroup GroupType="dark" name="Arial" />
          <TaskGroup GroupType="light" name="Hallow" />
          <TaskGroup GroupType="light" name="Any Other Name" />
        </div>
      </div>
      <div className="flex-grow h-full ml-10">
        <TaskContent />
      </div>
    </div>
  );
}
