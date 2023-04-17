import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const LogIn = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='h-screen w-screen flex justify-center items-center overflow-hidden'
    style={{
      background:`radial-gradient(63.94% 63.94% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), rgb(8,2,16)`
    }}
    >
      <button onClick={() => loginWithRedirect()} className='rounded  text-white px-3 py-2 text-3xl'
           style={{
            background:`radial-gradient(63.94% 63.94% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), rgb(10,5,16)`
          }}
      >Log In</button>
      </div>
  );
  };
export default LogIn