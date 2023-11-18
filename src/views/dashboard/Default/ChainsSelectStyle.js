import {Networks} from 'views/utilities/Networks';

// import { useTheme } from '@mui/material/styles';

// import zkSyncEraIcon from 'assets/images/icons/zkSyncEra.png';
// import zkSyncLiteIcon from 'assets/images/icons/zkSyncLite.png';
// import ArbitrumIcon from 'assets/images/icons/Arbitrum.svg';
// import PolygonIcon from 'assets/images/icons/Polygon.svg';
// import ScrollIcon from 'assets/images/icons/Scroll.png';



const ChainSwitcherStyle = () => {   

    // const css = "";

    // const theme = useTheme();


    const chainsObj = Networks();

    // console.log(chainsObj);

    const chains = Object.keys(chainsObj);

    let OutputStyle = "";

    chains.forEach((chain) => {
        // let i = index;
        // console.log(chain);
        let thisChainData = chainsObj[chain];

        // background
        // OutputStyle += `#to-card.${chain},#from-card.${chain} { background-color: ${thisChainData.colors.section.primary}}`;
        // background bubbles
        // OutputStyle += `#to-card.${chain}:after,#from-card.${chain}:after { background-color: ${thisChainData.colors.section.primaryDark}} #to-card.${chain}:before,#from-card.${chain}:before { background-color: ${thisChainData.colors.section.primaryDark}}`;
        // chain select background
        OutputStyle += `#to-card.${chain} #chain-select-to,#from-card.${chain} #chain-select-from { background-color: ${thisChainData.colors.section.primaryDark}}`;
        // address color
        OutputStyle += `#to-card.${chain} #to-address,#to-card.${chain} #to-address::placeholder { color: ${thisChainData.colors.text.primaryLight}; } `;
        // to input color
        OutputStyle += `#to-card.${chain} #to-address-container .MuiInput-underline:after,#to-card.${chain} #to-address-container .MuiInput-underline:before { border-color: ${thisChainData.colors.text.primaryLight}; }`;

    });

    // add box shadow to cards on hover 
    // OutputStyle += `#to-card:hover, #from-card:hover { box-shadow: rgba(32, 40, 45, 0.08) 0px 2px 14px 0px; }#to-card, #from-card { transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;}`;

    return (
        <style id="chainSwitcherStyle">{OutputStyle}</style>
    );
};


export default ChainSwitcherStyle;