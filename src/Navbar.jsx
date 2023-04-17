import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
      <div className='h-[10vh] w-screen flex justify-center align-center '>
          <div className='h-[10vh] w-[90vw] flex justify-between align-center'>
          <img src={user?.picture} alt={user?.name} />
          <p className='flex justify-center items-center'>{user?.email}</p>
            <div className='flex justify-center items-center'>
                 {isAuthenticated?<LogoutButton/>:<LoginButton/>}
            </div>
          </div>
    </div>
  )
}
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    );
};
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  };

export default Navbar