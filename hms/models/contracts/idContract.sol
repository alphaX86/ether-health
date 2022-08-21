// SPDX-License-Identifier: MIT
pragma solidity >=0.6.1;
pragma experimental ABIEncoderV2;
contract idContract {
	bytes32 public _dataId;
	uint public _numberOfRecords = 0;
	bytes32[] public _recordsList;

	event dataAdded(string dat);

	struct ID_Contr {
		string _payload;
		uint _listPointer;
	}

	mapping(bytes32 => ID_Contr) public facts;

	function isRecord(bytes32 recordAddress) public view returns (bool isRec) {
		if(_recordsList.length == 0) return false;
		return (_recordsList[facts[recordAddress]._listPointer] == recordAddress);
	}

	function getRecordCount() public view returns (uint recCount){
		return _recordsList.length;
	}

	function addRecord(string memory _payload, bytes32 ID) public returns (bool success) {
	if(isRecord(ID)) revert('record with this id already exists');
		facts[ID]._payload = _payload;
		_recordsList.push(ID);
		facts[ID]._listPointer = _recordsList.length - 1;
		_numberOfRecords++;
		return (true);
	}

	function getRecord(bytes32 id) public view returns (string memory _payload){
	if(!isRecord(id)) revert('record with this id does not exist');
		return (facts[id]._payload);
	}

	function updateRecord(bytes32 id, string memory _payload) public returns (bool success){
		if(!isRecord(id)) revert('record with this id does not exist');
		facts[id]._payload = _payload;
		return (true);
	}

	function getAllRecords() public view returns (string[] memory _payloads) {
		string[] memory __payloadss = new string[](_numberOfRecords);
		for (uint i = 0; i < _numberOfRecords; i++) {
			ID_Contr storage _fact = facts[_recordsList[i]];
			__payloadss[i] = _fact._payload;
		}
		return (__payloadss);
	}

function deleteRecord(bytes32 id) public returns (bool success) {
    if(!isRecord(id)) revert('record with this id does not exist');
    uint _rowToDelete = facts[id]._listPointer;
    bytes32 _keyToMove = _recordsList[_recordsList.length-1];
    _recordsList[_rowToDelete] = _keyToMove;
    facts[_keyToMove]._listPointer = _rowToDelete;
    _recordsList.pop();
    _numberOfRecords--;
    return (true);
  }

}