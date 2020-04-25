import React from 'react';
import classes from './BuildControl.module.css'
const buildControl = (props) => {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
          className={classes.Less}
          disabled={props.disabled}
          onClick={() => props.removeIngredientsHandler(props.label)}
        >
          Less
        </button>
        <button
          className={classes.More}
          onClick={() => props.addIngredientsHandler(props.label)}
        >
          More
        </button>
      </div>
    );
}

export default buildControl;
