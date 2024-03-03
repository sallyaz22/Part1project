import axios from 'axios';
import React, { useEffect , useState} from 'react'
import './Home.css'


export default function App() {
  const [count,setCount] = useState(0);
  const [searchQuery,setSearchQuery] = useState('');
  const [products, setProduct] = useState([]);
const getProdects = async ()=>{
  const {data} =await axios.get(`https://dummyjson.com/products/1`);
  console.log(data)
}
const getSearchProdect = async()=>{
  const {data} = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
  setProduct(data.products)

}
useEffect( ()=>{
  getProdects()
}, [])

useEffect( ()=>{
  getSearchProdect()
},[searchQuery])
  return (
    <>
    {/* <button onClick={()=>setCount(count+3)}> click : {count}</button> */}
    {/* <input type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/> */}


    { products.map( product=>
      // <div className='prodect-text'>
      // <h2 className='prodect-h2'>{product.title}</h2>
    
      <div className='prodect' key={product.id}>
        <img src={product.thumbnail} className='prodect-img'></img>
      
        </div>
        // </div>
    )}
    </>

 
 
  )
}




