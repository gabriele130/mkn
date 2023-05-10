import { useState } from 'react';
import { ethers } from 'ethers';
import MetaMask from '../Image/MetaMask_Fox.svg.png';
const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setIsConnected(true);
        setWalletAddress(address);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not found.');
    }
  };

  return (
    <div  className="flex flex-col w-full items-center gap-5 pt-5">
      {!isConnected ? (
<button onClick={connectWallet} className="bg-gray-200 text-gray-800 rounded-md px-4 py-4 flex items-center gap-2 hover:bg-gray-300 w-full">
<img src={MetaMask} className='w-7 '/>
<span className='text-black text-base'>Metamask</span>
</button>
      
      ) : (
        <p>Wallet connesso: {walletAddress}</p>
      )}
    </div>
  );
};

export default ConnectWalletButton
