// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Component } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';

import MethodFastSpeed from './MethodFastSpeed';
import MethodNormalSpeed from './MethodNormalSpeed';

import MethodNormalRightSide from './MethodNormalRightSide';
import MethodFastRightSide from './MethodFastRightSide';
// third-party
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
// import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';



// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

export default class MethodCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
          txType: 'batched',
          batchProgress: 60 // out of 100
      }
      this.updateType = this.updateType.bind(this);

      // this.theme = this.props.theme;
      // console.log(this.props);
      // console.log(this.props.theme);
      

  }

  updateType(newTxType) { 

    // this.setState({
    //   ...this.state,
    //   txType: newTxType,
    // });
    this.setState({
      txType: newTxType,
      batchProgress: this.state.batchProgress
    });

  }

  render() {
    
    // console.log(this.props.theme);
    const styleForIsActive = `#tx-type-fast-card:hover, #tx-type-batched-card:hover { box-shadow: rgba(32, 40, 45, 0.08) 0px 2px 14px 0px; }#tx-type-fast-card, #tx-type-batched-card { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;}`;
    const styleForLinearProgress = `#method-fast-right-side-container #batch-status-progress-bar { background-color: ${this.props.theme.palette.warning.dark} } #batch-status-progress-bar { height: 30px; border-radius: 8px; } #batch-status-progress-bar > span:before { content:"${Math.round(this.state.batchProgress / 10 )} / 10"; text-align: right; padding-right: 24px;color: #fff; display: block; height: 30px; line-height: 30px; font-weight: bold; }`;
     
    return (
      <>
        <Box mb={1} pt={1}><Typography component="h3" variant="h4">Transfer Type</Typography></Box>
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} >
                  <MethodNormalSpeed isLoading={this.props.isLoading} updateType={this.updateType} txType={this.state.txType} theme={this.props.theme} />
                </Grid>
                <Grid item xs={12} style={{paddingTop: '14px'}} >
                  <MethodFastSpeed isLoading={this.props.isLoading} updateType={this.updateType} txType={this.state.txType} theme={this.props.theme} />
                  <style>{styleForIsActive}</style>
                  <input type="text" id="transfer-type" name="transfer-type" value={this.state.txType} style={{display:'none'}}></input>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12} >
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} >
                  <style>{styleForLinearProgress}</style>
                  {(this.state.txType === 'batched') ? <MethodNormalRightSide batchProgress={this.state.batchProgress} theme={this.props.theme}/> : <MethodFastRightSide batchProgress={this.state.batchProgress} theme={this.props.theme}/>}
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </>
    );
  }
}

// MethodCard.propTypes = {
//   isLoading: PropTypes.bool
// };

// export default MethodCard;
