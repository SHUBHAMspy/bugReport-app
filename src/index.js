import { bugAdded, bugRemoved, bugResolved } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed",store.getState());
})

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1,"Finally Resolved"))
store.dispatch(bugRemoved(1));


// store.subscribe(() => console.log("State Updated"))
// store.dispatch(bugAdded(""Bug1""))
console.log(store);