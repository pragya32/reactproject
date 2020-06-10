import React, { Component } from 'react';
import Home from '../components/HomeComponent'
import Contact from '../components/ContactComponent'
import Header from '../components/HeaderComponent'
import Footer from '../components/FooterComponent'
import Menu from '../components/MenuComponent';
import DishDetail from '../components/dishDetailsComponent';
import About from '../components/AboutusComponent'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from  '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import {DISHES} from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom'
class Main extends Component {
  constructor(props)
  {
    super(props);
   this.state={
     dishes:DISHES,
     comments: COMMENTS,
     promotions:PROMOTIONS,
     leaders:LEADERS,
   };
  }
 
  render(){

    const HomePage=()=>
    {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
        );
    }
    const DishWithId=({match})=>
    {
return(
<DishDetail dish={this.state.dishes.filter((dish)=>dish.id ===parseInt(match.params.dishId,10))[0]}
comments={this.state.comments.filter((comments)=> comments.dishId === parseInt(match.params.dishId,10))}
/>
);
    }
    return (
      <div className="App">
       <Header></Header>
      <Switch>
       <Route path="/home" component={HomePage}></Route> 
       <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}></Route>
     <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path='/contactus' component={Contact} />
      <Route exact path='/aboutus' component={()=><About leader={this.state.leaders}/>}/>
       <Redirect to="/home"/>
      </Switch>
      <Footer></Footer>
      </div>
    );
  }
}

export default Main;