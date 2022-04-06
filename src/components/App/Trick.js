import React from "react"
import './Trick'

const Trick = (props) => {
    return (
        <section className="trick">
            <p className="trick-name">{props.name}</p>
            <p className="trick-stance">{props.stance}</p>
            <p className="trick-obstacle">{props.obstacle}</p>
            <p className="trick-tutorial">{props.tutorial}</p>
        </section>
        
    )
}

export default Trick