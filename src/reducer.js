import * as actionTypes from "./actionTypes";


let lastId = 0;

function reducer(state = [],action) {
    if (action.type === actionTypes.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description:action.payload.description,
                resolved:false,
            }
        ]
    }
    else if (action.type === actionTypes.BUG_REMOVED) {
        return state.filter(bug => bug.id !== action.payload.id)
    }
    else if (action.type === actionTypes.BUG_RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : {...bug,isResolved:true})
    }

    return store;
}

export default reducer;