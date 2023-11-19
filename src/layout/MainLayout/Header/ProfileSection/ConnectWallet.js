import React from 'react';
import { useWeb3Modal } from '@web3modal/ethers5/react';
import Button from '@mui/material/Button'; // Import MUI Button

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => open()}>
        Connect Wallet
      </Button>
    </>
  );
}