import { useState } from 'react'
import './App.css'
import { data } from './data.jsx'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import minus from './assets/images/icon-minus.svg'
import plus from './assets/images/icon-plus.svg'
import close from './assets/images/icon-close.svg'
import Header from "./components/Header.jsx"
import Lightbox from './components/Lightbox.jsx'

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const [price, setPrice] = useState(0);
  const {mainImage} = products[value];
  const nextSlide = () => {
    if(slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if(slideIndex === products.length) {
      setSlideIndex(1)
    }
  }
  const previousSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if(slideIndex === 1) {
      setSlideIndex(products.length)
    }
  }
  const handleMinus = () => {
    setAmount(amount - 1)
    if(amount <= 0) {
      setAmount(0);
    } 
  }
  const handlePrice = () => {
    setPrice(125);
  }
  return (
    <>
      <Header />
      {showLightbox && <Lightbox products={products} slideIndex={slideIndex} nextSlide={nextSlide} previousSlide={previousSlide} setShowLightbox={setShowLightbox}/>}
      <section className='grid grid-cols-1 gap-10 mx-auto lg:py-20 max-w-7xl lg:grid-cols-2 lg:items-center'>
        <article>
          <div className='lg:hidden'>
            {products.map((item, index) => (
              <div key={index}className={slideIndex === index + 1 ? 'relative' : 'hidden'}>
              <img onClick={() => setShowLightbox(true)}src={item.mainImage} alt="Selected Image" className=' cursor-pointer w-full lg:rounded-2xl'/>
              <ul className='lg:hidden'>
                <li><button onClick={previousSlide}className="bg-white p-5 rounded-full shadow absolute left-4 top-1/2 -translate-y-1/2"><FaChevronLeft /></button></li>
                <li><button onClick={nextSlide} className="bg-white p-5 rounded-full shadow absolute right-4 top-1/2 -translate-y-1/2"><FaChevronRight /></button></li>
              </ul>
            </div>
            ))}
          </div>
          <div className='hidden lg:block'>
              <img onClick={() => setShowLightbox(true)}src={mainImage} alt="Selected Image" className=' cursor-pointer w-full lg:rounded-2xl'/>
            </div>

          <ul className="items-center justify-start hidden gap-5 mt-5 lg:flex">
            {products.map((item, index) => (
            <li key={item.id} onClick={() => setValue(index)} className={`${index === value && "border-orange-400"} border-2 rounded-2xl overflow-hidden`}><img src={item.thumbnail} alt="Image Thumbnail" className={` ${index === value && "border-orange-400 opacity-30"} w-20 cursor-pointer`} /></li>
            ))}
          </ul> 
        </article>

        <article className='pb-10 px-7'>
          <h2 className="inline-block px-2 py-1 mb-10 text-sm font-bold tracking-wide text-orange-400 uppercase rounded shadow bg-slate-100">Sneaker Company</h2>
          <h1 className='mb-10 text-3xl font-bold text-slate-900 lg:text-4xl'>Fall Limited Edition Sneakers</h1>
          <p className='mb-10 leading-relaxed text-slate-600'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className='flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2'>
            <ul className='flex items-center gap-5'>
              <li className="text-2xl font-bold text-slate-900">${price}</li>
              <li className="inline-block px-2 py-1 text-sm font-bold tracking-wide text-orange-400 bg-orange-100 rounded shadow">50%</li>
            </ul>
              <p className="text-sm text-slate-600"><s>$250.00</s></p>
          </div>
          <div className='mt-10 lg:flex lg:items-center justify-between gap-2'>
            <ul className='flex items-center justify-between px-4 py-2 rounded shadow bg-slate-100 lg:flex-1'>
              <li onClick={handleMinus} className='cursor-pointer'><img src={minus} alt="Minus Button"/></li>
              <li>{amount}</li>
              <li onClick={() => setAmount(amount + 1)} className='cursor-pointer'><img src={plus} alt="Plus Button" /></li>
            </ul>
            <button className="flex items-center justify-center lg:flex-1 w-full gap-4 px-4 py-2 mt-5 lg:mt-0 font-bold text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 transition-all">
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  )
}

export default App
