import { Enumify } from "enumify";

class Ingredients extends Enumify {
  static Salad = new Ingredients(0.5);
  static Bacon = new Ingredients(0.7);  
  static Cheese = new Ingredients(0.4);
  static Meat = new Ingredients(1.3);
  static _ = this.closeEnum();
  constructor(price) {
    super();
    this.price =price;
  }
}

export default Ingredients;


