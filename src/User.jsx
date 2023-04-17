import React from 'react'
import build from "../icons/apartment.svg"
import location from "../icons/location.svg"
import link from "../icons/link.svg"
const User = ({user}) => {
  return (
    <div className='w-full flex mt-6 relative flex-col justify-between bg-slate-400'>
      <div className=' flex justify-between p-4 '>
        <div className='flex'>
        <img className='h-[100px] w-[100px]' src={user?.avatar_url} />
        <div className='p-2'>
          <p className='font-medium'>{user?.name}</p>
          <p>{user?.login}</p>
        </div>
        </div>
        <p className='relative flex justify-center items-center'> <a href={user?.html_url} className=' px-4 py-2  rounded-full border-2 border-blue-200 '> follow</a></p>
      </div>
      <div className='p-4'>
        <div className='flex gap-2'>
          <img src={build} alt="office" className='h-[30px] w-[30px]' />
          <p>{user?.company }</p>
        </div>
        <div className='flex gap-2 '>
          <img src={location} alt="office" className='h-[30px] w-[30px]' />
          <p>{user?.location }</p>
        </div>
        <div className='flex gap-2'>
          <img src={link} alt="office" className='h-[30px] w-[30px]' />
          <a src={user?.blog} className='text-blue-200'>{user?.blog }</a>
        </div>
      </div>
      <div className='absolute top-[-20px] px-2 bg-slate-400'>User</div>
    </div>
  )
}
export default User