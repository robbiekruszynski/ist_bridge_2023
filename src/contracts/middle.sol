// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@scroll-tech/contracts@0.1.0/libraries/IScrollMessenger.sol";

contract BridgeTroll {	
    address public owner;
    uint256 public initialDeposit;
    address internal constant MESSENGER_ACCOUNT = address(0x50c7d3e7f7c656493D1D76aaa1a836CedfCBB16A);

    address public bridgeDiverger;
    bytes public encodedData;

    constructor() payable {
        owner = msg.sender;
        initialDeposit = msg.value;
    }

    function executeCrosschain() public payable {
        IScrollMessenger scrollMessenger = IScrollMessenger(MESSENGER_ACCOUNT);
        uint256 contractBalance = address(this).balance - 1000000000000000000;

        scrollMessenger.sendMessage{ value: msg.value }(
            bridgeDiverger,
            contractBalance,
            abi.encodeWithSignature("disburseFunds(bytes)", encodedData),
            300000,
            msg.sender
        );
    }

    function trollToll(bytes calldata data) public {
        encodedData = data;
    }

    function setDiverger(address _diverger) public {
        bridgeDiverger = _diverger;
    }

    function setData(bytes calldata _data) public {
        encodedData = _data;
    }

    // Fallback function to accept incoming Ether
    receive() external payable {}
}