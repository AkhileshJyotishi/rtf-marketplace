// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.20;

import "../../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NftMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds ;
    Counters.Counter private _tokenSold ;

    uint256 listingPrice = 1500000 wei;

    address payable owner ;
    mapping (uint256 => MarketItem) private idMarketItem;
    Auction[] allAuction;
    struct MarketItem {
        uint256 tokenId;
        string tokenURI;
        address payable owner;
        address payable seller;
        uint256 price;
        bool sold;
        bool inAuction;
    }

    struct Auction {
        uint256 auctionIndex;
        uint256 tokenId;
        string tokenURI;
        address creator;
        uint256 endAuction;
        address payable highestBidder;
        uint256 highestBidPrice;
        uint256 bidCount;
        bool priceClaimed;
        bool nftClaimed;
    }

    modifier onlyOwner {
        require ( msg.sender == owner , " only owner of the marketplace can perform this operation");
        _;
    }

    event idMarketItemCreated (
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 price,
        bool sold
    );
    event NewAuction (uint256 auctionIndex , uint256 tokenId , address creator , uint256 endAuction );
    event NewBidOnAuction (uint256 auctionIndex , uint256 newBid);
    event NFTClaimed (uint256 auctionIndex , uint256 tokenId , address claimedBy);
    event TokensClaimed (uint256 auctionIndex , uint256 tokenId , address claimedBy);
    event NFTRefunded(uint256 auctionIndex, uint256 nftId, address claimedBy);
    
    constructor () ERC721("NFT MARKETPLACE", "NFTMY") {
        owner = payable(msg.sender);
    } 

    function createAuction (uint256 tokenId ) public {
        require(idMarketItem[tokenId].seller == msg.sender ," only the owner of nft can initiate the function");
        require(idMarketItem[tokenId].sold == false , "it is already sold ");
        require(idMarketItem[tokenId].inAuction == false ," already in auction");
        Auction memory auction = Auction(allAuction.length , tokenId,idMarketItem[tokenId].tokenURI , msg.sender , block.timestamp +50 , payable(msg.sender) , uint256(listingPrice) , 0, false , false);
        allAuction.push(auction);
        idMarketItem[tokenId].inAuction =true ;
        emit NewAuction(allAuction.length -1 , tokenId , msg.sender , block.timestamp+1000 );
    }   


    function isOpen(uint256 _auctionIndex) public view returns (bool) {
        Auction storage auction = allAuction[_auctionIndex];
        if (block.timestamp >= auction.endAuction) return false;
        return true;
    }

    function getBlocktimestamp ( ) public view returns ( uint256){
        return block.timestamp;
    }

    function getHighestBidder(
        uint256 _auctionIndex
    ) public view returns (address) {
        require(_auctionIndex < allAuction.length, "Invalid auction index");
        return allAuction[_auctionIndex].highestBidder;
    }
    
    function refund (
        uint256 _auctionIndex
    ) external returns ( bool){
        require(_auctionIndex < allAuction.length, "Invalid auction index");
        require(!isOpen(_auctionIndex), "Auction is still open");
        Auction storage auction = allAuction[_auctionIndex];
        require(
            auction.creator == msg.sender,
            "Tokens can be claimed only by the creator of the auction"
        );
        require(
            auction.bidCount == 0,
            " only the highest bidder is liable to claim"
        );
        
        idMarketItem[auction.tokenId].inAuction = false ;
        emit NFTRefunded(_auctionIndex, auction.tokenId, msg.sender);
        return true;
    }

    function claimNFT (uint256 _auctionIndex)external returns (bool) {
        require(_auctionIndex < allAuction.length, "Invalid auction index");
        require(!isOpen(_auctionIndex), "Auction is still open");
        require(!allAuction[_auctionIndex].nftClaimed ," it is already been claimed");
        Auction storage auction = allAuction[_auctionIndex];
        require(
            auction.highestBidder == msg.sender,
            "NFT can be claimed only by the current bid owner"
        );
        _transfer(address(this), msg.sender, auction.tokenId);
        approve(address(this), auction.tokenId);

        allAuction[_auctionIndex].nftClaimed = true;
        idMarketItem[auction.tokenId].inAuction =false;
        idMarketItem[auction.tokenId].sold =true;
        idMarketItem[auction.tokenId].seller =payable(msg.sender);
        allAuction[_auctionIndex].priceClaimed = true;
        emit NFTClaimed(_auctionIndex, auction.tokenId, msg.sender);
        return true;
    } 

    function claimPrice(uint256 _auctionIndex) external {
        require(_auctionIndex < allAuction.length, "Invalid auction index");
        require(!isOpen(_auctionIndex), "Auction is still open");
        require(!allAuction[_auctionIndex].priceClaimed, " price has already been claimed");
        Auction storage auction = allAuction[_auctionIndex];
        
        require(
            auction.creator == msg.sender,
            "Tokens can be claimed only by the creator of the auction"
        );

        payable(msg.sender).transfer(auction.highestBidPrice);
        emit TokensClaimed(_auctionIndex, auction.tokenId, msg.sender);
    }


    function bid ( uint256 _auctionIndex , uint256 _newBid) external payable returns (bool){

        require(_auctionIndex < allAuction.length, "Invalid auction index");
        Auction storage auction = allAuction[_auctionIndex];

        require(isOpen(_auctionIndex), "Auction is not open");

        require(
            _newBid > auction.highestBidPrice,
            "New bid price must be higher than the current bid"
        );

        require ( msg.value == _newBid , "please send the value to be highest bidder");

        if(auction.bidCount > 0){
            auction.highestBidder.transfer(
                auction.highestBidPrice
            );
        }

        auction.highestBidder = payable ( msg.sender);
        auction.highestBidPrice = _newBid;
        auction.bidCount++;

        emit NewBidOnAuction(_auctionIndex, _newBid);

        return true;
    }



    function updateListingPrice (uint256 _listingPrice) 
    public
    onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice () view public returns ( uint256) {
        return listingPrice;
    }

    function creatingToken (string memory tokenURI , uint256 price) public payable returns (uint256) {
        require ( price >= listingPrice , " price should be equal to listing price");
        require (  msg.value == listingPrice , "please atleast send the listing price to support the platform");
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender , newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem( newTokenId , price , tokenURI);

        return newTokenId;
    }

    //fucntion for creating market item
    function createMarketItem ( uint256 tokenId , uint256 price , string memory tokenURI) private {
        
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            tokenURI,
            payable(address(this)),
            payable(msg.sender),
            price,
            false,
            false
        );
        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId , msg.sender ,address(this) , price , false);
    }

    function getCurrent() public view returns (uint256){
        return _tokenIds.current();
    }

    function getAllNFTs () public view returns (MarketItem[] memory ){
        uint256 nftCount = _tokenIds.current();
        MarketItem[] memory allNft = new MarketItem[](nftCount);
        for(uint i=1 ; i<= nftCount ;i++){
            MarketItem memory item = idMarketItem[i];
            allNft[i-1] = item ;
        }
        return allNft ;
    }

    function getMyNFTs(address _creator) public view returns (MarketItem[] memory) {
        uint256 totalNFTs = _tokenIds.current();
        uint256 userNFTCount = 0;

        // Count NFTs where msg.sender is the seller and not sold
        for (uint256 i = 1; i <= totalNFTs; i++) {
            if (idMarketItem[i].seller ==payable( _creator) ) {
            userNFTCount++;
            }
        }

        // Create an array to store only the relevant NFTs
        MarketItem[] memory userNfts = new MarketItem[](userNFTCount);
        uint256 index = 0;
        // Directly access data from idMarketItem mapping
        for (uint256 i = 1; i <= totalNFTs; i++) {
            if (idMarketItem[i].seller == payable( _creator)) {
            userNfts[index] = idMarketItem[i];
            index++;
            }
        }
        return userNfts;
    }

    function executeSale ( uint256 tokenId ) public payable {
        uint256 price = idMarketItem[tokenId].price ;
        address seller = idMarketItem[tokenId].seller ;
        require(!idMarketItem[tokenId].inAuction , " you cannot buy it as it is in auction");
        require(!idMarketItem[tokenId].sold , " it is sold");
        require ( price == msg.value ," please submit the asking price for the purchase");

        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].seller = payable(msg.sender);

        _transfer(address(this), msg.sender, tokenId);
        approve(address(this), tokenId);

        _tokenSold.increment();

        payable(seller).transfer(msg.value) ;

    }

    function updatePrice ( uint256 tokenId , uint256 price) public {
        require( price >= listingPrice , " price should be at least equal to listingPrice");
        require( msg.sender == idMarketItem[tokenId].seller , " only the owner of this can access this nft");
        require( !idMarketItem[tokenId].sold && !idMarketItem[tokenId].inAuction ," already sold or in auction");
        idMarketItem[tokenId].price = price ;
    }

    function getAllAuction () public view returns(Auction[] memory ) {
        return allAuction;
    }

    function getMyAuctions( address _creator) public view returns (Auction[] memory) {
    uint256 totalAuctions = allAuction.length;
    uint256 myAuctionCount = 0;

    // Count the number of auctions where msg.sender is the creator
    for (uint256 i = 0; i < totalAuctions; i++) {
        if (allAuction[i].creator == _creator) {
        myAuctionCount++;
        }
    }

    // Create an array to store only the relevant auctions
    Auction[] memory myAuctions = new Auction[](myAuctionCount);
    uint256 index = 0;

    // Populate the array with matching auctions
    for (uint256 i = 0; i < totalAuctions; i++) {
        if (allAuction[i].creator == _creator) {
        myAuctions[index] = allAuction[i];
        index++;
        }
    }

    return myAuctions;
    }
}