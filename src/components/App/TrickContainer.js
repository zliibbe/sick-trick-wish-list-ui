import React from 'react'
import Trick from './Trick'

const TrickContainer = (props) => {
    const tricks = props.Tricks.map(trick => {
        return (
            <Trick 
            name={trick.name}    
            stance={trick.stance}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            key={trick.key}
            />
        )
    })
    
    return (
        <section className='trick-container'>
            {tricks}
        </section>
    )
}


export default TrickContainer