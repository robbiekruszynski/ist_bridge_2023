// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@scroll-tech/contracts@0.1.0/libraries/IScrollMessenger.sol";

contract BridgeDiverge {
    // Variable to store the encoded data for disbursal
    bytes public encodedData;

    event FundsDisbursed(address user, uint256 amount);

    function disburseFunds(bytes calldata data) public {
        uint256 offset = 0;
        address user;
        uint256 amount;
        bytes memory _data = data;

        while (offset < data.length) {
            (_data, user, amount) = abi.decode(_data, (bytes, address, uint256));
            payable(user).transfer(amount);
            emit FundsDisbursed(user, amount);
            offset += 128;
        }
    }

    // Fallback function to accept incoming Ether
    receive() external payable {}
}
