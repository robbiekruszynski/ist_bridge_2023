import React, { Component } from 'react';
import { ethers } from 'ethers';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import ChainSelect from './ChainsSelectClass';
import CurrencySelect from './CurrencySelect';

export default class FromCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chain: this.props.chain,
            walletAddress: ''
        };
        this.updateChain = this.updateChain.bind(this);
    }

    async componentDidMount() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                this.setState({ walletAddress: address });
            } catch (error) {
                console.error('Error fetching wallet address:', error);
            }
        }
    }

    handleAmountChange(event) {
        const oppositeElement = 'to';
        document.getElementById(`${oppositeElement}-amount`).value = event.target.value;
    }

    updateChain(thisChain) {
        this.setState({ chain: thisChain });
        this.props.updateChain(thisChain);
    }

    componentDidUpdate(prevProps) {
        if (this.props.chain !== prevProps.chain) {
            this.setState({ chain: this.props.chain });
        }
    }

    render() {
        const CardWrapper = styled(MainCard)(({ theme }) => ({
            backgroundColor: this.props.networks[this.state.chain].colors.section.primary,
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                width: 210,
                height: 210,
                background: this.props.networks[this.state.chain].colors.section.primaryDark,
                borderRadius: '50%',
                top: -85,
                right: -95,
                [theme.breakpoints.down('sm')]: {
                    top: -105,
                    right: -140
                }
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                width: 210,
                height: 210,
                background: this.props.networks[this.state.chain].colors.section.primaryDark,
                borderRadius: '50%',
                top: -125,
                right: -15,
                opacity: 0.5,
                [theme.breakpoints.down('sm')]: {
                    top: -155,
                    right: -70
                }
            }
        }));
        const textFieldInlineStyle = "#from-amount,#from-amount::placeholder{text-align:right;font-size: 2.125rem; font-weight: 500; margin-right: 8px; margin-top: 14px; margin-bottom: 6px; color: #fff; margin: 0; border-color: rgba(255,255,255,0.8);} #from-amount-container .MuiInputBase-formControl:before {border-color:rgba(255,255,255,0.8)} #from-amount-container .MuiInput-underline:after{border-color:#fff} /* Hide number arrows - Chrome, Safari, Edge, Opera */#from-amount::-webkit-outer-spin-button, #from-amount::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } /* Hide number arrows - Firefox */ #from-amount[type=number] { -moz-appearance: textfield; }";

        return (
            <>
                <Box mb={1}>
                    <Typography component="h3" variant="h3">From</Typography>
                </Box>
                {this.props.isLoading ? (
                    <SkeletonEarningCard />
                ) : (
                    <CardWrapper id="from-card" className={this.state.chain} border={false} content={false}>
                        <Box sx={{ p: 2.25 }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container justifyContent="space-between">
                                        <Grid item>
                                            <ChainSelect
                                                updateChain={this.updateChain}
                                                chain={this.state.chain}
                                                location="from"
                                                networks={this.props.networks}
                                            />
                                        </Grid>
                                        <Grid item>
                                            {/* Empty grid item for spacing */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Grid item id="from-amount-container" sx={{ width: '60%' }}>
                                            <style>{textFieldInlineStyle}</style>
                                            <TextField
                                                id="from-amount"
                                                onChange={this.handleAmountChange}
                                                type="number"
                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1, mb: 0.75 }}
                                                placeholder="0.000"
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item>
                                            <CurrencySelect location="from" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{ mb: 1.25 }} id="from-address-container">
                                    <Typography
                                        noWrap="true"
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: this.props.networks[this.state.chain].colors.text.primaryLight
                                        }}
                                        style={{
                                            paddingBottom: '1.66px',
                                            maxWidth: '58%'
                                        }}
                                    >
                                        From: {this.state.walletAddress || 'Not connected'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardWrapper>
                )}
            </>
        );
    }
}

