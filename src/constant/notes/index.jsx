import { SBT } from './SBT'
import { Bridge } from './bridge'
import { dao } from './dao'
import { cleanUpTitle } from 'utils/replaceAll'
import { erc1155 } from './erc1155'
import { gameFi } from './gameFi'
import { web3 } from './web3'
import { airdrop } from './airdrop'

export const NOTES = [
  {
    date: '12/09/2022',
    title: 'Soulbound Tokens (SBT)',
    id: cleanUpTitle('Soulbound Tokens (SBT)'),
    content: SBT,
    description: `Soulbound Tokens (SBT) is a concept proposed in May 2022 by Vitalikt.SBTs are digital identity tokens that can function as the credentials`
  },
  {
    date: '12/03/2021',
    title: "What's a Blockchain Bridge?",
    id: cleanUpTitle("What's a Blockchain Bridge"),
    content: Bridge,
    description: `A blockchain bridge is a protocol connecting two blockchains to enable interactions between them.`
  },
  {
    date: '01/05/2022',
    title: 'ERC1155',
    id: cleanUpTitle('ERC1155'),
    content: erc1155,
    description: `A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).`
  },
  {
    date: '06/09/2022',
    title: 'Etherum merge',
    id: cleanUpTitle('Etherum merge'),
    content: SBT,
    description: `The Merge was the joining of the original execution layer of Ethereum (the Mainnet that has existed since genesis with its new proof-of-stake consensus layer, the Beacon Chain`
  },
  {
    date: '03/04/2022',
    title: 'Decentralized Autonomous Organization (DAO)',
    id: cleanUpTitle('Decentralized Autonomous Organization (DAO)'),
    content: dao,
    description: `The acronym DAO stands for Decentralized Autonomous Organization.  a DAO refers to a particular kind of organization that, unlike conventional companies, is based on open source code and is operated entirely by its community. `
  },
  {
    date: '10/05/2022',
    title: 'GameFi',
    id: 'GameFi',
    content: gameFi,
    description: `GameFi refers games that offer economic incentives to players .`
  },
  {
    date: '10/03/2021',
    title: 'WEB3',
    id: 'WEB3',
    content: web3,
    description: `Web3 ,the latest iteration of the Internet is expected to allow users to not only consume and create content and data but also own it.`
  },
  {
    date: '12/9/2022',
    title: 'Soulbound Tokens (SBT)',
    id: cleanUpTitle('Soulbound Tokens (SBT)'),
    content: SBT,
    description: `Soulbound Tokens (SBT) is a concept proposed in May 2022 by Vitalikt.SBTs are digital identity tokens that can function as the credentials`
  },
  {
    date: '13/8/2021',
    title: 'What Is a Crypto Airdrop?',
    id: cleanUpTitle('What Is a Crypto Airdrop'),
    content: airdrop,
    description: `Crypto airdrop is a marketing strategy adopted by crypto startups to promote the project and their new token. It involves distributing their native cryptocurrency to current or potential users' for free. `
  }
]
