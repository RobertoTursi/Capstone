import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainReducer from "..";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
    key: 'root',
    storage: storage,
    //     transform: [encryptTransform({
    //         secretKey: process.env.REACT_APP_PERSIST_KEY  //IL VALORE DELLA CHIAVE SI TROVA ALL'INTERNO DEL FILE .env, IL QUALE NON VIENE CARICATO SU GITHUB, COSICCHé NON POSSA ESSERE VISIBILE
    //     }) 
    // ] ///ATTENZIONE: capire perché mi da errore su 'process', senza queste righe di codice la nostra password non
    // è al sicuro
}

const persistedReducer = persistReducer(persistConfig , mainReducer)

export const store = configureStore({

    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})


export const persistor = persistStore(store)

