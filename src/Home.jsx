import React, { useState, useEffect } from "react";
import { fetchData, options } from "./fetchData";
import Followers from "./Followers";
import TopSection from "./TopSection";
import serch from '../icons/search.svg'
import User from "./User";
import Charts from "./Charts";
const Home = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState('');
  const [FirstSearch, setFirstSearch] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [firstRepo, setFirstRepo] = useState(null);
  const [repos, setRepos] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
      let userData = [];
      const fetchUserData = async () => {
        userData = await fetchData(
          `https://api.github.com/users/${search}`,
          options
        );
        setUsers(userData);
        setSearch('');
      };
    fetchUserData();
    let FollowerData = [];
    const fetchFollowersData = async () => {
      userData = await fetchData(
        `https://api.github.com/users/${search}/followers`,
        options
      );
      setFollowers(FollowerData);
      setSearch('');
    };
    fetchFollowersData();
  }
  useEffect(() => {
    let userData = [];
    const fetchExercisesData = async () => {
      userData = await fetchData(
        "https://api.github.com/users/john-smilga",
        options
      );
      setFirstSearch(userData);
    };
    fetchExercisesData();
    let userDat = [];
    const fetchExercisesDat = async () => {
      userDat = await fetchData(
        "https://api.github.com/users/john-smilga/followers",
        options
      );
      setFollowers(userDat);
    }
    fetchExercisesDat()
    let userRepo = [];
    const fetchRepoData = async () => {
      userRepo = await fetchData(
        "https://api.github.com/users/john-smilga/repos",
        options
      ).catch((err) =>
        console.log(err));
      setFirstRepo(userRepo);
    }
    fetchRepoData()
  }, []);
  const repo = repos ?? firstRepo;
  const user = users ?? FirstSearch;

  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <div className=" flex w-[90vw] py-4  ">
        <form onSubmit={handleSubmit} className="flex justify-between items-center rounded-lg  p-3 bg-slate-400">
          <img src={serch } className='h-[20px] w-[20px]' />
                <input
                    type='text'
                    required
                    value={search}
                    placeholder='enter github user'
                    onChange={(e) => setSearch(e.target.value)}
                    className='rounded border-0 bg-slate-400 p-2 text-black  h-[50px] '
                />
                    <button onSubmit={()=>{handleSubmit()}} className="bg-blue-500 px-4 py-2  text-black rounded-md">search</button>
        </form>
        </div>
      <TopSection user={user} />
      <div className=" w-screen flex justify-center items-center p-3">
        <div className=" w-[90vw] grid md:grid-cols-2 gap-2">
        <User user={user} />
          <Followers follower={followers} />
          <div className="w-90vw">
           <Charts repo={ repo} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
