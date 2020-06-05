import React, { Component } from "react"

import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component
{
    constructor(props){
        super(props)
    }
//dishe
    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );  
}


renderComment()
{
    const comment=this.props.dish.comments.map((dish) => {
        return (
       <div key={dish.id}>
           
            <ul>
                <p>{dish.comment}</p>
        <p>--{dish.author} ,{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.date)))}</p>
                </ul>
                 </div>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
             <h4>comments</h4>
            {comment}
        </div>
    );
}

 render()
 {
  return(
      <div class="container">
            <div className="row">
              
                {this.renderDish(this.props.dish)}
                {this.renderComment()}
              </div>
              </div>    
    );
 }



}
export default DishDetail;