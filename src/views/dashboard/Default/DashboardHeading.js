import { useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
// import HelpIcon from '@mui/icons-material/Help';

const DashboardHeading = () => {
    const theme = useTheme();
    // const isCentered = true;

    return (
        <>
        <Box mb={2} mt={4} >
            {/* <Typography component="h2" variant="h1" title="Bridge Funds Trustlessly From L2 to L2">
                Bridge Trustlessly  
                <sup><Tooltip disableFocusListener title="Unlike all other cross-L2 bridges, SafeBridge bridges funds via L1, uses native L2 message passing, & doesn't rely on any relayers or LPs.">
                    <HelpIcon fontSize="small" color="disabled" />
                </Tooltip></sup>
            </Typography> */}
            <Typography component="h2" variant="h1" title="Bridge Funds Trustlessly From L2 to L2">
                {/* Bridge Trustlessly   */}
                Trust Minimized L2 Bridge
            </Typography>
            
        </Box>
        {/* <Box mb={2}> */}
        <Box mb={1.25}>
        <Typography variant="body2" sx={{maxWidth:"800px",fontSize:"1rem",color: theme.palette.grey[500]}} >Unlike all other L2 to L2 cross chain bridges, SafeBridge transfers funds directly via L1 using the L2s native message passing, and doesn&apos;t rely on any relayers or LPs.</Typography>
            {/* <Typography variant="body2" sx={{maxWidth:"800px",fontSize:"1rem",color: theme.palette.grey[500]}} >Unlike all other L2 to L2 cross chain bridges, SafeBridge transfers funds directly via L1 using the L2s native message passing, and doesn&apos;t rely on any relayers or LPs. We offer two options for users: 1. &quot;Normal Speed&quot; you will be batched with other users and all of the gas fee is amortized across the users, or 2. &quot;Fast Speed&quot; where a user can simply do a fast transfer and get a better UX than going through L1.</Typography> */}
        </Box>
   
    </>);
}

export default DashboardHeading;