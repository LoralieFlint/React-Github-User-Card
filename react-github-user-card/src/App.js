import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: ["bob"],
    };
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchFollowerData();
  }

  fetchUserData = () => {
    axios
      .get("https://api.github.com/users/LoralieFlint")
      .then(res => {
        console.log(res.data);
        this.setState({ userData: res.data });
      })
      .catch(err => {
        console.log("ERROR!", err);
      });
  };

  fetchFollowerData = () => {
    axios
      .get("https://api.github.com/users/LoralieFlint/followers")
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data })
      })
      .catch(err => console.log("ERROR", err));
  };

  render() {
    console.log(this.state.followers)

    return (
      <>
        <Cards 
        user={this.state.userData}
        follower={this.state.followers}
         />
      </>
    );
  }
}

export default App;
