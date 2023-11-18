import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectWallet } from './layout/MainLayout/Header/ProfileSection/connectWallet';
import { ethers } from 'ethers';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';


import 'assets/scss/style.scss';
import config from './config';

// ==============================|| REACT DOM RENDER  ||============================== //

const client = createClient({
  autoConnect: true,
  provider: new ethers.providers.InfuraProvider('testnet', 'your-infura-id'), // Replace 'your-infura-id' with your Infura ID
  webSocketProvider: new ethers.providers.InfuraProvider('mainnet', 'your-infura-id'), // Optional, for WebSocket support
});

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
    <WagmiConfig client={client}>
            <App />
        </WagmiConfig>
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
