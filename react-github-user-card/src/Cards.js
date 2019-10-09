import React from "react";
import UserFollowers from "./user-data";
import UserData from "./user-data";

const Cards = props => {
  
  return (
    <div className="card">
      {/* <h1>{props.userData.id}</h1> */}
      <div className="followers">
        <UserData />
        <h2>My Followers:</h2>
      {props.follower.map(follower => {
        return <UserFollowers follower={follower.id} key={follower} />;
  })}
}}
        
      </div>
    </div>
  )
}
export default Cards;




  