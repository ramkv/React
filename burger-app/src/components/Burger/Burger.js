import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';



const burger =(props) => {

    function transformIngredients(ingredients) {
        let finalIngredients = [];
        for (let ingredient in ingredients) {
            for (let i = 1; i <= ingredients[ingredient] ;i++) {
                finalIngredients.push(<BurgerIngredient type={ingredient} key={ingredient+i}></BurgerIngredient>)
            }
        }
        if (finalIngredients.length === 0) {
            return <p>Please start adding ingredients!</p>
        }
        return finalIngredients;
    }

    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="BreadTop"></BurgerIngredient>
        {transformIngredients(props.ingredients)}
        <BurgerIngredient type="BreadBottom"></BurgerIngredient>
      </div>
    );
}

export default burger;