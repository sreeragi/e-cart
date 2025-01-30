import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const View = () => {
  const dispatch=useDispatch()
  const userCart =useSelector(state=>state.cartReducer)
  
  const userWishlist =useSelector(state=>state.wishlistReducer)


  const [product,setProduct]=useState({})
  const {id}=useParams()
  console.log(id);
   
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
     setProduct(allProducts.find(item=>item.id==id));
    }
  },[])

  const handleWishlist=()=>{
    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert('Product already in wishlist')
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct=userCart?.find(item=>item.id==id)
    if(existingProduct){
      alert("Product Quantity incremented")

    }else{
      alert("Product add to your cart")
    }
  }
  
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
         <div>
            <img
              className="ms-40"
              width={"350px"}
              height={"250px"}
              src={product?.thumbnail}
              alt=""
            />
            <div className="flex justify-between mt-5">
                <button onClick={handleWishlist} className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
                <button onClick={handleCart} className="bg-green-600 rounded text-white p-2">Add to Cart</button>
              </div>
         </div>
          <div>
            <h3 className="font-bold">PID:{product?.id}</h3>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">${product?.price}</h4>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <p className="font-bold">Description<span>{product?.description}</span></p>
             <h3 className="font-bold mt-4">Client Reviews</h3>
             {
              product?.reviews?.length>0?
              product?.reviews?.map(item=>(
                <div key={item?.date} className="shadow rounded p-2 mb-2">
                  <h5>
                    <span className="font-bold">{item?.reviewerName}</span>:
                    <span>{item?.comment}</span>
                  </h5>
                  <p>Rating: {item.rating}<i className="fa-solid fa-star text-yellow-500"></i></p>

                </div>
              ))
              :
              <div className="font-bold text-red-600">No reivews yet !!!</div>
             }
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
