import React from 'react';
import './UserInput.css'

const userInput = (props) => {

    return (
    <div className='userInput'>
        <label>Please enter a username: </label>
        <input type="text" onChange={props.changeusername} value={props.username}></input>        
    </div>
)

}

export default userInput;