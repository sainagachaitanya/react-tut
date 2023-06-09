import React from "react";
import { useContext } from "react";
import { AppContext } from "../StateManagement";
import ChangeAbout from "../components/ChangeAbout";

const About = () => {
  const {username} = useContext(AppContext);
  return (
  <div>
    About Page, Name: {username}
    <ChangeAbout />
  </div>
  )
};

export default About;