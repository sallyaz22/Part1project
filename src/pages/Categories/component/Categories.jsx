import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Categories() {
    const {id} = useParams();
    const navigate= useNavigate();
    navigate('/home');
  return (
    <div>Categories {id}
     
    </div>
   
  )
}
