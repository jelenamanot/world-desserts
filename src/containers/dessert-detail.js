import React from 'react';
import { connect } from 'react-redux';

class DessertDetail extends React.Component {
   render(){

      // if(!this.props.dessert) {
      //    return <div className="dessert-detail col-sm-10">Please pick one of the desserts to get more info.</div>
      // }

      if(!this.props.dessert) {
         return (
            <div className="dessert-detail-welcome col-sm-12">
               <img className="img-responsive" src="/src/img/cake.png" alt=""/>
            </div>
         );
      }

      return(
         <div className="dessert-detail col-sm-12">
            <h3 className="text-center">{this.props.dessert.name}</h3>
            <div className="col-sm-12">
               <div className="col-sm-6">
                  <img src={this.props.dessert.img} alt=""/>
               </div>
               <div className="col-sm-6">
                  <p><span>Country:</span> {this.props.dessert.country}</p>
                  <p><span>Ingredients:</span> {this.props.dessert.ing}</p>
                  <p><span>Time to make:</span> {this.props.dessert.min} minutes</p>
                  <p><span>This is how to do it:</span> {this.props.dessert.how}</p>
               </div>
            </div>
         </div>
      );
   }
}


function mapStateToProps(state) {
   return {
      dessert: state.activeDessert
   };
}

export default connect(mapStateToProps)(DessertDetail);
