// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.3;

contract Heloowworld {
    event UpdateMessages(string oldStr, string newStr);

    string public message;

    constructor (string memory initMessage){
        message = initMessage;
    }

    function update(string memory newMessage)public{
        string memory oldmsg = message;
        message = newMessage;
        emit UpdateMessages(oldmsg, newMessage);
    }
}
