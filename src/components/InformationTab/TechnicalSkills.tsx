import React from "react";
import Style from './InformationTab.module.css';
import TechnicalSkillsBubble from "../Bubble/TechnicalSkillsBubble";

function TechnicalSkills(){
    return(
        <>
            {/*<TechnicalSkillsBubble/>*/}
            <div className={Style.container_right} id={Style.technical_skills_container}>
                <TechnicalSkillsBubble/>
                <li>General :</li>
                <p className={Style.text}>
                    C#, Java, Typescript, Rest, TDD, Object Oriented Programming (OOP)<br/><br/></p>
    
                <li>.Net Back-end :</li>
                <p className={Style.text}>
                    .Net/.Net Core, ASP.NET,
                    SQL, PostgreSQL,
                    Entity Framework,
                    Selenium,
                    XUnit,
                    Azure,
                    Azure Data Studio<br/><br/></p>
    
                <li>Java Back-end :</li>
                <p className={Style.text}>
                    Spring Framework,
                    MySQL, JDBC, Hibernate,
                    Thymeleaf, Lombok<br/><br/></p>
    
                <li>Front-end :</li>
                <p className={Style.text}>
                    React, Angular,
                    Figma,
                    HTML, CSHTML, CSS,
                    Bootstrap<br/><br/></p>
    
                <li>Tools and Technologies :</li>
                <p className={Style.text}>
                    Visual Studio Code,
                    InteliJ / Rider,
                    Github,
                    Docker,
                    Adobe : Photoshop, Lightroom, Illustrator<br/><br/></p>
            </div>
        </>
    )
}
export default TechnicalSkills;