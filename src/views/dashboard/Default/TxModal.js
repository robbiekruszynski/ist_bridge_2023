import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import { gridSpacing } from 'store/constant';
import {LinearProgress} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green } from '@mui/material/colors';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '12px',
  border:"none",
  width:"60%",
  overflow:'Scroll',
  height:'90%'
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendAmount = 'Send '+'2.000'+' '+'ETH';

  const cardFromColor = props.networks['arbitrum'].colors.section.primary;
  const cardToColor = props.networks['scroll'].colors.section.primary;

  const cardFromTextColor = props.networks['arbitrum'].colors.text.primary;
  const cardToTextColor = props.networks['scroll'].colors.text.primary;

  const cardFromTextLabel = props.networks['arbitrum'].label;
  const cardToTextLabel = props.networks['scroll'].label;
  
  // console.log(cardFromColor);

  const styleForLinearProgressMove = `#method-fast-right-side-container #batch-status-progress-bar { background-color: ${props.theme.palette.warning.dark} } #batch-status-progress-bar { height: 30px; border-radius: 8px; } #batch-status-progress-bar > span:before { content:"Step 1/6"; text-align: right; padding-right: 24px;color: #fff; display: block; height: 30px; line-height: 30px; font-weight: bold; }`;
    


  return (
    <div>
      
      <Button onClick={handleOpen} size="small" sx={{color:"inherit",marginLeft:"-5px",mt:0.5}} >View More</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                    <Grid item xs={12} >
                      <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                        <Grid item xs={12} md={10}style={{paddingBottom: "15px",paddingLeft: "0"}}>
                          <Typography variant="h2" component="h3">
                            {sendAmount}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                          <Box sx={{borderRadius:"50%",height:"150px",width:"150px",textAlign:"center",display:"inline-block",backgroundColor: cardFromColor}}>
                              <Typography sx={{verticalAlign: "center",color: cardFromTextColor,fontWeight:"bold",paddingTop:"65px"}} variant="h4" component="h4">
                                {cardFromTextLabel}
                              </Typography>
                          </Box>
                          <Typography style={{paddingTop:'10px'}}>
                            View Transaction
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                          <Box sx={{height:"150px",textAlign:"center",display:"inline-block",paddingTop:"57.5px"}}>
                            {/* <svg data-testid="ArrowForwardIcon"></svg> */}
                            <ArrowForwardIcon fontSize="large" />
                              {/* {ArrowForwardIcon} */}
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{textAlign:"center"}}>
                          <Box sx={{borderRadius:"50%",height:"150px",width:"150px",textAlign:"center",display:"inline-block",backgroundColor: cardToColor}}>
                              <Typography sx={{verticalAlign: "center",color: cardToTextColor,fontWeight:"bold",paddingTop:"65px"}} variant="h4" component="h4">
                                {cardToTextLabel}
                              </Typography>
                          </Box>
                          <Typography style={{paddingTop:'10px'}}>
                            View Transaction
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                      
                      </Grid>
                    </Grid>
                    <Grid item xs={12} >
                      <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                        <Grid item xs={12} md={10} style={{paddingTop: "40px",paddingLeft: "0"}}>
                          <LinearProgress id="batch-status-progress-bar" variant="determinate" value='16.7' sx={{width:'100%'}} />
                          <style>{styleForLinearProgressMove}</style>
                          {/* <PreviousTxsCard isLoading={isLoading} /> */}
                          <Typography id="transition-modal-description" sx={{ mt: 4 }} variant="h4" component="h6">
                            Step 1
                          </Typography>
                          <Typography id="transition-modal-description">
                            TX added to Batch <br></br><CheckCircleIcon sx={{ color: green[500], verticalAlign: 'middle' }} fontSize="medium" />
                          </Typography>

                          <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" component="h6">
                            Step 2
                          </Typography>
                          <Typography id="transition-modal-description">
                            Batch full - Sent batch to L2 bridge <br></br><RadioButtonUncheckedIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" />
                          </Typography>

                          <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" component="h6">
                            Step 3
                          </Typography>
                          <Typography id="transition-modal-description">
                            L2 bridge withdrawal finalized + sent funds to other L2 Bridge <br></br><RadioButtonUncheckedIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" /> <Button disabled variant="contained" color="primary">Claim</Button>
                          </Typography>

                          <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" component="h6">
                            Step 4
                          </Typography>
                          <Typography id="transition-modal-description">
                            L2 bridge deposited funds to L2 escrow <br></br><RadioButtonUncheckedIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" />
                          </Typography>

                          <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" component="h6">
                            Step 5
                          </Typography>
                          <Typography id="transition-modal-description">
                            Funds ready to be claimed - Claim now or wait for someone else to initialize distribution of batch <br></br><RadioButtonUncheckedIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" /> <Button disabled variant="contained" color="primary">Claim</Button>
                          </Typography>

                          <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" component="h6">
                            Step 6
                          </Typography>
                          <Typography id="transition-modal-description">
                            Done! - All funds bridged & distributed <br></br><RadioButtonUncheckedIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" /><RocketLaunchIcon sx={{ verticalAlign: 'middle' }} fontSize="medium" />
                          </Typography>

                          {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                          - Step 1 “TX added to Batch”<br /> - Step 2 “Batch full - Sent batch to L2 bridge”<br /> - Step 3 “L2 bridge withdrawal finalized + sent funds to other L2 Bridge (NOTE, MAY REQUIRE CLAIM!! In beginning can pay percentage upchrage to user who claims, or to relayer)”<br /> - Step 4 “L2 bridge deposited funds to L2 escrow”<br />  - Step 5 “Funds ready to be claimed - Claim now or wait for someone else to initialize distribution of batch”<br />   - Step 6 “Done!”
                          </Typography> */}


                          {/* <Button variant="text" color="primary" sx={{width: '100%',pt:2,pb:2}}>Speed Up</Button> */}
                          <Button variant="contained" disabled color="primary" sx={{mt:4}}>Speed Up Tx (~$3.10)</Button>
                        </Grid>
                        <Grid item xs={12} md={1} sx={{textAlign:"center"}}>
                        </Grid>
                        
                      </Grid>
                    </Grid>
                  
                </Grid>
                
              </Grid>
            
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}