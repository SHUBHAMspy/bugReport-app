import reducer from "./reducer";

function createStore(reducer) {
    let state;
    let listeners = []

    function subscribe(listener) {
        listeners.push(listener)
    }

    
    function dispatch(action) {
        state = reducer(state,action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener()
            
        }
    }
    
    function getState() {
        return state;
    }

    return{
        subscribe,
        dispatch,
        getState
    }
}

export default createStore(reducer);