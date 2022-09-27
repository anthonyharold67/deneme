import React from 'react'
import ProductCard from './ProductCard'
import Header from './Header';
import data from "../helper/data"
import Category from './Category';
const Main = ({myData,setMyData}) => {
  console.log(myData)
  return (
    <div className='productMain'>
        <Header />
        <Category data={data} setMyData={setMyData} />   
        {myData?.map((item,i)=> <ProductCard key={i} item={item}/>)}
    </div>
  )
}

export default Main