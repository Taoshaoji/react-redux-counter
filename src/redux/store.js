import {createStore} from "redux";
import {counter} from "./reducers";
 
//����һ��store����
const store = createStore(counter)
console.log(store, store.getState())
export default store