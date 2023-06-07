import React from 'react'
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import iconDelete from '../assets/images/icon-delete.svg'

const Cart = () => {
    const text = 'Autumn Limited Edition Sneakers'

  return (
    <>
    <article className='bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20' style={{zIndex: 1000}}>
        <h2 className='pb-2 mb-8 border-b border-slate-400 font-bold'>Cart</h2>

        <div className='flex items-center justify-between'>
            <img src={thumbnail} alt="" className='rounded-lg w-14'/>
            <ul>
                <li className='text-slate-600 text-sm'>{`${text.substring(0, 23)}...`}</li>
                <li className='text-slate-600 text-sm'>$125.00 x 3 <span className='font-bold text-slate-900'>$375.00</span></li>
            </ul>
            <button>
                <img src={iconDelete} alt="Delete Icon" />
            </button>
        </div>
        <button className=" w-full px-4 py-2 mt-5 font-bold text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 transition-all">Checkout</button>
    </article>
    </>
  )
}

export default Cart