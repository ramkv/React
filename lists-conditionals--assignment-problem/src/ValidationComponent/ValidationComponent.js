import React from 'react';

const validationComponent = (props) => {

    let displayText = "Text too short"
    if (props.inputLength > 5)  {
        displayText = "Text long enough"
    }


    return (
    <div>{displayText}</div>
    )
}

export default validationComponent;