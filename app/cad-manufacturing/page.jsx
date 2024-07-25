import React from 'react'
import SpecialFeed from "@components/SpecialFeed";
import SideNav from "@components/SideNav";

const CadManufacturing = () => {
  return (
    <div className="flex w-full h-full">
        <SideNav className=""/>
        <SpecialFeed 
            word="cad-manufacturing"
            title = "Cad & Manufacturing"
            className="flex"/>

    </div >
  )
};

export default CadManufacturing