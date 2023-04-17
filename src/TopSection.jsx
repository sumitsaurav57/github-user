import React from 'react'
import book from '../icons/book.png'
import follower from '../icons/follower.svg'
import following from '../icons/following.svg'
import gists from '../icons/gists.svg'
const TopSection = ({user}) => {
  return (
      <div className=' w-screen flex justify-center items-center'>
          <div className='w-[90vw] grid lg:grid-cols-4 gap-2 sm:grid-cols-2'>
              <div className='flex  justify-between items-center bg-slate-400 p-4 rounded-lg'>
                  <img className='h-[30px] w-[30px]' src={book } />
              {user?.public_repos}
              </div>
              <div className='flex  justify-between items-center bg-slate-400 p-4 rounded-lg'>
                  <img className='h-[30px] w-[30px]' src={following } />
              {user?.followers}
              </div>
              <div className='flex  justify-between items-center bg-slate-400 p-4 rounded-lg'>
                  <img className='h-[30px] w-[30px]' src={follower } />
              {user?.followers}
              </div>
              <div className='flex  justify-between items-center bg-slate-400 p-4 rounded-lg'>
                  <img className='h-[30px] w-[30px]' src={gists } />
              {user?.public_gists}
              </div>
          </div>
    </div>
  )
}

export default TopSection