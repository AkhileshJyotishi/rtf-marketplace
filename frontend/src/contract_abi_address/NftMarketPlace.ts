export const address = "0x14547c46867b8d885e0a57c16565b602c8e15af8"
export const abi = [
    
        {inputs: [],stateMutability: "nonpayable",type: "constructor"
        },
        {inputs: [
                {internalType: "address",name: "sender",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {internalType: "address",name: "owner",type: "address"
                }
            ],name: "ERC721IncorrectOwner",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "operator",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "ERC721InsufficientApproval",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "approver",type: "address"
                }
            ],name: "ERC721InvalidApprover",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "operator",type: "address"
                }
            ],name: "ERC721InvalidOperator",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "owner",type: "address"
                }
            ],name: "ERC721InvalidOwner",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "receiver",type: "address"
                }
            ],name: "ERC721InvalidReceiver",type: "error"
        },
        {inputs: [
                {internalType: "address",name: "sender",type: "address"
                }
            ],name: "ERC721InvalidSender",type: "error"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "ERC721NonexistentToken",type: "error"
        },
        {anonymous: false,inputs: [
                {indexed: true,internalType: "address",name: "owner",type: "address"
                },
                {indexed: true,internalType: "address",name: "approved",type: "address"
                },
                {indexed: true,internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "Approval",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: true,internalType: "address",name: "owner",type: "address"
                },
                {indexed: true,internalType: "address",name: "operator",type: "address"
                },
                {indexed: false,internalType: "bool",name: "approved",type: "bool"
                }
            ],name: "ApprovalForAll",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "_fromTokenId",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "_toTokenId",type: "uint256"
                }
            ],name: "BatchMetadataUpdate",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "_tokenId",type: "uint256"
                }
            ],name: "MetadataUpdate",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "auctionIndex",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {indexed: false,internalType: "address",name: "claimedBy",type: "address"
                }
            ],name: "NFTClaimed",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "auctionIndex",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "nftId",type: "uint256"
                },
                {indexed: false,internalType: "address",name: "claimedBy",type: "address"
                }
            ],name: "NFTRefunded",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "auctionIndex",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {indexed: false,internalType: "address",name: "creator",type: "address"
                },
                {indexed: false,internalType: "uint256",name: "endAuction",type: "uint256"
                }
            ],name: "NewAuction",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "auctionIndex",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "newBid",type: "uint256"
                }
            ],name: "NewBidOnAuction",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: false,internalType: "uint256",name: "auctionIndex",type: "uint256"
                },
                {indexed: false,internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {indexed: false,internalType: "address",name: "claimedBy",type: "address"
                }
            ],name: "TokensClaimed",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: true,internalType: "address",name: "from",type: "address"
                },
                {indexed: true,internalType: "address",name: "to",type: "address"
                },
                {indexed: true,internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "Transfer",type: "event"
        },
        {anonymous: false,inputs: [
                {indexed: true,internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {indexed: false,internalType: "address",name: "owner",type: "address"
                },
                {indexed: false,internalType: "address",name: "seller",type: "address"
                },
                {indexed: false,internalType: "uint256",name: "price",type: "uint256"
                },
                {indexed: false,internalType: "bool",name: "sold",type: "bool"
                }
            ],name: "idMarketItemCreated",type: "event"
        },
        {inputs: [
                {internalType: "address",name: "to",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "approve",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "owner",type: "address"
                }
            ],name: "balanceOf",outputs: [
                {internalType: "uint256",name: "",type: "uint256"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                },
                {internalType: "uint256",name: "_newBid",type: "uint256"
                }
            ],name: "bid",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "payable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                }
            ],name: "claimNFT",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                }
            ],name: "claimPrice",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "createAuction",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "string",name: "tokenURI",type: "string"
                },
                {internalType: "uint256",name: "price",type: "uint256"
                }
            ],name: "creatingToken",outputs: [
                {internalType: "uint256",name: "",type: "uint256"
                }
            ],stateMutability: "payable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "executeSale",outputs: [],stateMutability: "payable",type: "function"
        },
        {inputs: [],name: "getAllAuction",outputs: [
                {components: [
                        {internalType: "uint256",name: "auctionIndex",type: "uint256"
                        },
                        {internalType: "uint256",name: "tokenId",type: "uint256"
                        },
                        {internalType: "string",name: "tokenURI",type: "string"
                        },
                        {internalType: "address",name: "creator",type: "address"
                        },
                        {internalType: "uint256",name: "endAuction",type: "uint256"
                        },
                        {internalType: "address payable",name: "highestBidder",type: "address"
                        },
                        {internalType: "uint256",name: "highestBidPrice",type: "uint256"
                        },
                        {internalType: "uint256",name: "bidCount",type: "uint256"
                        },
                        {internalType: "bool",name: "priceClaimed",type: "bool"
                        },
                        {internalType: "bool",name: "nftClaimed",type: "bool"
                        }
                    ],internalType: "struct NftMarketPlace.Auction[]",name: "",type: "tuple[]"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "getAllNFTs",outputs: [
                {components: [
                        {internalType: "uint256",name: "tokenId",type: "uint256"
                        },
                        {internalType: "string",name: "tokenURI",type: "string"
                        },
                        {internalType: "address payable",name: "owner",type: "address"
                        },
                        {internalType: "address payable",name: "seller",type: "address"
                        },
                        {internalType: "uint256",name: "price",type: "uint256"
                        },
                        {internalType: "bool",name: "sold",type: "bool"
                        },
                        {internalType: "bool",name: "inAuction",type: "bool"
                        }
                    ],internalType: "struct NftMarketPlace.MarketItem[]",name: "",type: "tuple[]"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "getApproved",outputs: [
                {internalType: "address",name: "",type: "address"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "getBlocktimestamp",outputs: [
                {internalType: "uint256",name: "",type: "uint256"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "getCurrent",outputs: [
                {internalType: "uint256",name: "",type: "uint256"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                }
            ],name: "getHighestBidder",outputs: [
                {internalType: "address",name: "",type: "address"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "getListingPrice",outputs: [
                {internalType: "uint256",name: "",type: "uint256"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "_creator",type: "address"
                }
            ],name: "getMyAuctions",outputs: [
                {components: [
                        {internalType: "uint256",name: "auctionIndex",type: "uint256"
                        },
                        {internalType: "uint256",name: "tokenId",type: "uint256"
                        },
                        {internalType: "string",name: "tokenURI",type: "string"
                        },
                        {internalType: "address",name: "creator",type: "address"
                        },
                        {internalType: "uint256",name: "endAuction",type: "uint256"
                        },
                        {internalType: "address payable",name: "highestBidder",type: "address"
                        },
                        {internalType: "uint256",name: "highestBidPrice",type: "uint256"
                        },
                        {internalType: "uint256",name: "bidCount",type: "uint256"
                        },
                        {internalType: "bool",name: "priceClaimed",type: "bool"
                        },
                        {internalType: "bool",name: "nftClaimed",type: "bool"
                        }
                    ],internalType: "struct NftMarketPlace.Auction[]",name: "",type: "tuple[]"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "_creator",type: "address"
                }
            ],name: "getMyNFTs",outputs: [
                {components: [
                        {internalType: "uint256",name: "tokenId",type: "uint256"
                        },
                        {internalType: "string",name: "tokenURI",type: "string"
                        },
                        {internalType: "address payable",name: "owner",type: "address"
                        },
                        {internalType: "address payable",name: "seller",type: "address"
                        },
                        {internalType: "uint256",name: "price",type: "uint256"
                        },
                        {internalType: "bool",name: "sold",type: "bool"
                        },
                        {internalType: "bool",name: "inAuction",type: "bool"
                        }
                    ],internalType: "struct NftMarketPlace.MarketItem[]",name: "",type: "tuple[]"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "owner",type: "address"
                },
                {internalType: "address",name: "operator",type: "address"
                }
            ],name: "isApprovedForAll",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                }
            ],name: "isOpen",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "name",outputs: [
                {internalType: "string",name: "",type: "string"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "ownerOf",outputs: [
                {internalType: "address",name: "",type: "address"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_auctionIndex",type: "uint256"
                }
            ],name: "refund",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "from",type: "address"
                },
                {internalType: "address",name: "to",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "safeTransferFrom",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "from",type: "address"
                },
                {internalType: "address",name: "to",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {internalType: "bytes",name: "data",type: "bytes"
                }
            ],name: "safeTransferFrom",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "operator",type: "address"
                },
                {internalType: "bool",name: "approved",type: "bool"
                }
            ],name: "setApprovalForAll",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "bytes4",name: "interfaceId",type: "bytes4"
                }
            ],name: "supportsInterface",outputs: [
                {internalType: "bool",name: "",type: "bool"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [],name: "symbol",outputs: [
                {internalType: "string",name: "",type: "string"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "tokenURI",outputs: [
                {internalType: "string",name: "",type: "string"
                }
            ],stateMutability: "view",type: "function"
        },
        {inputs: [
                {internalType: "address",name: "from",type: "address"
                },
                {internalType: "address",name: "to",type: "address"
                },
                {internalType: "uint256",name: "tokenId",type: "uint256"
                }
            ],name: "transferFrom",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "_listingPrice",type: "uint256"
                }
            ],name: "updateListingPrice",outputs: [],stateMutability: "nonpayable",type: "function"
        },
        {inputs: [
                {internalType: "uint256",name: "tokenId",type: "uint256"
                },
                {internalType: "uint256",name: "price",type: "uint256"
                }
            ],name: "updatePrice",outputs: [],stateMutability: "nonpayable",type: "function"
        }
    
]