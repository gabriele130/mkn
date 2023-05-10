import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import {MdGridView} from "react-icons/md";
import Logo from '../Image/logo.png';

function Navbar() {

  
  return (

    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-gray-100 h-16 justify-between items-center mx-auto px-4 flex">
              <div>
                  <img src={Logo} className='w-10 ml-1' alt="" />
              </div>

              <div className="lg:block mr-auto ml-20 hidden relative max-w-md">
                <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                          stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                    </span>
                  </span>
                </p>
                <input placeholder="Type to search" type="search" className="border border-gray-300 focus:ring-indigo-600
              focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
              </div>

              

              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <div className="relative">
                  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="items-center justify-center flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewbox="0 0 456.147 456.147"
                        style={{ enableBackground: 'new 0 0 456.147 456.147' }}><g><path
                          d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z" /></g></svg>
                    </span>
                  </p>
                </div>
                <div className="relative">
                  <p className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                            stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                        0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6
                        0H9"/></svg>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p className="px-1.5 py-0.5 font-semibold text-xs items-center bg-indigo-600 text-white rounded-full inline-flex
                absolute -top-px -right-1">2</p>
                </div>
               

                <div className="justify-center items-center flex relative">
                  <img src="data:image/jpeg;base64,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"
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300" alt="" />
                  <p className="font-semibold text-sm">Gabriele Cataudella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
}

export default Navbar;
