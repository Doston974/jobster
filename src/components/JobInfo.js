import React from 'react'

const JobInfo = ({icon, text}) => {
  return (
    <div className='flex gap-4 mb-4 text-gray-500 items-center ml-2'>
        <span className='icon'>{icon}</span>
        <span className='text'>{text}</span>
    </div>
  )
}

export default JobInfo