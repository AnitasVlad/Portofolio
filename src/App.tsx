import React from 'react';
import './App.module.css';
import Title from "./components/Title/Title";
import AboutMe from "./components/InformationTab/AboutMe";
import TechnicalSkills from "./components/InformationTab/TechnicalSkills";
import SoftSkills from "./components/InformationTab/SoftSkills";
import EducationAndTraining from "./components/InformationTab/EducationAndTraining";
import WorkExperience from "./components/InformationTab/WorkExperience";
import ContactAndLinks from "./components/InformationTab/ContactAndLinks";
import {url} from "inspector";

function App() {
  return (
      <>
         {/*<img src={require("./src/images/GradientMushVertical1.jpg")}  alt="#"/>*/}
          <body>
            <Title/>
            <AboutMe/>
            <TechnicalSkills/>
            <SoftSkills/>
            <EducationAndTraining/>
            <WorkExperience/>
          </body>
          <footer>
              <ContactAndLinks/>
          </footer>
      </>
  );
}

export default App;
