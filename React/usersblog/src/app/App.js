import React from 'react';
import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import UserList from "./users/UserList";
// import UserCardItem from "./users/UserCardItem";
import {PhotoUserCard} from "./users/PhotoUserCard";
import getUser from "../services"

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
        <UserList myList = {getUser()}>
          {/* <UserCardItem /> */}
        <PhotoUserCard />
        </UserList >
      <Footer footerTitle={"BIT Copyright"}/>
    </React.Fragment>
  )
}


export default App;
