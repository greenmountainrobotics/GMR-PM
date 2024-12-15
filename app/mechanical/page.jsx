import React from 'react'
import SpecialFeed from "@components/SpecialFeed";
import SideNav from "@components/SideNav";

const MeetingPlans = () => {
  return (
    <div className="flex w-full h-full">
        <SideNav className=""/>
        <SpecialFeed 
            word="mechanical"
            title = "Mechanical"
            className="flex"/>

    </div >
  )
};

export default MeetingPlans