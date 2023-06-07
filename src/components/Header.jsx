import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import avatar from '../assets/images/image-avatar.png';
import menu from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-close.svg';
import Cart from './Cart.jsx'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    return (
      <>
        <header className='flex items-center justify-between p-8 mx-auto border-b border-slate-400 max-w-7xl relative'>
          <div className='flex items-center justify-start gap-4'>
            <ul className='flex items-center justify-start gap-4'>
                {!isOpen && (<li onClick={() => setIsOpen(true)}className='lg:hidden'>
                    <button>
                        <img src={menu} alt="Menu" className='cursor-pointer w-6'/>
                    </button>
                </li>)}
                {isOpen && (<li onClick={() => setIsOpen(false)}className='lg:hidden close'>
                    <button>
                        <img src={close} alt="Close" className='cursor-pointer w-6 fixed'/>
                    </button>
                </li>)}
                <li>
                    <img src={logo} alt="Sneakers Logo" />
                </li>
            </ul>
            <nav className={isOpen && 'open'}>
              <ul className=''>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
  
          <div>
            <ul className='flex items-center justify-start gap-4'>
              <li><button onClick={() => setCartIsOpen(!cartIsOpen)}><AiOutlineShoppingCart className="text-2xl text-slate-600"/></button></li>
              <li>
                {cartIsOpen && <Cart />}
              </li>
              <li><img src={avatar} alt="Avatar" className="w-12" /></li>
            </ul>
          </div>
        </header>
      </>
    )
  }