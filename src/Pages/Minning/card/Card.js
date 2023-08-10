import React from 'react'
import './card.css';
import { Link } from 'react-router-dom';
import ButtonApplicationFromGlobal from '../../../Global/Button';
import Button from '@mui/material/Button';

const Card = () => {
    const cardsdata = [
        {
          id: 1,
          name: 'BTC',
          image: require('./assets/currencies/BTC.png'),
          des: 'Bitcoin is the first and most well-known cryptocurrency in the world.',
        },
        {
          id: 2,
          name: 'ETH',
          image: require('./assets/currencies/ETH.jpg'),
          des: 'Ethereum is a decentralized platform that enables developers to build and deploy smart contracts.',
        },
        {
          id: 3,
          name: 'USDT',
          image: require('./assets/currencies/USDT.png'),
          des: 'USDT is a stablecoin pegged to the US dollar and commonly used for trading and transactions.',
        },
        {
          id: 4,
          name: 'BNB',
          image: require('./assets/currencies/BNB.png'),
          des: 'BNB is the native cryptocurrency of the Binance exchange and has various use cases within the platform.',
        },
        {
          id: 5,
          name: 'XRP',
          image: require('./assets/currencies/XRP.png'),
          des: 'XRP is a digital payment protocol that aims to enable fast and low-cost cross-border transactions.',
        },
        {
          id: 6,
          name: 'USDC',
          image: require('./assets/currencies/USDC.jpg'),
          des: 'USDC is a stablecoin backed by the US dollar, commonly used in DeFi applications.',
        },
        {
          id: 7,
          name: 'Doge',
          image: require('./assets/currencies/Doge.jpg'),
          des: 'Doge is a cryptocurrency that started as a meme but gained popularity as a tipping currency.',
        },
        {
          id: 8,
          name: 'ADA',
          image: require('./assets/currencies/ADA.png'),
          des: 'Cardano (ADA) is a blockchain platform with a focus on sustainability, scalability, and interoperability.',
        },
        {
          id: 10,
          name: 'SOL',
          image: require('./assets/currencies/SOL.jpeg'),
          des: 'Solana is a high-performance blockchain platform known for its fast transaction speeds and low fees.',
        },
        {
          id: 11,
          name: 'TRX',
          image: require('./assets/currencies/TRX.png'),
          des: 'TRON is a blockchain platform that aims to create a decentralized internet and content-sharing ecosystem.',
        },
        {
          id: 12,
          name: 'LTC',
          image: require('./assets/currencies/LTC.png'),
          des: 'Litecoin is a cryptocurrency that aims to provide fast and low-cost transactions for everyday use.',
        },
        {
          id: 13,
          name: 'MATIC',
          image: require('./assets/currencies/MATIC.png'),
          des: 'Polygon (MATIC) is a scaling solution for Ethereum, enhancing its performance and usability.',
        },
        {
          id: 14,
          name: 'DOT',
          image: require('./assets/currencies/DOT.png'),
          des: 'Polkadot is a multi-chain blockchain platform that enables interoperability between different blockchains.',
        },
        {
          id: 15,
          name: 'BCH',
          image: require('./assets/currencies/BCH.png'),
          des: 'Bitcoin Cash is a fork of Bitcoin that focuses on larger block sizes for faster and cheaper transactions.',
        },
        {
          id: 16,
          name: 'SHIB',
          image: require('./assets/currencies/SHIB.png'),
          des: 'Shiba Inu (SHIB) is a cryptocurrency inspired by the Shiba Inu dog breed, gaining popularity as a meme coin.',
        },
        {
          id: 17,
          name: 'WBTC',
          image: require('./assets/currencies/WBTC.png'),
          des: 'Wrapped Bitcoin (WBTC) is a tokenized version of Bitcoin that can be used on Ethereum-based DeFi platforms.',
        },
        {
          id: 18,
          name: 'DAI',
          image: require('./assets/currencies/DAI.png'),
          des: 'DAI is a stablecoin on the Ethereum blockchain, backed by collateral and maintained through a decentralized system.',
        },
        {
          id: 19,
          name: 'AVAX',
          image: require('./assets/currencies/AVAX.png'),
          des: 'Avalanche (AVAX) is a platform for launching decentralized applications with high performance and low fees.',
        },
        {
          id: 20,
          name: 'XLM',
          image: require('./assets/currencies/XLM.jpg'),
          des: 'Stellar (XLM) is a blockchain platform designed for fast and low-cost cross-border payments and remittances.',
        },
        
      ];
      
          
  return (
    <div className='card-header'>
        {cardsdata.map((data , index) => (
            <div className='container card' key={index}>
  <div className='header-cards-cun-img'>
    <img src={data.image} alt={data.name} style={{width:150 , hight:150}} />
  </div>
  <div className='header-cards-cun-name'>
    <h1>{data.name}</h1>
  </div>
  <div className='header-cards-cun-des'>
    <h3>{data.des}</h3>
  </div>
  <div>
    <Link to='/register'>
    <Button variant="contained" disableElevation style={{margin:10}} className='card-button'>
      Minning Now
    </Button>
    </Link>
  </div>
</div>



        ))}
    </div>
  )
}

export default Card