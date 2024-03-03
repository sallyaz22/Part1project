import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Product() {
    const {id} = useParams();
    const navigate= useNavigate();
    navigate('/home');
  return (
    <div>Product {id}</div>
  )
}
