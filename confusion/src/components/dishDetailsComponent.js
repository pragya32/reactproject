import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'

 function RenderDish({dish}) {                   
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg className="img"  src={dish.image}  alt={dish.name} />
                    <CardBody>
        <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );  
}


function RenderComment({comments})
{
    const comment=comments.map((dish) => {
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

 const DishDetail =(props)=>{
  return(
      <div className="container">
            <div className="row">
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
               
               <RenderDish dish={props.dish}></RenderDish>
                <RenderComment comments={props.comments}></RenderComment>

              </div>
              </div>    
    );
  }
export default DishDetail;