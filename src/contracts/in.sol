// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@scroll-tech/contracts@0.1.0/libraries/IScrollMessenger.sol";

contract BridgeConverge {
    address internal constant MESSENGER_ACCOUNT_L1 = address(0xBa50f5340FB9F3Bd074bD638c9BE13eCB36E603d);

    address public troll;

    // Variable to store the encoded data for disbursal
    bytes public encodedData;

    mapping(address => uint256) public balances;
    address[] private users; // Array to keep track of all users who have added funds
    uint256 public totalPoolValue = 0;
    uint256 public poolFee = 10000000000;

    event FundsAdded(address indexed user, uint256 amount, uint256 totalPoolAmount);
    event FundsDisbursed(address user, uint256 amount);
    event FundsPacked(address user, address to, uint256 amount, uint256 fee, uint256 gasLimit, bytes data);

    function addFunds() external payable {
        require(msg.value >= 0, "Must send at least 0.001 ETH"); 
        if (balances[msg.sender] == 0) {
            users.push(msg.sender); // Add new user to the array
        }
        balances[msg.sender] += msg.value;
        totalPoolValue += msg.value;
        emit FundsAdded(msg.sender, msg.value, address(this).balance);
    }

    function packAndSendData() public payable {
        address _to = address(this);
        uint256 _fee = 10000000000000;
        uint32 gasLimit = 300000; // set to 0 if L2 -> L1
        uint256 amount = 0;
        bytes memory data = "";

        for (uint i = 0; i < users.length; i++) {
            amount += balances[users[i]] - poolFee;
            data = abi.encode(data, users[i], balances[users[i]]);
        }

        require(address(this).balance >= amount, "Insufficient contract balance");
        encodedData = data;

        emit FundsPacked(msg.sender, _to, amount, _fee, gasLimit, encodedData);
        
        executeTxOnL1(MESSENGER_ACCOUNT_L1, troll, amount, encodedData, gasLimit);
        resetMappings();
    }

    function getDataData(bytes calldata data) public pure returns (bytes memory, address, uint256) {
        return abi.decode(data, (bytes, address, uint256));
    }

    function resetMappings() public {
        for (uint i = 0; i < users.length; i++) {
            balances[users[i]] = 0;
        }
        delete users;
        totalPoolValue = 0;
    }

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

    function setTroll(address _troll) public {
        troll = _troll;
    } 

    function executeTxOnL1(
        address scrollMessengerAddress,
        address targetAddress,
        uint256 _value,
        bytes memory payload,
        uint32 gasLimit
    ) public payable {
        IScrollMessenger scrollMessenger = IScrollMessenger(scrollMessengerAddress);
        scrollMessenger.sendMessage{ value: msg.value }(
            targetAddress,
            _value,
            abi.encodeWithSignature("trollToll(bytes)", payload),
            gasLimit,
            msg.sender
        );
    }

    // Fallback function to accept incoming Ether
    receive() external payable {}
}
