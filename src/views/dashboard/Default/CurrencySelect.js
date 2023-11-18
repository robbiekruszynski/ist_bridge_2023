import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useTheme } from '@mui/material/styles';

// assets
import ETHIcon from 'assets/images/icons/eth.svg';
import DAIIcon from 'assets/images/icons/dai.png';
import GHOIcon from 'assets/images/icons/gho.svg';
import USDCIcon from 'assets/images/icons/usdc.png';
import USDTIcon from 'assets/images/icons/usdt.png';

export default function CurrencySelect(props) {
  const [currency, setCurrency] = React.useState('eth');
//   console.log(props.test);

  const handleChange = (event) => {
    setCurrency(event.target.value);

    if (props.location == 'from') {
        document.getElementById(`to-currency`).innerHTML = event.target.value.toUpperCase(); 
    }
    
  };

//   const theme = useTheme();

  const iconStyle = {width:'24px',height:'24px',marginRight:"5px",verticalAlign:"bottom"};
  const customSelectStyle = `#currency-select-${props.location} {padding: 0 23px 0 0;} #currency-select-${props.location}-container {padding-top: 3px;} #currency-select-${props.location} > img {display:none;} #currency-select-${props.location},#currency-select-${props.location}-container > .MuiInputBase-root {color:#fff;background:transparent;} #currency-select-${props.location}-container fieldset{border-color: transparent;} #currency-select-${props.location}-container .MuiSvgIcon-root {color: #fff; right:0;}`;

  return (
    <Box sx={{ minWidth: 120 }} id={`currency-select-${props.location}-container`}>
      <style>{customSelectStyle}</style>
      {/* <FormControl fullWidth> */}
        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
        <Select
          labelId={`currency-select-${props.location}-label`}
          id={`currency-select-${props.location}`}
          value={currency}
          label={`Bridge ${props.location}`}
          onChange={handleChange}
          // mt was previously 1.75
          sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1, mb: 0.75}}
        >
          <MenuItem value='eth'><img style={iconStyle} src={ETHIcon} alt="ETH" /> ETH</MenuItem>
          <MenuItem value='dai'><img style={iconStyle} src={DAIIcon} alt="DAI" /> DAI</MenuItem>
          <MenuItem value='gho'><img style={iconStyle} src={GHOIcon} alt="GHO" /> GHO</MenuItem>
          <MenuItem value='usdc'><img style={iconStyle} src={USDCIcon} alt="USDC" /> USDC</MenuItem>
          <MenuItem value='usdt'><img style={iconStyle} src={USDTIcon} alt="USDT" /> USDT</MenuItem>
        </Select>
      {/* </FormControl> */}
    </Box>
  );
}