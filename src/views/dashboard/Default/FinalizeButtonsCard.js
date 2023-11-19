import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { ethers } from 'ethers';
import { gridSpacing } from 'store/constant';

const FinalizeButtonsCard = () => {
  // Function to handle the bridge operation
  const handleBridge = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        // Example transaction - Replace with your actual transaction details
        const transaction = {
          to: address, // Assuming sending to the user's address for demonstration
          value: ethers.utils.parseEther("0.01"), // Example amount - 0.01 ETH
        };

        // Prompt user to confirm the transaction
        const txResponse = await signer.sendTransaction(transaction);
        console.log('Transaction response:', txResponse);
      } else {
        console.error('Ethereum object not found, install MetaMask.');
      }
    } catch (error) {
      console.error('Error during the transaction:', error);
    }
  };

  return (
    <>
      <Box mb={1} pt={1}>
        <Typography component="h3" variant="h4">Confirm Transfer</Typography>
      </Box>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ width: '100%', pt: 2, pb: 2 }}
                onClick={handleBridge} // Call handleBridge when the button is clicked
              >
                Bridge
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FinalizeButtonsCard;

