// import PropTypes from 'prop-types';
import { Component } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TransferSpeedCard from 'ui-component/cards/Skeleton/TransferSpeedCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/Bolt';
// import FastForwardIcon from '@mui/icons-material/FastForward';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  border: "2px transparent solid",
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //
export default class MethodFastSpeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txType: this.props.txType
        }
        this.updateType = this.updateType.bind(this);


    }

   

    updateType() {
        let thisVal = 'fast';
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
              {this.props.isLoading ? (
                <TransferSpeedCard />
              ) : (
                <CardWrapper onClick={this.updateType} id="tx-type-fast-card" border={false} className={(this.props.txType == 'batched') ? '' : 'is-chosen-tx-type'} content={false} sx={{cursor: 'pointer',borderColor:(this.props.txType == 'batched') ? 'transparent' : theme.palette.warning.dark}}>
                  <Box sx={{ p: 1.25 }}>
                    <List sx={{ py: 0 }}>
                      <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            sx={{
                              ...theme.typography.commonAvatar,
                              ...theme.typography.largeAvatar,
                              backgroundColor: theme.palette.warning.light,
                              color: theme.palette.warning.dark
                            }}
                          >
                            <StorefrontTwoToneIcon fontSize="inherit" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            py: 0,
                            mt: 0.45,
                            mb: 0.45
                          }}
                          primary={<Typography variant="h4">Fast Speed (~1h)</Typography>}
                          secondary={
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: theme.palette.grey[500],
                                mt: 0.5
                              }}
                            >
                              Fees: $33.30
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

// const MethodFastSpeed = ({ isLoading }) => {
//   const theme = useTheme();

  
// };

// MethodFastSpeed.propTypes = {
//   isLoading: PropTypes.bool
// };

// export default MethodFastSpeed;
