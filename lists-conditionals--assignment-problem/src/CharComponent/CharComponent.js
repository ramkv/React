import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className='charComponent' onClick={props.deletefunction}>
            {props.character}
        </div>
    )
}

export default charComponent;