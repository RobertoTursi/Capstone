

const initialState = {
    
    index: null,
    login: false,
    menu: false,
    token: null,
    cart: null,
    carrello: [],
    tot: 0,
    utente: null,
    utenteInfo: null
}
    
    
    


const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_INDEX":
            return{
                ...state,
                index : action.payload
            }
        case "SHOW_LOGIN":
            return{
                ...state,
                login: action.payload
            }
        case "SHOW_MENU":
            return{
                ...state,
                menu: !state.menu
            }
        case "ADD_TOKEN":
            return{
                ...state,
                token: action.payload
            }
        case "ADD_TO_CART":
            return{
                ...state,
                cart: state.cart + action.payload
            }
        case "CHANGE_CART":
            return{
                ...state,
                cart: action.payload
            }
        case "SEND_TO_CART":
            return{
                ...state,
                carrello: [...state.carrello, action.payload]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                carrello: state.carrello.filter((obj) => obj.id !== action.payload)
            }
        case "SAVE_UTENTE":
            return{
                ...state, 
                utente: action.payload
            }
        case "ADD_UTENTE_INFO":
            return{
                ...state,
                utenteInfo: action.payload
            }
        default:
            return state
    }
}

export default mainReducer