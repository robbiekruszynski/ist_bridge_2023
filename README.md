<!-- <img width="25%"  src="src/assets/images/logo.png">
<img width="25%"  src="src/assets/images/duck.gif"> -->

<img class="image-align-left" img width="25%"  src="src/assets/images/logo.png"/><img class="image-align-left"  img width="25%"  src="src/assets/images/duck.gif"/>

### Notes on the project + How to run locally 

.github Added Remix (#65) commit is due to using a common template for MUI (Berry). This project outside of utalizing a free and open dashboard framework was built in house during the 2023 EthGlobal Istanbul Hackathon.

```
git clone https://github.com/Robbiekruszynski/ist_bridge_2023.git
cd ist_bridge_2023
yarn
yarn start
```

# SaferBridge - Trust Minimized L2 Bridge
<!-- # Via <img width=24 height=24 style="margin-left:-20px" src="src/assets/images/logo-via.png"> - Trust Minimized L2 Bridge
# ViaDuck <img width=24 height=24 style="margin-left:-20px" src="src/assets/images/logo-duck-bg.png"> - Trust Minimized L2 Bridge -->
Unlike all other L2 to L2 cross-chain bridges, SaferBridge transfers funds directly via L1 using the L2s native message passing, and doesn't rely on any relayers or LPs. Additionally, because of it's design, you can always force your transaction, and don't have to trust any 3rd party.

We did not build L2 ecosystems to use 3rd party cross-chain bridges, the whole point was to maintain trust assumptions.

## What's Wrong With Current 3rd Party L2 Bridges?

If your bridge don't use the native bridges to go from L2 to L2, most 3rd party bridges have the same security assumptions as cross-chain bridges. Simply put, they are all more or less trusted shit. Please see <a href="https://www.youtube.com/watch?v=EAkOHyWPI4o" target="_blank">Daniel Lumi's speech from ETH CC for more information</a>.

## 2 Transfer Modes

In <b>Normal Speed</b> mode your transaction will be batched with 10 users. The bridging transaction will initiate automatically without a relayer when the batch fills up. This means you will only cost 1/10 of all of the normal gas fees of bridging safely from L2 -&gt; L1 -&gt; L2!

In <b>Fast Speed</b> mode your transaction will submitted to the L2 bridge as soon as you make it. Any outstanding transactions in a batch will be submitted with yours. This means it will only cost you the remainder of the batch. Right now there are {Math.round( props.batchProgress / 10 )}/10 spots filled up in the batch, meaning you only have to pay {10 - Math.round( props.batchProgress / 10 )}/10 of all of the normal gas fees of bridging safely from L2 -&gt; L1 -&gt; L2!

## No Relayers & Minimal Trust Assumptions

Safer Bridge does not require any relayers. Unlike other cross-chain bridges, which rely on trusted actors, every single part of the bridging process is trustless outside of the existing trust assumptions of using a native L2 bridge (...or if we fuckup in the smart contract programming ;). 

1. <b>Batch origin L2 -> L1</b> - Each person joining the batch pays an estimated gas fee + a surcharge incase gas price changes (+xx%). The last person joining the batch only pays estimated gas fee (no surcharge), and pushes the whole batch to the native L2 to L1 bridge. Effectively other users pre-pay for the extra cost incurred by the last person to join.
2. <b>Claim on L1 -> Send to destination L2</b> - Any person in the batch can trigger the claim & move from the first L2 bridge contract to the next one. This step can be incentivized, or simply rely on socio-economic factors of who needs the funds first.
3. Distribute assets on destination L2 - This is automatic & no manual interaction is needed. The L1 claim sends assets to destination L2 & triggers contract on said L2 to distribute bridged assets to batch members.
<!-- The first person to claim the funds on the final location disburses all of the assets in the batch to all of the respective parties who were part of the batch. This step can be incentivized, or simply rely on socio-economic factors of who needs the funds first. -->

While we could employ relayers (which would still be trustless, but need external actors), each of these steps were delibirately designed in SaferBridge to be user triggered and not rely on any external actors. The whole point of L2s was not to rely on cross-chain bridges or have additional trust assumptions. 'This is the way'.

<img width="33%"  src="src/assets/images/readme/way-this-is-the-way.gif">

## No Transaction Fees!

SaferBridge is not a business, it is a public good. Outside of incentivizing the 2 steps above (which we hope L2s will subsidize in the future - see "The Future" section below), we designed SaferBridge to be completely 'free' for users outside of ammortized gas cost. The protocol itself will not charge any fee, there will not be any ponzi pretend governance token, and the contracts will be completely immutable without contract owners that can claim any excess surcharges.

## Ammortized Cost Per User

While calldata goes up linearly with the size of the batch, the savings per user for bridging is <u>atleast</u> 38% cheaper for each of 2 participants, 70% cheaper for each of 4 participants, and 80% cheaper for each of 10 participants (based on our extremely non scientific 5min test while running, admittedly rushed, through this hackathon). As the batch size increases, the fee for each user drops. 

At the very least, this is still better UX than each user needing to sign many messages and enter many URLs, to bridge by themselves.

<img width="33%"  src="src/assets/images/readme/shitty-graph.jpg">

## The future

We want L2s to fork this & build it into their native canonical bridges. While it is possible this bridge will need to remain external, this is not the future we hope for.

Any of the above 3 steps that currently rely on incentivization or socio-economic considerations can be handled by the native L2 actors. It is in their benefit to vampire attack other protocols liquidity by subsidizing users to move liquidity to their L2 from another one, and it may also be in their benefit to provide users good user experience for moving funds away. Even if the former is only true, each protocol could subsidize users to move liquidity to their L2 from another one, and if every L2 adopts this method, moving in each direction would be 'free' outside of ammortized gas cost to users.

<img width="33%"  src="src/assets/images/readme/vitalik-clapping.gif">

## Note On Centralized Asset Types

For USDC, instead of using the batching mechanism outline above, we would use Circles native <a href="https://www.circle.com/en/cross-chain-transfer-protocol" target="_blank">Cross-Chain Transfer Protocol (CCTP)</a>. Any centralized asset already entirely relies on the centralized party to mint & burn assets. Because of this, it makes more sense to use their canonical bridge.

For all other assets (including USDT which doesn't have a native bridge), we use the batching mechanism outlined above.

## Current State Of Project

<img width="33%"  src="src/assets/images/readme/current-state.png">

Currently we have demonstrated the ability to trigger all steps of the program, including ->

1. Users looking to bridge from L2-a to L2-b can add their transactions to a batch on the origin L2 contract. A mapping of addresses to funds ensures that funds will be given back to their original senders. As this mapping needs to be read on the destination L2 contract, we encode addresses with respective deposits iteratively for each depositor and pass it through the nether.
2. When the batch reaches significant mass, the BridgeConverge contract can be triggered to send funds from L2 -> L1 using the native bridge, including bridged funds, and an address mapping in calldata, from which the destination state can be rebuilt 
3. When the L2 bridge withdrawal is finalized with the use of a proof, the funds are pooled in the BridgeTroll contract on L1. Any user can trigger the move from L1 to the destination L2 via its native bridge. Both of these steps are triggered in one transaction, including claim of origin L2 funds from bridge, bridge to destination L2, and the function call to distribute funds back to all users on the destination L2 when the deposit is finalized.
4. With funds now successfully deposited in user accounts on the destination chain, the original mapping is cleared and the SaferBridge reopens for business. To save on complexity while on L1, the contract is fully depleted with every pass, meaning that only one batch of transfers can be active at a time.

Notes: Due to the lack of time, for the demo, we currently withdraw from Sepolia Scroll L2 -> Sepolia L1 and then back from Sepolia L1 -> Sepolia Scroll L2 rather than demonstrating this with two seperate L2s.

## Tech Used
React, Redux, Routes, Ethers 5.7, MUI, Solidity, Wagmi / Viem

## Closing Thoughts

Please for the love of Vitalik, do not use this code in live production. We were extremely sleep deprived and loopy while coding this project. It is not clean code, and fairly likely may contain exploits.

That being said, please fork our project & make this work! We only programmed this after Daniel Lumi spent years trying to get teams to build this. We want this fucker to exist!

<img width="33%"  src="src/assets/images/readme/thats-all.jpg">

<b>Created by</b> - <a href="https://github.com/caronsch" target="_blank">CarOnFire</a>, <a href="https://github.com/Robbiekruszynski" target="_blank">Robbie Kruszynski</a>, <a href="https://twitter.com/zkLumi" target="_blank">Daniel Lumi (@zkLumi)</a>


