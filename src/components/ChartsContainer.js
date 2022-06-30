import React, { useState } from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useSelector } from 'react-redux'


const ChartsContainer = () => {
    const [barChart, setBarChart] =useState(true)
    const {monthlyApplications:data} = useSelector((store) => store.allJobs)

  return (
    <div className='flex flex-col justify-center'>
        <h4 className='text-2xl capitalize text-center my-8 tracking-wide font-sans'> monthlyApplications</h4>
        <button className='text-[#16a6d9] text-2xl font-medium tracking-wide ' type='button ' onClick={() => setBarChart(!barChart)}>
            {barChart?'Area Chart' :'Bar Chart'}
        </button>
        {barChart? <BarChart data={data}/> : <AreaChart data={data}/>}
    </div>
  )
}

export default ChartsContainer