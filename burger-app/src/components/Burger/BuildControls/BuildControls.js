import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls =(props)=> {

    function controlBuilder(props) {
      let controls = [];
      for (const ing in props.currentIngredients) {
        controls.push(
          <BuildControl
            key={ing}
            label={ing}
            disabled={!props.currentIngredients[ing] ? true : false}
            addIngredientsHandler={props.addIngredientsHandler}
            removeIngredientsHandler={props.removeIngredientsHandler}
          ></BuildControl>
        );
      }
      return controls;
    }

    return (
        <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice}</strong>
          </p>
          {controlBuilder(props)}
        <button
          className={classes.OrderButton}
          disabled={props.disableOrdering}
          onClick={props.purchaseHandler}>ORDER NOW</button>
          </div>
    );
}

export default buildControls;