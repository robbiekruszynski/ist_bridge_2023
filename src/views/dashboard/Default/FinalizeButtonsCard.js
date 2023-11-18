// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box, Button } from '@mui/material';
// import { Grid, Box, Button } from '@mui/material';

// import MethodFastSpeed from './MethodFastSpeed';
// import MethodNormalSpeed from './MethodNormalSpeed';
// third-party
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';



// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const FinalizeButtonsCard = () => {
  // const [value, setValue] = useState('today');
  // const theme = useTheme();
  // const customization = useSelector((state) => state.customization);

  return (
    <>
      <Box mb={1} pt={1}>
        <Typography component="h3" variant="h4" >Confirm Transfer</Typography>
    </Box>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} >
                <Button variant="contained" size="large" color="primary" sx={{width: '100%',pt:2,pb:2}}>Bridge</Button>
              </Grid>
              {/* <Grid item xs={12} >
                <MethodFastSpeed isLoading={isLoading} />
              </Grid> */}
            </Grid>
          </Grid>
      </Grid>
    </>
  );
};

// FinalizeButtonsCard.propTypes = {
//   isLoading: PropTypes.bool
// };

export default FinalizeButtonsCard;
