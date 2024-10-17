import React from 'react';

const Cards = ({ item }) => {
    
    return (
        <>
            <div className="mt-4 my-3 ">
  <div className="card bg-base-100  dark:bg-slate-800 dark:text-white m-3 w-62 max-h-full shadow-xl hover:scale-105 border-2 duration-200 flex flex-col">
    <figure className="h-1/6 ">
      <img
        src={item.image}  // Assuming item has an 'imageUrl' field
        alt={item.name}    // Assuming item has a 'title' field
        className="object-cover overflow-auto w-full p-4 rounded"
      />
    </figure>
    <div className="card-body flex flex-col  justify-between flex-grow">
      <h4 className="card-title  min-h-16">
        {item.name}  {/* Dynamic title from the item */}
      </h4>
      <div className="flex justify-between items-center mt-auto">
        <div className="border border-gray-300 bg-white text-gray-800 font-semibold py-1 px-2 rounded-full shadow-md w-20">
          {item.price}
        </div>
        <div className="card-actions">
          <button className="bg-orange-500 dark:bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-orange-400 transition duration-200 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Cards;
