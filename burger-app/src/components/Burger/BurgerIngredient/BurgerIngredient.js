import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
        if (this.props.type === "BreadTop") {
          ingredient = (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1}></div>
              <div className={classes.Seeds2}></div>
            </div>
          );
        } else {
          ingredient = <div className={classes["" + this.props.type]}></div>;
        }
        return ingredient;
        }
}
        
export default BurgerIngredient;