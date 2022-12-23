import React from "react";
import Navbar from "./Nav/Nav";
import "./App.css";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "./Friends/Friends";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Proflle/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper__content">
          <Routes>
            <Route path="/dialogs*" element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
