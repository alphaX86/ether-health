pragma solidity ^0.5.16;

contract Content {

    // Private state variable
    struct Person {
        string private dbHash;
        string name;
        string email;
        string phoneno;
        string details;
        string addressX;
    }

    Person []entry;
    
    function sendDetails(string memory dbHash, string memory name, string memory email, string memory phoneno, string memory details, string memory addressX) public {
        if (dbHash != "") {
            Person memory p = Person(dbHash, name, email, phoneno, details, addressX);
            entry.push(p);
        }
    }
    
    function getHash(string ID) public view returns (string memory name, string memory email, string memory phoneno, string memory details, string memory addressX) {
        uint32 i;
        for (i = 0; i < entry.length; i++) {
            Persons memory p = entry[i];
            if (entry[i].dbHash == ID) {
                return(p.name, p.email, p.phoneno, p.details, p.addressX);
            }
        return("NIL", "NIL", "NIL", "NIL", "NIL");
    }
}
