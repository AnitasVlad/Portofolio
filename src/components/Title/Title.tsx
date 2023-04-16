import React from "react";
import Style from './Title.module.css';

function Title(){
    return (
        <div className={Style.container}>
            <p className={Style.title}>Hey, My name is Vlad!</p>
            <p className={Style.text}>I will be your next junior developer!</p>
        </div>
    )
}
export default Title;