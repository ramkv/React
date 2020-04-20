import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';



const burger =(props) => {

    function transformIngredients(ingredients) {
        let finalIngredients = [];
        for (let ingredientName in ingredients) {
            for (let i = 1; i <= ingredients[ingredientName] ;i++) {
                finalIngredients.push(<BurgerIngredient type={ingredientName} key={ingredientName+i}></BurgerIngredient>)
            }
        }
        if (finalIngredients.length === 0) {
            return <p>Please add ingredients</p>
        }
        return finalIngredients;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformIngredients(props.ingredients)}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
        
    );
}

export default burger;