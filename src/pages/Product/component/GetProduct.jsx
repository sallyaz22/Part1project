import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GetProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItem,setCartItem] = useState([]);


  const setAddCart = async (productId) =>{
    const token = localStorage.getItem("userToken");
    const {data} = await axios.post(
      `${import.meta.env.VITE_API}/cart`,
      { productId },
      {
        headers: {
          Authorization: `Tariq__${token}`
        },
      }
    );
    setCartItem(data.Product);

    }

  const getProduct = async () => {
    try {
      setLoading(true);
      const { data: { product } } = await axios.get(`${import.meta.env.VITE_API}/products/${id}`);
      setProduct(product);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
  
      <h2>Product</h2>
      {product && (
        <div className='Product'>
          <h5 className='card-title'>{product?.name}</h5>
          <p>{product?.discription}</p>
          <img src={product?.secure_url} alt={product.name} />
          <button onClick={() => setAddCart(product._id)} className="btn btn-outline-dark">
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}