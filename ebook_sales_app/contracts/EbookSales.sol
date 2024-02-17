// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EbookSales {
    struct Ebook {
        string title;
        string author;
        uint price;
    }

    mapping(uint => Ebook) public ebooks;
    mapping(uint => address) public ebookOwners;

    function listEbook(uint _id, string memory _title, string memory _author, uint _price) public {
        ebooks[_id] = Ebook(_title, _author, _price);
    }

    function purchaseEbook(uint _id) public payable {
        require(msg.value == ebooks[_id].price, "Incorrect value");
        ebookOwners[_id] = msg.sender;
        // Transfer funds to the seller here
    }
}
