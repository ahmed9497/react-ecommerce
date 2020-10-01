const initialState = {

    cart: [],
    total: 0,
   

}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'addToCart':

        console.log(payload);
       

            if (state.cart.findIndex(p => p._id == payload._id) === -1) {

                const temp = {
                    _id: payload._id,
                    name: payload.title,
                    price: payload.price,
                    
                }

                return { ...state, cart: [...state.cart, temp], total: state.total + payload.price };

            }
            else {

                const item = state.cart.find(element => element._id === payload._id);
               
                item.price = item.count * item.price;
                const sum = state.cart
                    .map(item => item.price)
                    .reduce((prev, curr) => prev + curr, 0);

                return { ...state, total: sum };




            }


        case 'countIncreases':
            
            if (state.cart.findIndex(p => p._id == payload._id) !== -1) {

                const item = state.cart.find(element => element._id === payload._id);
                item.count++;
                item.price = item.count * payload.actualPrice;

                const sum = state.cart
                    .map(item => item.price)
                    .reduce((prev, curr) => prev + curr, 0);

                return { ...state, total: sum };

            }



        case 'removeToCart':
            console.log(payload);
            return { ...state, cart: [] };


        case 'countDecreases':
            console.log(payload);

            if (state.cart.findIndex(p => p._id == payload._id) !== -1) {

                const item = state.cart.find(element => element._id === payload._id);

                item.count--;
                item.price = item.price - payload.actualPrice;

                if (item.count == 0) {


                    const index = state.cart.findIndex(p => p._id == item._id);

                    if (index > -1) {
                        state.cart.splice(index, 1);
                        console.log(index);
                    }

                    // array = [2, 9]
                    // console.log(array); 
                }


                const sum = state.cart
                    .map(item => item.price)
                    .reduce((prev, curr) => prev + curr, 0);

                return { ...state, total: sum , restaurantDetail:{
                    restaurant_id:'',
                    restaurant_name:''
                }  };

            }
            else {
                    return {...state}
            }
      
        case 'orderCompleted':{
            return {
                ...state,
                cart: [],
                total: 0,
                
            }
        } 

        default:
            return state;

    }

}

export default rootReducer;