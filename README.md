<img width="25%"  src="src/assets/images/logo.png">

# SaferBridge - Trust Minimized L2 Bridge
<!-- # Via <img width=24 height=24 style="margin-left:-20px" src="src/assets/images/logo-via.png"> - Trust Minimized L2 Bridge
# ViaDuck <img width=24 height=24 style="margin-left:-20px" src="src/assets/images/logo-duck-bg.png"> - Trust Minimized L2 Bridge -->
Unlike all other L2 to L2 cross chain bridges, SaferBridge transfers funds directly via L1 using the L2s native message passing, and doesn't rely on any relayers or LPs. Additionally, because of it's design, you can always force your transaction, and don't have to trust any 3rd party.

<img width="25%"  src="src/assets/images/readme/vitalik-clapping.gif">

## What's Wrong With Current 3rd Party L2 Bridges?

If your bridge don't use the native bridges to go from L2 to L2, most 3rd party bridges have the same security assumptions as cross-chain bridges. Simply put, they are all more or less trusted shit. Please see <a href="https://www.youtube.com/watch?v=EAkOHyWPI4o" target="_blank">Daniel Lumi's speech from ETH CC for more information</a>.

## 2 Transfer Modes

In <b>Normal Speed</b> mode your transaction will be batched with 10 users. The bridging transaction will initiate automatically without a relayer when the batch fills up. This means you will only cost 1/10 of all of the normal gas fees of bridging safely from L2 -&gt; L1 -&gt; L2!

In <b>Fast Speed</b> mode your transaction will submitted to the L2 bridge as soon as you make it. Any outstanding transactions in a batch will be submitted with yours. This means it will only cost you the remainder of the batch. Right now there are {Math.round( props.batchProgress / 10 )}/10 spots filled up in the batch, meaning you only have to pay {10 - Math.round( props.batchProgress / 10 )}/10 of all of the normal gas fees of bridging safely from L2 -&gt; L1 -&gt; L2!

## No Relayers & Minimal Trust Assumptions

Safer Bridge does not require any relayers. Unlike other cross chain bridges, which rely on trusted actors, every single part of the bridging process is trustless outside of the existing trust assumptions of using a native L2 bridge (...or if we fuckup in the smart contract programming ;). 

1. Batch L2 -> L1 - Each person joining the batch pays an estimated gas fee + a surcharge incase gas price changes (+xx%). The last person joining the batch only pays estimated gas fee (no surcharge), and pushes the whole batch to the native L2 to L1 bridge. Effectively other users pre-pay for the extra cost incurred by the last person to join.
2. Claim on L1 -> Send to L2 - 
3. Distribute assets on L2 - The first person to claim the funds on the final location disburses all of the assets in the batch to all of the respective parties who were part of the batch. This can also be incentivized, or simply rely on socio-economic factors of who needs the funds first.

While we could employ relayers (which would still be trustless, but need external actors), each of these steps were delibirately designed in SaferBridge to be user triggered and not rely on any external actors. The whole point of L2s was not to rely on cross chain bridges or have additional trust assumptions. 'This is the way'.
<img width="25%"  src="src/assets/images/readme/way-this-is-the-way.gif">


## Centralized Asset Types

For USDC, instead of using the batching mechanism outline above, we would use Circles native <a href="https://www.circle.com/en/cross-chain-transfer-protocol" target="_blank">Cross-Chain Transfer Protocol (CCTP)</a>. Any centralized asset already entirely relies on the centralized party to mint & burn assets. Because of this, it makes more sense to use their canonical bridge.

For all other assets (including USDT which doesn't have a native bridge), we use the batching mechanism outlined above.

