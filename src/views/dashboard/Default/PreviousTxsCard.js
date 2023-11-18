import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardActions, CardContent, Divider, Grid, Typography, LinearProgress } from '@mui/material';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import TxModal from './TxModal';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { blue } from '@mui/material/colors';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PreviousTxsCard = (props, { isLoading }) => {
  const theme = useTheme();

  const progress = {
    PreviousTx0x1 : 66,
    PreviousTx0x2 : 100,
  };

//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
// const handleProgress = (event) => {
//     // setAnchorEl(event.currentTarget);
//     console.log(event.target.id);
//     if (progress[event.target.id] === 100) {
//         event.target.classList += "tx-complete";
//     }
//     return progress[event.target.id];
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  let inlineCss = `#previous-txs-card .MuiLinearProgress-root { border-radius: 8px; } #previous-txs-card .MuiLinearProgress-root > span:before { text-align: right; padding-right: 24px; color: #fff; display: block; height: 24px; line-height: 24px; font-weight: bold;}`;
  inlineCss += `#previous-txs-card  #PreviousTx0x2 span { background-color: ${blue[800]} } #previous-txs-card  #PreviousTx0x2 span:before {content: "Finished!"; text-align: center; padding-right: 0px;}`;
  inlineCss += `#previous-txs-card  #PreviousTx0x1 span:before {content: "~1h Left!"; }`;
  
  

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false} id="previous-txs-card">
          <style>{inlineCss}</style>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Previous Transactions</Typography>
                  </Grid>
                  <Grid item>
                    {/* <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: 'pointer'
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}> Today</MenuItem>
                      <MenuItem onClick={handleClose}> This Month</MenuItem>
                      <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </Menu> */}
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <BajajAreaChartCard />
              </Grid> */}
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Send 2.000000 ETH
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            {/* <Typography variant="subtitle1" color="inherit">
                              $1839.00
                            </Typography> */}
                          </Grid>
                          <Grid item>
                            {/* <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" mb={1} >
                      Polygon zkEVM -&gt; zkSync Era
                    </Typography>
                    <LinearProgress id="PreviousTx0x1" variant="determinate" value={progress['PreviousTx0x1']} sx={{height:"24px"}} />
                    <TxModal tx="PreviousTx0x1" progress={progress['PreviousTx0x1']}  theme={theme} networks={props.networks} />
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Send 100.000000 DAI
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            {/* <Typography variant="subtitle1" color="inherit">
                              $1839.00
                            </Typography> */}
                          </Grid>
                          <Grid item>
                            {/* <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" mb={1} >
                    zkSync Era -&gt; Scroll
                    </Typography>
                    <LinearProgress id="PreviousTx0x2" variant="determinate" value={progress['PreviousTx0x2']} sx={{height:"24px"}} />
                    <TxModal tx="PreviousTx0x2" progress={progress['PreviousTx0x2']} theme={theme} networks={props.networks} />
                  </Grid>
                </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Send .100500 ETH
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            {/* <Typography variant="subtitle1" color="inherit">
                              $1839.00
                            </Typography> */}
                          </Grid>
                          <Grid item>
                            {/* <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar> */}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2" mb={1} >
                    zkSync Lite -&gt; zkSync Era
                    </Typography>
                    <LinearProgress id="PreviousTx0x2" variant="determinate" value={progress['PreviousTx0x2']} sx={{height:"24px"}} />
                    <TxModal tx="PreviousTx0x2" progress={progress['PreviousTx0x2']}  theme={theme} networks={props.networks} />
                  </Grid>
                </Grid>
                </Grid>
                
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PreviousTxsCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PreviousTxsCard;
