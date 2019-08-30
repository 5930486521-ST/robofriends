import {SEARCHFIELD_CHANGED,GET_LIST_PENDING,GET_LIST_SUCCESSED,GET_LIST_FAILED} from "./Actions"

import {combineReducers} from "redux";

const searchFieldInitialState = {
    searchField :""
};
const onSeachChangeReducer = (currentState = searchFieldInitialState , actionState = {}) => {
    switch(actionState.type){
        case SEARCHFIELD_CHANGED:
            return Object.assign({},currentState,{searchField:actionState.searchField});
        default:
            return currentState;
    }
}

const getListInitialState = {
    list : [],
    isPending: true
};

const getListReducer = (currentState =getListInitialState, actionState = {} ) => {
    switch (actionState.type){
        case GET_LIST_PENDING:
            return Object.assign({},currentState,{isPending:true})
        case GET_LIST_SUCCESSED:
            return Object.assign({},currentState,{isPending:false , list:actionState.list})
        case GET_LIST_FAILED:
            return Object.assign({},currentState,{error:actionState.error})
        default:
             return currentState;
    }
}

export const rootReducers = combineReducers({onSeachChangeReducer,getListReducer});