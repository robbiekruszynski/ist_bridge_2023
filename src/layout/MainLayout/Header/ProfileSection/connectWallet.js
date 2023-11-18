import React from 'react';
import { useConnect, useAccount } from 'wagmi';
import { Button } from '@mui/material';

const ConnectWallet = () => {
    const [{ data, error }, connect] = useConnect();
    const [{ data: accountData }] = useAccount();

    return (
        <div>
            {accountData ? (
                <p>Connected as {accountData.address}</p>
            ) : (
                <Button 
                    onClick={() => connect(data.connectors[0])} // Connects with the first available connector
                    variant="contained" 
                    color="primary"
                >
                    Connect Wallet
                </Button>
            )}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default ConnectWallet;




