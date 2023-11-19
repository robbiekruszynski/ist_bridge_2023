import { useEffect, useState } from 'react';
// material-ui
import { Grid, FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MethodCard from './MethodCard';
// import DashboardHeading from './DashboardHeading';
import { gridSpacing } from 'store/constant';
// import ChainSwitcherStyle from './ChainsSelectStyle';
import { Networks } from 'views/utilities/Networks';
import FromToSection from './FromToSectionClass';
// import FromToSection from './FromToSectionTest';
import DashboardHeading from './DashboardHeading';
import FinalizeButtonsCard from './FinalizeButtonsCard';
import PreviousTxsCard from './PreviousTxsCard';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);


  
  const theme = useTheme();
  // console.log(theme);
  const networks = Networks();

  return (
    <form noValidate autoComplete="off">
    <FormControl fullWidth  pb={3}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} isLoading={isLoading}>
            <Grid item xs={12} lg={8} xl={9}>
                <DashboardHeading />
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={gridSpacing} isLoading={isLoading}>
                <Grid item xs={12}>
                  <FromToSection networks={networks} />
                </Grid>
                <Grid item xs={12}>
                  <MethodCard isLoading={isLoading} theme={theme} />
                </Grid>
                <Grid item xs={12}>
                  <FinalizeButtonsCard isLoading={isLoading} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} >
              <Grid container spacing={gridSpacing} isLoading={isLoading}>
                <Grid item xs={12} style={{paddingTop: "55px"}}>
                  <PreviousTxsCard isLoading={isLoading} networks={networks} />
                </Grid>
                
              </Grid>
            </Grid>
          
        </Grid>
        
      </Grid>
    </Grid>
    </FormControl>
    </form>
  );
};

export default Dashboard;
