export const erc1155=`# EIP-1155: Multi Token Standard
A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).

 Each 1155 allows for each token ID to represent a new configurable token type
 - which may have its own metadata, supply and other attributes.


##  Why having ERC1155
 ERC-20 and ERC-721 require separatea contract for each token type or collection. 
- Generates redundant bytecode on the Ethereum blockchain 
- limits certain functionality by the nature of separating each token contract into its own permissioned address. 
- With the rise gameFi,  and blockchain games,  game developers need thousands of token types, and a new type of token standard is needed to support them. 
- However, ERC-1155 is not specific to games and many other applications can benefit from this flexibility.

## New functionality :
- transferring multiple token types at once
- saving on transaction costs. 
- Trading (escrow / atomic swaps) of multiple tokens can be built on top of this standard 
- removes the need to “approve” individual token contracts separately. 
- It is also easy to describe and mix multiple fungible or non-fungible token types in a single contract.


## Specification

**Smart contracts implementing the ERC-1155 standard MUST implement all of the functions in the ERC1155 interface.**

**Smart contracts implementing the ERC-1155 standard MUST implement the ERC-165 supportsInterface function and MUST return the constant value true if 0xd9b67a26 is passed through the interfaceID argument.**



reference:https://eips.ethereum.org/EIPS/eip-1155 `