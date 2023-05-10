import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import {SiReadthedocs} from "react-icons/si";
import {SiBookstack} from "react-icons/si";
import {IoIosHelpBuoy} from "react-icons/io";
import {GoSettings} from "react-icons/go";
import {FcSettings} from "react-icons/fc";
import {BiWorld} from "react-icons/bi";
import ConnectWalletButton from "./ConnetToWallet";
import OptionsButton from "./CardWallet";
function Sidebar() {

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false);
    const [isOpenLock, setIsOpenLock] = useState(false);

    const toggleDropdownLock = () => {
        setIsOpenLock(!isOpenLock);
    };

    const toggleDropdownn = () => {
        setIsOpenn(!isOpenn);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex border-l-black">

                <div
                    className={` ${open ? "w-40" : "w-60"
                        } flex flex-col h-screen p-3 bg-gray-100 shadow duration-300`}
                >
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">

                            <button  onClick={() => setOpen(!open)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                        </div>


                        {/* OVERVIEW */}
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-2xl">
                                            <GrAnalytics />
                                        </span>
                                        <span className="text-black-100">Overview</span>
                                    </a>
                                </li>

                                {/* PAGES */}

                                <li>
                                    <div>
                                        < button onClick={toggleDropdown} type="button" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-white dark:text-black dark:hover:bg-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <AiFillCopy className="text-2xl" />                                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Pages</span>

                                            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <nav className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
                                            <div className="mt-3">
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    EXAMPLE
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    EXAMPLE
                                                </a>



                                            </div>
                                        </nav>
                                    </div>
                                </li>



                                {/* SALES */}

                                <li>
                                    <div>
                                        < button onClick={toggleDropdownn} type="button" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-white dark:text-black dark:hover:bg-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <AiFillShopping className="text-2xl" />                                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>   Sales</span>

                                            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <nav className={`px-2 pt-2 pb-4 ${isOpenn ? 'block' : 'hidden'}`}>
                                            <div className="mt-3 text-center">
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    Product list
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    Billing
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    Invoice
                                                </a>



                                            </div>
                                        </nav>
                                    </div>
                                </li>


                                {/* MESSAGES */}

                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-2xl">
                                            <BiMessageAltDetail />
                                        </span>
                                        <span className="text-black-100">
                                            Messages
                                        </span>
                                    </a>
                                </li>


                                {/* AUTHENTICATION */}

                                <li>
                                    <div>
                                        < button onClick={toggleDropdownLock} type="button" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-white dark:text-black dark:hover:bg-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <AiTwotoneLock className="text-2xl" />                                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>   Authentication</span>

                                            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <nav className={`px-2 pt-2 pb-4 ${isOpenLock ? 'block' : 'hidden'}`}>
                                            <div className="mt-3 text-center">
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    EXAMPLE                                            </a>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-1 text-black font-semibold rounded hover:bg-white"
                                                >
                                                    EXAMPLE                                            </a>




                                            </div>
                                        </nav>
                                    </div>
                                </li>

<hr className="bg-gray-300 h-0.5"/>

<div className="pt-2 pb-4 space-y-1 ">
<li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-2xl">
                                            <SiReadthedocs />
                                        </span>
                                        <span className="text-black-100">
                                            Docs
                                        </span>
                                    </a>
                                </li>



                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-2xl">
                                            <SiBookstack />
                                        </span>
                                        <span className="text-black-100">
                                            Components
                                        </span>
                                    </a>
                                </li>



                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-2xl">
                                            <IoIosHelpBuoy />
                                        </span>
                                        <span className="text-black-100">
                                            Help
                                        </span>
                                    </a>
                                </li>
</div>


{/* CONNECT TO WALLET */}
<div className="pt-20">
<div className="bottom">
<OptionsButton/>
</div>

<div className="flex justify-center space-x-6 pt-3">

    <span   className="text-2xl ">
    <GoSettings/>
    </span>

    <span   className="text-2xl ">   
    <FcSettings/>
    </span>

    <span   className="text-2xl ">
    <BiWorld/>
    </span>
</div>
</div>


                                

                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Sidebar;
