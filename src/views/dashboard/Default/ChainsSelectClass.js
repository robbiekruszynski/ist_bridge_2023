// import { useState, useEffect } from 'react';
import { Component } from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useTheme } from '@mui/material/styles';
// import { Networks } from 'views/utilities/Networks';

// assets

// const [thisChain, setThisChain] = useState(this.props.chain);

// EXAMPLE - https://stackoverflow.com/questions/69437966/react-state-change-of-parent-does-not-cause-re-rendering-of-child-when-passed
export default class ChainSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chain: this.props.chain
        }
        this.updateChain = this.updateChain.bind(this)

        this.chainsObj = this.props.networks;
        this.chains = Object.keys(this.chainsObj);
    }

    // removeAllPrevClasses(replace,add) {
    //     // console.log(thisCard);
    //     let thisCard = document.getElementById(`${this.props.location}-card`);
    //     // console.log(thisCard);
    //     // // this.removeAllPrevClassesUtil(prevProps.chain)
    //     // console.log('remove');
    //     // console.log(replace.chain);
    //     thisCard.classList.remove(replace.chain);
    //     // console.log('add');
    //     // console.log(add);
    //     thisCard.classList.add(add);
    // }
    // removeAllPrevClassesUtil(thisCard) {
    //     thisCard.classList.remove(prevProps.chain);

    //     this.chains.forEach((chain) => {
    //         // let i = index;
    //         // console.log(chain);
    //         // let thisChainData = chainsObj[chain];
    //         thisCard.classList.remove(chain);
    //     });
    // }

    updateChain(event) {

        this.setState({chain: event.target.value});
        this.props.updateChain(event.target.value);
        
    }

    // HACK FIX TO UPDATE CHILD STATE
    // doNothing() {
        
    // }

    //If u wants to change the data of child wrt parent, then use componentDidUpdate(), which will get called whenever data is updated. refer here
    componentDidUpdate(prevProps) {
        // console.log("componentDidUpdate - Chain Select Class");

        // this.doNothing(prevProps.chain); // HACK FIX TO UPDATE CHILD STATE

        if (this.props.chain !== prevProps.chain) {
            // console.log("UPDATE - componentDidUpdate - Chain Select Class");
            this.setState({chain: this.props.chain});
        }
    }


    render() {
        const iconStyle = {width:'24px',height:'24px',marginRight:"5px",verticalAlign:"bottom"};
        const customSelectStyle = `#chain-select-${this.props.location} {color:#fff;border-radius: 8px;} #chain-select-${this.props.location}-container fieldset{border: 0;} #chain-select-${this.props.location}-container .MuiSvgIcon-root {color: #fff;}`;
        return(
            <Box sx={{ minWidth: 120 }} id={`chain-select-${this.props.location}-container`}>
            <style>{customSelectStyle}</style>
            
                <Select
                labelId={`chain-select-${this.props.location}-label`}
                id={`chain-select-${this.props.location}`}
                value={this.state.chain}
                label={`Bridge ${this.props.location} Chain`}
                onChange={this.updateChain}
                // displayEmpty="true"
                // defaultValue="Select Network"
                >
                {/* <MenuItem value=''> Select Network</MenuItem> */}
                {this.chains.map((chain) => (
                    <MenuItem key={chain} value={chain}><img style={iconStyle} src={this.chainsObj[chain].icon} alt={`Bridge ${this.props.location} ${this.chainsObj[chain].label}`} /> {this.chainsObj[chain].label}</MenuItem>
                ))}
             
                </Select>
            </Box>
        )
    }
}
