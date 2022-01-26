import store from "@/store";
import {airdropContract} from "@/util/airdrop/airdrop";
import app from "@/main";

const airdrop = {
    namespaced: true,
    state: {
        claimAmounts: 0,
    },
    getters: {
        claimAmounts: state => state.claimAmounts,
    },
    mutations: {
        claimAmountsSuccess(state, payload) {
            state.claimAmounts = payload
        }
    },
    actions: {
        getClaimAmounts({ commit }) {
            var contract = new store.state.provider.web3.eth.Contract(airdropContract.abi, airdropContract.address)

            contract.methods.claimAmounts(store.state.provider.account).call({from: store.state.provider.account}, function (error, data) {
                if (error) {
                    commit('claimAmountsError', error)
                } else {
                    commit('claimAmountsSuccess', data)
                }
            })
        },
        txClaim({ commit }) {
            if (store.state.provider.web3 == null) {store.commit('setErrorMessage', app.$i18n.t('general.you-need-connect')); return }

            var contract = new store.state.provider.web3.eth.Contract(airdropContract.abi, airdropContract.address)
            contract.methods.claim().send({
                from: store.state.provider.account,
                value: web3.toWei(0.05, "ether")
            }, function (error, data) {
                if (error) {
                    if (error.message != undefined) {
                        store.commit('setErrorMessage',error.message)
                    }else{
                        commit('claimContractError', error)
                    }
                } else {
                    store.commit('transactionCreated', data)
                }
            })
        }
    }
}

export default airdrop