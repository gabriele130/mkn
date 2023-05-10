import { useState } from 'react';
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { IoWallet,  } from 'react-icons/io5';
import { HiOutlineIdentification } from 'react-icons/hi';
import MetaMask from '../Image/MetaMask_Fox.svg.png';
import Coinbase from '../Image/Coinbase.png';
import Opera from '../Image/Opera.png';
import wallet from '../Image/wallet.png';
import Fortmatic from '../Image/Fortmatic.webp';
import ConnectWalletButton from './ConnetToWallet';


const OptionsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleOptionSelection = (option) => {
        setSelectedOption(option);
        toggleModal();
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleModal}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Connect Wallet
                </button>
            </div>

            <div
                className={`${isModalOpen ? 'fixed' : 'hidden'
                    } z-10 inset-0 overflow-y-auto`}
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                        onClick={toggleModal}
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className={`${isModalOpen ? 'inline-block' : 'hidden'
                            } align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-headline"
                                    >
                                        Connect Wallet                  </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Connect with one of our available wallet providers or create a new one.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Selezione Wallet */}
                            <div className="flex flex-col w-full items-center gap-5 pt-5">
      <ConnectWalletButton />

      <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-4 flex items-center gap-2 hover:bg-gray-300 w-full">
        <img src={Coinbase} className='w-7 rounded-xl' />
        <span className='text-black text-base'>Coinbase</span>
      </button>

      <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-4 flex items-center gap-2 hover:bg-gray-300 w-full">
      <img src={Opera} className='w-7 rounded-xl' />
        <span className='text-black text-base'>Opera Wallet</span>
      </button>

      <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-4 flex items-center gap-2 hover:bg-gray-300 w-full">
      <img src={wallet} className='w-7 rounded-xl' />
        <span className='text-black text-base'>WalletConnect</span>
      </button>

      <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-4 flex items-center gap-2 hover:bg-gray-300 w-full">
      <img src={Fortmatic} className='w-7 rounded-xl' />
        <span className='text-black text-base'>Fortmatic</span>
      </button>
    </div>


                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Chiudi
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OptionsButton;
