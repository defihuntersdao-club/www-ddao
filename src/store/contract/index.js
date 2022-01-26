export default {
    state: {
        transaction: null
    },
    getters: {
        transaction: state => state.transaction
    },
    mutations: {
        transactionCreated(state, payload) {
            state.transaction = payload
        }
    },
    actions: {}
}