import { getDefaultState } from "../store"

export const resetAppState = (state) => {
    Object.assign(state, getDefaultState())
}