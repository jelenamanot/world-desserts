export default function ActiveDessert(state = null, action) {
   //1.
   switch (action.type) {
      case 'DESSERT_SELECTED':
         return action.payload;
   }
   //2.
   return state;
}
