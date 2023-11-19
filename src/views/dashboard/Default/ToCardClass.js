// import PropTypes from 'prop-types';
import { Component } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import ChainSelect from './ChainsSelectClass';
// import CurrencySelect from './CurrencySelect'



// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //


export default class ToCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chain: this.props.chain
        }
        this.updateChain = this.updateChain.bind(this);

        // this.oppositeElement = 'from';

    }

    handleAmountChange(event) {

        const oppositeElement = 'from';
        
        document.getElementById(`${oppositeElement}-amount`).value = event.target.value;
    }
   

    updateChain(thisChain) {
        // this.setState((thisChain) => thisChain);
        this.setState({chain: thisChain});
        // this.props.updateChain((thisChain) => thisChain);
        this.props.updateChain(thisChain);
    }

    // HACK FIX TO UPDATE CHILD STATE
    // doNothing() {
        
    // }
    //If u wants to change the data of child wrt parent, then use componentDidUpdate(), which will get called whenever data is updated. refer here
    componentDidUpdate(prevProps) {
        // console.log("componentDidUpdate - To Card Class");
        if (this.props.chain !== prevProps.chain) {
            this.setState({chain: this.props.chain})

            // console.log(this.state);
            // this.removeAllPrevClasses(prevProps, this.state.chain);

        }
    }


    render() {
        
        const CardWrapper = styled(MainCard)(({ theme }) => ({
            backgroundColor: this.props.networks[this.state.chain].colors.section.primary,
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&>div': {
              position: 'relative',
              zIndex: 5
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: this.props.networks[this.state.chain].colors.section.primaryDark,
              borderRadius: '50%',
              zIndex: 1,
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
              zIndex: 1,
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
        const textFieldInlineStyle = "#to-amount,#to-amount::placeholder{text-align:right;font-size: 2.125rem; font-weight: 500; margin-right: 8px; margin-top: 14px; margin-bottom: 6px; color: #fff; margin: 0; border-color: rgba(255,255,255,0.8);} #to-amount-container .MuiInputBase-formControl:before {border-color:rgba(255,255,255,0.8)} #to-amount-container .MuiInput-underline:after{border-color:#fff}/* Hide number arrows - Chrome, Safari, Edge, Opera */ #to-amount::-webkit-outer-spin-button, #to-amount::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } /* Hide number arrows - Firefox */ #to-amount[type=number] { -moz-appearance: textfield; }";
        const addresstextFieldInlineStyle = `#to-address, #to-address::placeholder {font-weight: 500; font-size: 1rem; padding-top: 0; padding-bottom: 0;} `;

        return(
            <>
            <Box mb={1}><Typography component="h3" variant="h3">To</Typography></Box>
            {this.props.isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper id="to-card" className={this.state.chain} border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-between">
                            <Grid item>

                                <ChainSelect updateChain={this.updateChain} chain={this.state.chain} location="to" networks={this.props.networks}  />
                                
                            </Grid>
                            <Grid item>
                                
                            </Grid>

                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                            <Grid item id="to-amount-container" sx={{ width: '60%' }}>
                                {/* <Typography id="to-amount" sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                    00.00
                                </Typography> */}
                                <style>{textFieldInlineStyle}</style>
                                {/* mt was previously 1.75 */}
                                <TextField type="number" onChange={this.handleAmountChange} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="to-amount" sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1, mb: 0.75 }} placeholder="0.000" variant="standard" />
                            </Grid>
                            <Grid item>
                                {/* mt was previously 1.75 */}
                                <Typography id="to-currency" sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1, mb: 0.75}}>ETH</Typography>

                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }} id="to-address-container">
                            <Typography
                                sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: this.props.networks[this.state.chain].colors.text.primaryLight,
                                display: 'inline-block',
                                paddingRight: "4px"
                                }}
                                // noWrap="true"
                            >
                                To: 
                            </Typography>
                            <style>{addresstextFieldInlineStyle}</style>
                            <TextField id="to-address" sx={{ 
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: this.props.networks[this.state.chain].colors.text.primaryLight,
                                defaultValue:  'Not connected',
                                value: this.state.walletAddress,
                                width: "50%",
                                verticalAlign: "baseline"
                            }} placeholder="0x..." defaultValue="0x2d0Df096b42c9ff55E71E57250A47D2D0551d7Fb" variant="standard" />
                        </Grid>
                        </Grid>
                    </Box>
                    </CardWrapper>
            )}
            </>
        )
    }
}
