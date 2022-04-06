import React from "react";
import './Form.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <form className="form">
                <select id='stance' placeholder="Choose your Stance">
                    <option value=''>Choose your Stance</option>
                    <option value='Regular'>Regular</option>
                    <option value='Switch'>Switch</option>
                </select>
                
                <input type='text' placeholder="Name of Trick">
                
                </input>
                
                <select name='obstacle' placeholder="Choose your Obstacle" >
                        <option value=''>Choose your Obstacle</option>
                        <option value='Flatground'>Flatground</option>
                        <option value='Ledge'>Ledge</option>
                        <option value='Rail'>Rail</option>
                        <option value='Stairs'>Stairs</option>
                        <option value='Pool'>Pool</option>
                </select>

                <input type='text' placeholder="Link to Tutorial">
                    
                </input>

                <button>Send It!</button>

            </form>
        )
    }
}

export default Form