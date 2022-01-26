import {onConnect} from "@/util/web3Modal"
import store from "@/store";

export default {
    state: {
        web3: null,
        account: null,
    },
    getters: {
        web3: state => state.web3,
        account: state => state.account
    },
    mutations: {
        startProviderSuccess(state, {web3, account, connected}) {
            state.account = account
            state.web3 = web3
            localStorage.setItem('connected', connected)

            if (connected == false) {
                localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER')
                localStorage.removeItem('walletconnect')
            }
        },
        setProvider(state, {web3, account}) {
            state.account = account
            state.web3 = web3
        }
    },
    actions: {
        stopProvider({commit}) {
            commit('startProviderSuccess', {web3: null, account: null, connected: false})
        },
        getProvider({commit}) {
            if (localStorage.getItem('connected') != undefined && localStorage.getItem('connected') == 'true') {
                if (store.state.provider.web3 == null || store.state.provider.account == null) {
                    onConnect(commit)
                }
            }
        }
    }
}
