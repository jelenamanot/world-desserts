import React from 'react';
import { connect } from 'react-redux';
import { selectDessert } from '../actions/index';
import { bindActionCreators } from 'redux';


class DessertList extends React.Component {

   renderList() {
      return this.props.desserts.map((dessert) => {
         return(
            <li
               key={dessert.name}
               className="list-group-item dessert-li"
               onClick={() => this.props.selectDessert(dessert)}
            >
               {dessert.name}
            </li>
         );
      })
   }


   render() {
      return(
            <ul className="list-group col-sm-6 col-sm-offset-3 dessert-ul">
               {this.renderList()}
            </ul>
      );
   }
}

//OVAKO postaje CONTAINER
function mapStateToProps(state) {
   return {
      desserts: state.desserts
   };
}

//Anything returned from this func will end up as PROPS on the  container
function mapDispatchToProps(dispatch) {
   //Whenever selectDessert is called, result should be passed to all reducers.
   return bindActionCreators({ selectDessert: selectDessert }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(DessertList);
