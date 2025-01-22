import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
      <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'}  src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457" alt="" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>title</h3>
              <div className='flex justify-evenly mt-3'>
                <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
              
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
    </>
  )
}

export default Wishlist