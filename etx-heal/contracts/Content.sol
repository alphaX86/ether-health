pragma solidity ^0.5.16;

contract Content {

    // Private state variable
    address private owner;
    string private dbHash;
     // Defining a constructor   
     constructor() public{   
        owner=msg.sender;
    }
  
    // Function to get 
    // address of owner
    function getOwner(
    ) public view returns (address) {    
        return owner;
    }
    
    function sendHash(string memory x) public {
        if(owner != address(0))
        {
            dbHash = x;
        }
        dbHash = "nil";
    }
    
    function getHash() public view returns (string memory) {
        return dbHash;
    }
}
