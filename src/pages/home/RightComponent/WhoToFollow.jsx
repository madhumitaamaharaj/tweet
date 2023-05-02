import React, { useState } from 'react';
import Who from './WhoToFollow.module.css'
function WhoToFollow() {
  const [users, setUsers] = useState([
    {
      image: "https://pbs.twimg.com/profile_images/1649977054744674311/Tapx1as2_400x400.jpg",
      name: 'Royal Challenger Bangalore', username: 'RCBIpl', following: false
    },
    {
      image: " https://pbs.twimg.com/profile_images/1631576724461715456/IhEY3WKZ_400x400.png",
      name: 'FunctionUp', username: 'functionUp_cohert', following: false
    },
    {
      image: "https://www.indiaonlinepages.com/sports/gifs/sachin-tendulkar.jpg", name: 'Sachin Tendulakr'
      , username: 'sachin_rt', following: false
    },
  ]);
  const toggleFollowing = (username) => {
    // Create a new array with the updated follow status for the specified user
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return { ...user, following: !user.following };
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  };

  return (
    <div className={Who.Startdiv}>
      <div className={Who.FirstConatiner}>
        <h2>Who to follow</h2>
      </div>
      <div className={Who.userDataPart}>
        {users.map((user,i) => {
          return (
            <div key={i}>
              <ul >
                <li>
                  <img src={user.image} alt={`${user.username}`} width="20%" />
                  <span>
                    <div className={Who.name}>{user.name}</div>
                    <div>@{user.username}</div>
                  </span>
                  <button onClick={() => toggleFollowing(user.username)}>
                    {user.following ? "Unfollow" : "Follow"}
                  </button>
                </li>
              </ul>
            </div>
          )
        })}
      </div>
      <button className={Who.Middlebtn}>Show more</button>
    </div>
  );
}

export default WhoToFollow;
