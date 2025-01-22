import React from "react";
import Header from "../components/Header";

const View = () => {
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXNfIp81eFfGC-l42yGYjvvTw-02ybn5tDA&s"
              alt=""
            />
            <div className="flex justify-between mt-5">
                <button className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
                <button className="bg-green-600 rounded text-white p-2">Add to Cart</button>
              </div>
         </div>
          <div>
            <h3 className="font-bold">PID: id</h3>
            <h1 className="text-5xl font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2xl">$260</h4>
            <h4>Brand: brand</h4>
            <h4>Category: category</h4>
            <p>
              <span className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                maiores, quibusdam eveniet dicta perferendis, sapiente
                reiciendis rerum enim ut odit, eligendi maxime? Quae facere amet
                veniam animi alias praesentium molestias.
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
