import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'}  src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457" alt="" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>title</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more...</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home