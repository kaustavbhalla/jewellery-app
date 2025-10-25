"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  PiMagnifyingGlass,
  PiMicrophone,
  PiCamera,
  PiDiamond,
  PiStorefront,
  PiHeart,
  PiUser,
  PiShoppingBag,
  PiList,
  PiX,
} from 'react-icons/pi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 shadow-md">
        {/* Desktop Layout */}
        <div className="h-20 flex items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Desktop Search Bar (Center) */}
          <div className="hidden md:flex flex-1 justify-center px-4 lg:px-8">
            <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-full px-4 py-2.5 shadow-sm">
              <PiMagnifyingGlass className="text-gray-500" size={22} />
              <input
                type="text"
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                className="w-full flex-1 mx-3 bg-transparent outline-none border-none placeholder-gray-500 text-sm"
              />
              <div className="flex items-center gap-3">
                <PiMicrophone className="text-gray-600 cursor-pointer" size={22} />
                <PiCamera className="text-gray-600 cursor-pointer" size={22} />
              </div>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-gray-800">
            <PiDiamond size={28} className="cursor-pointer" />
            <PiStorefront size={28} className="cursor-pointer" />
            <PiHeart size={28} className="cursor-pointer" />
            <PiUser size={28} className="cursor-pointer" />
            <div className="relative">
              <PiShoppingBag size={28} className="cursor-pointer" />
              <span className="absolute -top-2 -right-3 bg-red-700 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>
          </div>

          {/* Mobile: Cart + Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative">
              <PiShoppingBag size={28} className="cursor-pointer" />
              <span className="absolute -top-2 -right-3 bg-red-700 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <PiX size={28} /> : <PiList size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Below) */}
        <div className="md:hidden px-6 pb-4">
          <div className="w-full flex items-center border border-gray-300 rounded-full px-4 py-2.5 shadow-sm">
            <PiMagnifyingGlass className="text-gray-500" size={22} />
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
              className="w-full flex-1 mx-3 bg-transparent outline-none border-none placeholder-gray-500 text-sm"
            />
            <div className="flex items-center gap-3">
              <PiMicrophone className="text-gray-600 cursor-pointer" size={22} />
              <PiCamera className="text-gray-600 cursor-pointer" size={22} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="flex flex-col py-4 px-6 gap-4">
            <div className="flex items-center gap-3 py-2 cursor-pointer">
              <PiDiamond size={24} />
              <span>Diamonds</span>
            </div>
            <div className="flex items-center gap-3 py-2 cursor-pointer">
              <PiStorefront size={24} />
              <span>Store</span>
            </div>
            <div className="flex items-center gap-3 py-2 cursor-pointer">
              <PiHeart size={24} />
              <span>Wishlist</span>
            </div>
            <div className="flex items-center gap-3 py-2 cursor-pointer">
              <PiUser size={24} />
              <span>Account</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;