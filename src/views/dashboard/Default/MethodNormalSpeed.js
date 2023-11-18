// import PropTypes from 'prop-types';
import { Component } from 'react';
// material-ui
import { styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TransferSpeedCard from 'ui-component/cards/Skeleton/TransferSpeedCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/AccessTime';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.dark,
//   color: theme.palette.primary.light,
//   border: `2px ${theme.palette.primary.dark} solid`,
  border: "2px transparent solid",
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

export default class MethodNormalSpeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txType: this.props.txType
        }
        this.updateType = this.updateType.bind(this);
    


    }

   
    updateType() {
        let thisVal = 'batched';
        // this.setState((thisChain) => thisChain);
        this.setState({txType: thisVal});
        // this.props.updateChain((thisChain) => thisChain);
        this.props.updateType(thisVal);
    }


    //If u wants to change the data of child wrt parent, then use componentDidUpdate(), which will get called whenever data is updated. refer here
    componentDidUpdate(prevProps) {

        if (this.props.txType !== prevProps.txType) {
            this.setState({txType: this.props.txType})
        }
    }


    render() {
        const theme = this.props.theme;
        return (
        <>
            {this.isLoading ? (
            <TransferSpeedCard />
            ) : (
            <CardWrapper onClick={this.updateType} id="tx-type-batched-card" border={false} className={(this.props.txType == 'batched') ? 'is-chosen-tx-type' : ''} content={false} sx={{cursor: 'pointer',borderColor:(this.props.txType == 'batched') ? theme.palette.primary.dark : 'transparent'}}>
                <Box sx={{ p: 1.25 }}>
                <List sx={{ py: 0 }}>
                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                    <ListItemAvatar>
                        <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                        //   backgroundColor: theme.palette.primary[800],
                            backgroundColor: theme.palette.primary.dark,
                            color: '#fff'
                        }}
                        >
                        <TableChartOutlinedIcon fontSize="inherit" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        sx={{
                        py: 0,
                        mt: 0.45,
                        mb: 0.45
                        }}
                        primary={
                        <Typography variant="h4">
                            Normal Speed (~3h)
                        </Typography>
                        }
                        secondary={
                        <Typography variant="subtitle2" sx={{ color: theme.palette.grey[500], mt: 0.25 }}>
                            Fees: $3.33
                        </Typography>
                        }
                    />
                    </ListItem>
                </List>
                </Box>
            </CardWrapper>
            )}
        </>
        );
    }
}

