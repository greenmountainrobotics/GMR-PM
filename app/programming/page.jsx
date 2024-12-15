import React from 'react'
import SpecialFeed from "@components/SpecialFeed";
import SideNav from "@components/SideNav";

const Programming = () => {
  return (
    <div className="flex w-full h-full">
        <SideNav className=""/>
        <SpecialFeed 
            word="Programming"
            title = "Programming"
            className="flex"/>

    </div >
  )
};

export default Programming