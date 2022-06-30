import React from "react";
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBusinessTime } from "react-icons/fa";
import { useSelector } from "react-redux";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
    const defaultStats = [
        {
            title:'pending applications',
            count:stats.pending || 0,
            icon: <FaSuitcaseRolling/>,
            color:'#e9b949',
            bcg:'#fcefc7',
        },
        {
            title:'interviews scheduled',
            count:stats.interview || 0,
            icon: <FaCalendarCheck/>,
            color:'#647acb',
            bcg:'#e0e8f9',
        },
        {
            title:'jobs declined',
            count:stats.declined || 0,
            icon: <FaBusinessTime/>,
            color:'#d66a6a',
            bcg:'#ffeeee',
        },
    ]


  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 overflow-hidden">
      {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item}/>
      })}
    </div>
  );
};

export default StatsContainer;
