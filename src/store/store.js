import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from "./actions/index"
import mutations from "./mutations/index"
// import mockItems from "./mockItems"
// import mockBids from "./mockBids"

Vue.use(Vuex)

export const getDefaultState = () => {
    return {
        authMode: "login",
        user: [],
        authUser: {},
    }
}

export default new Vuex.Store({
    strict: false,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    actions: actions,
    mutations: mutations
});