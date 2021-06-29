
export const initialState = {
    basket: [],
    user: null,
    isSignIn: false,
    authUser: null,
    // searchItems: [],
    viewport: {},
    filteredValue: ""
};

// selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action );
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],

            }
        case 'REMOVE_ALL_FROM_BASKET':
            return   {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                    let newBasket = [...state.basket]
                    
                    if (index >= 0) {
                        newBasket.splice(index, 1);

                    } else {
                        console.warn(`cant remove product (id: ${action.id}) as its not in the basket!`)
                    }
                
                    return {
                        ...state,
                        basket: newBasket
        }
        case "SET_USER":
            return {
                ...state,
                isSignIn: action.payload,
                authUser: action.authUser,
            };
        case "SET_FILTERED_PRODUCT":
            return{
                ...state,
                filteredValue: action.payload,
            }
        default:
            return state;
    }
}
export default reducer