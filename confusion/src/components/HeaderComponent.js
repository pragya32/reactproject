// we made this as class component bcoz we had to maintain some ui here

import React,{Component} from 'react';
import { Navbar, NavbarBrand,Jumbotron} from 'reactstrap';

  
class Header extends Component
{
    render()
    {
         return(
          <>
           <Navbar dark>
          <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion
          </NavbarBrand>
         </div>
        </Navbar>
        <Jumbotron>
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6" >
                    <h1 className='heading'>Ristorante Con Fusion</h1>
                    <p className="header">We take inspiration from the world's best cusines,and create a unique fusion experience.Our lipsmacking will tickle your culinary senses</p>
                </div>
            </div>
            </div> 
        </Jumbotron>
        

          </>



         );


    }
}
export default Header
;