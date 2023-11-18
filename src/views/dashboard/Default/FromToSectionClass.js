import { Component } from 'react';
// material-ui
import { Grid } from '@mui/material';

// project imports
import FromCard from './FromCardClass';
import ToCard from './ToCardClass';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
// import DashboardHeading from './DashboardHeading';
import { gridSpacing } from 'store/constant';
import ChainSwitcherStyle from './ChainsSelectStyle';



export default class FromToSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fromChain: 'polygonzkevm',
            toChain: 'zksyncera'
        }
        this.updateFromChain = this.updateFromChain.bind(this);
        this.updateToChain = this.updateToChain.bind(this);

        // this.defaultFromSelectState = 'polygonzkevm';
        // this.defaultToSelectState = 'zksyncera';
    }

   
    updateFromChain(fromChainNew) {

        if (fromChainNew == this.state.toChain ) {
            this.setState({
                fromChain: fromChainNew,
                toChain: this.state.fromChain,
            });
        } else {
            this.setState({
                fromChain: fromChainNew,
                toChain: this.state.toChain
            });
        }

        // if (fromChainNew == toChain ) {
        // // let fromChain = fromChain;
        // setToChain((fromChain) => fromChain);
        // }

        // setFromChain((fromChainNew) => fromChainNew);
        // // console.log('setFromChain');
        // // console.log(setFromChain);
    
    }

    updateToChain(toChainNew) {
        if (toChainNew == this.state.fromChain ) {
            this.setState({
                fromChain: this.state.toChain,
                toChain: toChainNew
            });
        } else {
            this.setState({
                fromChain: this.state.fromChain,
                toChain: toChainNew
            });
        }

        // if (toChainNew == this.state.fromChain ) {
        // // let fromChain = fromChain;
        // setFromChain((toChain) => toChain);
        // } else {

        // }

        // setToChain((toChainNew) => toChainNew);

    }

    // HACK FIX TO UPDATE CHILD STATE
    // doNothing() {

    // }
   

    // //If u wants to change the data of child wrt parent, then use componentDidUpdate(), which will get called whenever data is updated. refer here
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState);
    //     this.doNothing(prevState); // HACK FIX TO UPDATE CHILD STATE

       
    // }

    // componentDidMount() {
    //     let thisCard = document.getElementById(`${this.props.location}-card`);
    //     removeAllPrevClasses(thisCard)
    //     thisCard.classList.add(thisChain);
    // }

    render() {
       
        return(
            <Grid container spacing={gridSpacing}>

                 {/* Inline Style for siwtching chains */}
                <ChainSwitcherStyle fromChain={this.state.fromChain} toChain={this.state.toChain} />
        
                {/* <FromToSection isLoading={isLoading} /> */}
                <Grid item md={6} sm={12} xs={12}>
                    <FromCard isLoading={this.props.isLoading} updateChain={this.updateFromChain} chain={this.state.fromChain} networks={this.props.networks} />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <ToCard isLoading={this.props.isLoading} updateChain={this.updateToChain} chain={this.state.toChain} networks={this.props.networks} />
                </Grid>
                
            </Grid>
        )
    }
}