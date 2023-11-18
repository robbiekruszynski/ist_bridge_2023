import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import { gridSpacing } from 'store/constant';

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
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cardOneColor = props.networks['polygonzkevm'].colors.section.primary;
  const cardTwoColor = props.networks['zksyncera'].colors.section.primary;
  console.log(cardOneColor);


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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            - Step 1 “TX added to Batch”<br /> - Step 2 “Batch full - Sent batch to L2 bridge”<br /> - Step 3 “L2 bridge withdrawal finalized + sent funds to other L2 Bridge (NOTE, MAY REQUIRE CLAIM!! In beginning can pay percentage upchrage to user who claims, or to relayer)”<br /> - Step 4 “L2 bridge deposited funds to L2 escrow”<br />  - Step 5 “Funds ready to be claimed - Claim now or wait for someone else to initialize distribution of batch”<br />   - Step 6 “Funds ready to be claimed - Claim now or wait for someone else to initialize distribution of batch”
            </Typography>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                    <Grid item xs={12} lg={8} xl={9}>
                        {/* <DashboardHeading /> */}
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                        <Grid item xs={12} md={5}>
                          <Box sx={{borderRadius:"50%",padding:"40px",textAlign:"center",display:"inline-block"}} style={{backgroundColor:{cardTwoColor}}}>
                              Polygon zkEVM
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Box sx={{borderRadius:"50%",padding:"40px",textAlign:"center",display:"inline-block",backgroundColor:{ cardTwoColor }}}>
                              zkSync Era
                          </Box>
                        </Grid>
                      
                      </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} >
                      <Grid container spacing={gridSpacing} isLoading={props.isLoading}>
                        <Grid item xs={12} style={{paddingTop: "55px"}}>
                          {/* <PreviousTxsCard isLoading={isLoading} /> */}
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