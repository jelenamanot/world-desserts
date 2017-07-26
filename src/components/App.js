import React from 'react';

import DessertList from '../containers/dessert-list';
import DessertDetail from '../containers/dessert-detail';

//Main component
export default class App extends React.Component {
   render() {
      return(
         <main className="container">
            <header>
               <h2 className="text-center">The World's Top Desserts</h2>
            </header>

            <DessertList/>
            <DessertDetail />

            <div className="clearfix"></div>
            <footer>
               <p className="text-center">
                  &copy; by <a href="http://linkedin.com/in/jelenanesicm">Jelena</a>, 2017.
               </p>
            </footer>
         </main>
      );
   }
}
