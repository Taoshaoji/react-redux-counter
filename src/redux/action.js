import {DECREMENT, INCREMENT} from "./action-type";
/*
 * �������е�action creator
 */
export const increment = number => ({
    type: INCREMENT,
    data: number
})
export const decrement = number => ({
    type: DECREMENT,
    data: number
})