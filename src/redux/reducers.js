/*
 * 包含多个reducer函数的模块
 */
import {DECREMENT, INCREMENT} from "./action-type";
 
export function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}