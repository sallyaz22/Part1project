import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CategoriesProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/products/category/${id}`);
      setProducts(data.products);
    } catch (err) {
      console.log('Error fetching products:', err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem('userToken');
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/cart`,
        { productId },
        {
          headers: {
            Authorization: `Tariq__${token}`
          }
        }
      );
      setCartItem([...cartItem, data.Product]); // Update cart items with new item

      console.log(data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div className="productgat" key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.mainImage.secure_url} alt="" />
          <button onClick={() => addToCart(product._id)} className="btn btn-outline-dark">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
