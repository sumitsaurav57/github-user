import React from 'react'

const Followers = ({follower}) => {
  return (
      <div className='bg-slate-400 relative h-[300px]  mt-6'>
          <div className='overflow-auto h-[300px]'>
          {follower?.map((person,index) => (
              <div key={index} className='flex gap-2 p-4'>
                  <img className='h-[40px] w-[40px]' src={person?.avatar_url} />
                  <div>
                      <p className='font-medium capitalize'>{person?.login}</p>
                      <p>{person?.html_url }</p>
                  </div>
                </div>
          ))}
          </div>
         
          <div className='absolute top-[-20px] px-2 bg-slate-400'>followers</div>
    </div>
  )
}

export default Followers