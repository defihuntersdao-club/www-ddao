import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import contract from './contract'
import airdrop from './contract/airdrop'
import provider from './provider'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
        changeLang (state, payload) {
            app.$i18n.locale = payload
            localStorage.setItem('currentLanguage', payload)
        }
    },
    actions: {
        setLang ({ commit }, payload) {
            commit('changeLang', payload)
        }
    },
    modules: {
        namespaced: true,
        contract,
        airdrop,
        general,
        provider,
    }
})
