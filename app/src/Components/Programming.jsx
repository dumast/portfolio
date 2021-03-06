import React from "react"
import CIcon from '../Images/C.svg'
import CSSIcon from '../Images/CSS.svg'
import HTMLIcon from '../Images/HTML.svg'
import JsIcon from '../Images/Js.svg'
import PythonIcon from '../Images/Python.svg'
import ReactIcon from '../Images/React.svg'

export default function Programming(){
    return(
        <section id = "programming">
            <div className = 'content'>
                <h2 className = "title">Programming</h2>
                <p className = "paragraph">I started programming a few years ago and started with Python. I enjoyed the concept, and I also learnt the basics of C and some Java. Nowadays, I am part of the Awty Programming club, and I am learning web development. I am able to do frontend development using React.js and I look forward to learn Back-End as well as mobile development.</p>
                <div className = "icons">
                    <img src={JsIcon} alt = "JavaScript"></img>
                    <img src={CIcon} alt = "C"></img>
                    <img src={PythonIcon} alt = "Python"></img>
                    <img src={HTMLIcon} alt = "Html"></img>
                    <img src={CSSIcon} alt = "Css"></img>
                    <img src={ReactIcon} alt = "React"></img>
                </div>
            </div>
        </section>
    )
}