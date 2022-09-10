import * as actionTypes from "./actionTypes";

export function bugAdded(description) {
    return {
        type:actionTypes.BUG_ADDED,
        payload:{
            description:description
        }
    }
}

export function bugRemoved(id) {
    return {
        type:actionTypes.BUG_REMOVED,
        payload:{
            id
        }
    }
}

export function bugResolved(id,description) {
    return {
        type:actionTypes.BUG_RESOLVED,
        payload:{
            id,
            description:description
        }
    }
}



