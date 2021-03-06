import React, {useState} from 'react';
import Web3 from 'web3';

const WalletCard = () => {

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        accountChangedHandler(result[0]);
      })
    } else {
      setErrorMessage('Intsall MetaMask');
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  }

  const getUserBalance = (address) => {

  }

  const enableEthereum = () => {
    window.ethereum.request({ method: 'eth_requestAccounts'})
  }

  return (
    <div className='walletCard'>
		<h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
      <button onClick={enableEthereum}>Enable Ethereum</button>
		</div>
  )
}

export default WalletCard;
