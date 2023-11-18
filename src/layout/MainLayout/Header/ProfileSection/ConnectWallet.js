

import { useWeb3Modal } from '@web3modal/ethers5/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button onClick={() => open()}>Connect Wallet</button>
    </>
  )
}