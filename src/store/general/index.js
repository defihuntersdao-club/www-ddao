import itemsJson from '@/assets/example.json';
import store from "@/store"
import app from '../../main'
import {onConnect} from '../../util/web3Modal'

export default {
    state: {
        countClaims: 0,
        claimEnables: itemsJson,
        claimAmounts: itemsJson,
        errorMessage: '',
        subscribeResult: false,
    },
    getters: {
        countClaims: state => state.countClaims,
        claimEnables: state => state.claimEnables,
        claimAmounts: state => state.claimAmounts,
        subscribeResult: state => state.subscribeResult,
    },
    mutations: {
        setErrorMessage(state, payload) {
            state.errorMessage = payload
        },
        getClaimCheckAmountSuccess(state, payload) {
            state.claimAmounts[payload.index].claimAmountDefault = payload.result
        },
        getClaimCheckEnableSuccess(state, payload) {
            state.claimEnables[payload.index].claimEnableDefault = payload.result
        }
    },
    actions: {
        getClaimCheckAmount({ commit }, { index, contractAddr, contractAbi }) {
            if (store.state.provider.web3 == null) {store.commit('setErrorMessage', app.$i18n.t('general.you-need-connect')); return }

            var contract = new store.state.provider.web3.eth.Contract(contractAbi, contractAddr)

            contract.methods.ClaimCheckAmount(store.state.provider.account).call({from: store.state.provider.account}, function (error, data) {
                if (error) {
                    commit('getClaimCheckAmountError', error)
                } else {
                    commit('getClaimCheckAmountSuccess', {index: index, result: data})
                }
            })
        },
        getClaimCheckEnable({ commit }, { index, contractAddr, contractAbi }) {
            if (store.state.provider.web3 == null) {store.commit('setErrorMessage', app.$i18n.t('general.you-need-connect')); return }

            var contract = new store.state.provider.web3.eth.Contract(contractAbi, contractAddr)

            contract.methods.ClaimCheckEnable(store.state.provider.account).call({from: store.state.provider.account}, function (error, data) {
                if (error) {
                    commit('getClaimCheckEnableError', error)
                } else {
                    commit('getClaimCheckEnableSuccess', {index: index, result: data})
                }
            })
        },
        txClaim({ commit }, { contractAddr, contractAbi }) {
            if (store.state.provider.web3 == null) {store.commit('setErrorMessage', app.$i18n.t('general.you-need-connect')); return }

            var contract = new store.state.provider.web3.eth.Contract(contractAbi, contractAddr)

            contract.methods.Claim(store.state.provider.account).send({
                from: store.state.provider.account,
                value: 1000000
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
        },
        connectionModal({commit}) {
            onConnect(commit)
        },
    }
}