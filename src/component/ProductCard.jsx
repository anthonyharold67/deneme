import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='productDiv'>
      <div className='productImg'>
        <img src={item.url} alt="item.name" />
      </div>
      <div className='productBody'>
        <div className='productHeader'>
          <p>{item.name}</p>
          <p className='productPrice'>{item.price}</p>
        </div>
        <p className='productText'>{item.title}</p>
      </div>
    </div>
  );
}


export default ProductCard