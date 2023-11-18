import React from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Button } from '@mui/material';

const WalletUtils = () => {
    const handleConnectWallet = async () => {
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: 'YOUR_INFURA_ID' // Replace with your Infura ID
                }
            }
            // You can add more providers here
        };

        const web3Modal = new Web3Modal({
            network: 'mainnet', // Replace with the desired network
            cacheProvider: true,
            providerOptions
        });

        try {
            const connection = await web3Modal.connect();
            // const provider = new ethers.Web3Provider(connection);
            // const signer = provider.getSigner();
            // const address = await signer.getAddress();
            // console.log('Connected wallet address:', address);
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    return (
        <Button onClick={handleConnectWallet} variant="contained" color="primary">
            Connect Wallet
        </Button>
    );
};

export default WalletUtils;


