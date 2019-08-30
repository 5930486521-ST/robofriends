export const SEARCHFIELD_CHANGED = "SEARCHFIELD_CHANGED";
export const GET_LIST_PENDING = "GET_LIST_PENDING";
export const GET_LIST_SUCCESSED = "GET_LIST_SUCCESSED";
export const GET_LIST_FAILED = "GET_LIST_FAILED";

export const onsearchChangeAction = (text)=>{
    var actionState = {type :SEARCHFIELD_CHANGED,  //typeOfState
                         searchField : text};
    return actionState;
}

export const getListAction = () => (dispatch) =>{
    dispatch({type:GET_LIST_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:GET_LIST_SUCCESSED, list :data}))
        .catch(err => dispatch({type:GET_LIST_FAILED, error: err}));
}