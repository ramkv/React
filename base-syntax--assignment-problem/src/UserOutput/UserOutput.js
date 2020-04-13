import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>This is a test paragraph</p>
            <p>The username passed is {props.username}</p>
        </div>
    )
}

export default userOutput;