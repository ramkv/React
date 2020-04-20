import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const contorls = [
    { label: 'Salad', type : 'salad'},
    { label: 'Bacon', type : 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }, 
]

const buildControls =(props)=> {

    return (
        <div className={classes.BuildControls}>
        {contorls.map( ctrl => (<BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>))}
        </div>
    );
}

export default buildControls;