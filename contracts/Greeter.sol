//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    enum ShirtSize {
        SMALL,
        MEDIUM,
        LARGE
    }

    ShirtSize public defaultShirtSize = ShirtSize.MEDIUM;

    string public greeting;

    uint256 public someInt = 42;

    address public someAddress = address(0);

    struct Book {
        string name;
        string author;
        uint256 id;
        bool available;
    }

    // Declaring a structure object
    Book public book1;

    // Assigning values to the fields
    // for the structure object book2
    Book public book2 = Book("Building Ethereum DApps", "Roberto Infante", 2, true);

    uint[] public oneTwoThree = [1, 2, 3];
    
    string[] public abc = ["a", "b", "c"];

    mapping(uint => string) public numberToString;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function addStuffToMapping() external {

        for( uint i; i < 3; i++) {
            numberToString[oneTwoThree[i]] = abc[i];
        }

    }

}
