import React,{Component,Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Ingredients from "../../global/Ingredients";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
  ingredients = {};

  constructor(props) {
    super(props);
     for (const ingrts of Ingredients) {
         this.ingredients[ingrts.enumKey] = 0;
     }
    this.state = {
      ingredients: this.ingredients,
      totalPrice: '4.00',
      disableOrdering: true,
      purchasing: false };
  }

  updateOrderingState = (ingredients) => {
    let disableOrdering = true;
    for (let ingrdts in ingredients) {
      // if there are any ingredients then set ordering to enabled else disabled
      if ( ingredients[ingrdts] > 0 ) {
        disableOrdering = false
        break;
      }      
    }
    return disableOrdering;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  addIngredientsHandler = (ingredientName) => {
    let oldIngredientvalue = this.state.ingredients[ingredientName];
    let newIngredientvalue = oldIngredientvalue + 1;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredientName] = newIngredientvalue;

    //set the price of the burger
    let oldPrice = this.state.totalPrice;
    let newPrice = parseFloat(Ingredients[ingredientName].price) + parseFloat(oldPrice);
    newPrice = newPrice.toFixed(2);
    
    //update order state
    let disableOrdering = this.updateOrderingState(updatedIngredients);

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, disableOrdering: disableOrdering});
  };

  removeIngredientsHandler = (ingredientName) => {
    let oldIngredientvalue = this.state.ingredients[ingredientName];
    let newIngredientvalue = oldIngredientvalue - 1;
    if (newIngredientvalue < 0) {
      return;
    }
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredientName] = newIngredientvalue;

    //set the price of the burger
    let oldPrice = this.state.totalPrice;
    let newPrice = parseFloat(oldPrice) - parseFloat(Ingredients[ingredientName].price);
    newPrice = newPrice.toFixed(2);

    //update order state
    let disableOrdering = this.updateOrderingState(updatedIngredients);

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice, disableOrdering: disableOrdering });
  };

  render() {
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          currentIngredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          disableOrdering={this.state.disableOrdering}
          purchaseHandler={this.purchaseHandler}
          addIngredientsHandler={this.addIngredientsHandler}
          removeIngredientsHandler={this.removeIngredientsHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;