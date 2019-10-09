import React from "react";

const  UserData = (props) => {
  console.log(props.user)
    return (
      <>
      <div user={props.user.data.id} className="user">
        <img src={props.user.data.avatar_url} alt="profile" />
        <h2> {props.user.data.name} </h2>
        <h3> Location: {props.user.data.location} </h3>
        <p> Followers: {props.user.data.followers} </p>
        <p> Following: {props.user.data.following} </p>
      </div>
      </>
    );
  }

  export const  UserFollowers = (props) => {
    console.log(props)
      return (
        <div className="followers-container" >
          <h1>Followers</h1>
        <div className="followers" follower={props.data.id}>
          <img width="200" src={props.data.avatar_url}  alt={props.data.name} />
          <h2> {props.data.name} </h2>
            <h3> Location: {props.data.location} </h3>
            <p> Followers: {props.data.followers} </p>
            <p> Following: {props.data.following} </p>
        </div>
    </div>
      )
  }

export default UserData;
