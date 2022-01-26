import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import {METAMASK, WCINFURAID} from './constants/networks'

const subscribeProvider = async (provider) => {
    if (!provider.on) {
        return;
    }
    provider.on("close", () => location.reload());
    provider.on("accountsChanged", async (accounts) => {
        location.reload()
        /*
        await this.setState({ address: accounts[0] });
        await this.getAccountAssets();
         */
    });
    provider.on("chainChanged", async (chainId) => {
        location.reload()
        /*
        const { web3 } = this.state;
        const networkId = await web3.eth.net.getId();
        await this.setState({ chainId, networkId });
        await this.getAccountAssets();
         */
    });

    provider.on("networkChanged", async (networkId) => {
        location.reload()
        /*
        const { web3 } = this.state;
        const chainId = await web3.eth.chainId();
        await this.setState({ chainId, networkId });
        await this.getAccountAssets();
         */
    });
}

function initWeb3(provider) {
    const web3 = new Web3(provider);

    web3.eth.extend({
        methods: [
            {
                name: "chainId",
                call: "eth_chainId",
                outputFormatter: web3.utils.hexToNumber
            }
        ]
    });

    return web3;
}

export const onConnect = async (commit) => {

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {infuraId: WCINFURAID}
        },
    }

    const web3Modal = new Web3Modal({
        network: 'polygon',
        cacheProvider: true,
        providerOptions,
        theme: 'light'
    });

    const provider = await web3Modal.connect();

    await subscribeProvider(provider);

    console.log('current provider is')
    console.log(provider)

    const web3 = initWeb3(provider);

    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    console.log('current address is')
    console.log(address)

    commit('startProviderSuccess', {web3: web3, account: address, connected: true})
}