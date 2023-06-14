
const initialState = {
    
    index: null,
    login: false,
    menu: false,
    sidebar: false,
    token: null,
    cart: null,
    carrello: [],
    uniqueCarrello: [],
    tot: 0,
    utente: null,
    utenteInfo: null,
    title: null,
    searchBar: false,
    allProducts: null
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
        case "ADD_TOTAL":
            return{
                ...state,
                tot: action.payload
            }
        case "SEND_TITLE":
            return{
                ...state,
                title: action.payload
            }
        case "CLEAR_CARRELLO":
            return{
                ...state,
                carrello: []
            }
        case "ADD_TO_UNIQUE_CARRELLO":
            return{
                ...state,
                uniqueCarrello: [...state.uniqueCarrello, action.payload]
            }
        case "REMOVE_FROM_UNIQUE_CARRELLO":
            return{
                ...state,
                uniqueCarrello: state.uniqueCarrello.filter((obj) => obj.id !== action.payload)
            }
        case "CLEAR_UNIQUE_CARRELLO":
            return{
                ...state,
                uniqueCarrello: []
            }
        case "SHOW_SEARCH":
            return{
                ...state,
                searchBar: !state.searchBar
            }
        case "SHOW_SIDEBAR":
            return{
                ...state,
                sidebar: !state.sidebar
            }
        case "DISPATCH_ALL_ATTREZZI":
            return{
                ...state,
                allProducts: action.payload
            }
        case "LOGOUT":
            return{
                ...state,
                index: null,
                login: false,
                menu: false,
                sidebar: false,
                token: null,
                cart: null,
                carrello: [],
                uniqueCarrello: [],
                tot: 0,
                utente: null,
                utenteInfo: null,
                title: null,
                searchBar: false,
                allProducts: null
            }
        default:
            return state
    }
}

export default mainReducer