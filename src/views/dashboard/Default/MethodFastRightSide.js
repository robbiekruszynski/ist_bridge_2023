// import * as React from 'react';
import {Box, Typography,LinearProgress} from '@mui/material';


export default function MethodNormalRightSide(props) {
  // const [currency, setCurrency] = React.useState('eth');
  console.log(props);

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);

  //   if (props.location == 'from') {
  //       document.getElementById(`to-currency`).innerHTML = event.target.value.toUpperCase(); 
  //   }
    
  // };


//   const styleForLinearProgress = `#batch-status-progress-bar { height: 30px; } #batch-status-progress-bar > span:before { content:"${Math.round(props.batchProgress / 10 )} / 10"; text-align: right; padding-right: 24px;color: #fff; display: block; height: 30px; line-height: 30px; font-weight: bold; }`;
//   const styleForLinearProgress = `#tx-type-fast-card { background-color: }`;
  return (
    <Box pl={2} pr={2} id="method-fast-right-side-container" >
      <Typography mt={0.25} component="h4" variant="h5">Users In Current Batch</Typography>
      <LinearProgress id="batch-status-progress-bar" variant="determinate" value={props.batchProgress} sx={{width:'70%'}} />
      <Typography mt={1} sx={{color: props.theme.palette.grey[500]}}>In <b>Fast Speed</b> mode your transaction will submitted to the L2 bridge as soon as you make it. Any outstanding transactions in a batch will be submitted with yours. This means it will only cost you the remainder of the batch. Right now there are {Math.round( props.batchProgress / 10 )}/10 spots filled up in the batch, meaning you only have to pay {10 - Math.round( props.batchProgress / 10 )}/10 of all of the normal gas fees of bridging safely from L2 -&gt; L1 -&gt; L2!</Typography>
    </Box>
  );
}