import React from "react"
import './Trick.css'

const Trick = (props) => {
    return (
        <section className="trick">
            <p className="trick-name">{props.name}</p>
            <p className="trick-stance">{props.stance}</p>
            <p className="trick-obstacle">{props.obstacle}</p>
            <p className="trick-tutorial"><a href={props.tutorial}>{props.tutorial}</a></p>
        </section>
        
    )
}

export default Trick