import React from 'react'
import SpecialFeed from "@components/SpecialFeed";
import SideNav from "@components/SideNav";

const Done = () => {
  return (
    <div className="flex w-full h-full">
        <SideNav className=""/>
        <SpecialFeed 
            word="Done"
            title = "Done"
            className="flex"/>

    </div >
  )
};

export default Done