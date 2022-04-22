// SPDX-License-Identifier: Apache-2.0

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title Data
 * @dev Implements Patient data along with verification
 */
contract Data {
   
    struct Patient {
        uint ID; // ID allocated to patient
        uint healthy;  // Int code to denote if patient is healthy or not
        string name; // Name of the patient
        string disease; // Disease if any
        string medicines; // List of medicines, if any
        bool reg; // To check if patient is registered
        uint key;   // index of data
        address payable client;
        address payable dest;
    }

    struct Card {
        bytes32 name;   // short name (up to 32 bytes)
        uint ID; // ID
    }

    uint counter;
    address public author;

    mapping(address => Patient) public patients;

    Card[] public cards;

    constructor() {
        author = msg.sender;
    }

    event Auth(address from, address to);

    // Function to fetch data
    function fetchData (address test) public returns(bool) {
        if(patients[author].client == test)
        {
            return true;
        }
        return false;
    }
    // Function to register patient
    function registerPatient(uint _healthy, string memory _name, string memory _disease, string memory _medicine) external {
        require(
            !patients[author].reg,
            "Patient is already registered"
        );
        patients[author].healthy = _healthy;
        patients[author].name = _name;
        patients[author].disease = _disease;
        patients[author].medicines = _medicine;
        patients[author].reg = true;
    }

    // Function to authenticate
    function authCheck(address to) external returns (bool success) {
        //patients.move(msg.sender, to, ID);
        emit Auth(msg.sender, to);
        return true;
    }
}