// blockchainService.js
require('dotenv').config();
const ethers = require('ethers');
const WalletConnectProvider = require("@walletconnect/web3-provider").default;

async function addFundsToContract() {
    // WalletConnect provider setup
    const provider = new WalletConnectProvider({
        rpc: { PROVIDER_URL } // Replace PROVIDER_URL with your Ethereum node URL
    });

    // Connect to the provider
    await provider.enable();

    // Use the provider to create a new ethers provider
    const ethersProvider = new ethers.providers.Web3Provider(provider);

    // Import the private key from .env file
    const privateKey = process.env.PRIVATE_KEY;

    // Create a wallet using the private key and connect it to the provider
    const wallet = new ethers.Wallet(privateKey, ethersProvider);

    // Contract details
    const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract's address
    const contractABI = [...] // Replace with your contract's ABI // <--------------------------ERROR FOUND HERE 

    // Create a contract instance with the wallet
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);

    // Call the addFunds function
    const tx = await contract.addFunds({ value: ethers.utils.parseEther("0.1") }); // 0.1 ETH as an example

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    return receipt;
}

module.exports = {
    addFundsToContract
};