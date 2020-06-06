import React, { Component } from 'react';
import Header from '../components/HeaderComponent'
import Footer from '../components/FooterComponent'
import Menu from '../components/MenuComponent';
import DishDetail from '../components/dishDetailsComponent';
import {DISHES} from '../shared/dishes';
class Main extends Component {
  constructor(props)
  {
    super(props);
   this.state={
     dishes:DISHES,
     selectedDish:null
   };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
renderDish(dish) {
        if (dish == null)
            return(
              <div></div>
            );
        else
            return(
                <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}></DishDetail>
               
            );
    }

  render(){
    return (
      <div className="App">
       <Header></Header>
        < Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/> 
               {/* can use any variable instead of dishes */}
      {this.renderDish(this.state.selectedDish)}  
      <Footer></Footer>
      </div>
    );
  }
}

export default Main;