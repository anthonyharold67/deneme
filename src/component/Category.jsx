import React from 'react'

const Category = ({data,setMyData}) => {
    const categories = ["all", ...new Set(data.map(item=> item.category))]
    // data.map(item=>categories.indexOf(item.category)=== -1 ?categories.push(item.category):null )
    const filteredData = (category)=>{
        category !== "all" ?
        setMyData(data.filter(item=>item.category===category)) :
        setMyData(data)
    }

  return (
    <div className='btn'>
        {
            categories.map((item,index)=>{
                return (
                    <button
                    type="button"
                    className='filterBtn'
                    key={index}
                    onClick={()=>filteredData(item)}
                    >
                        {item}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Category