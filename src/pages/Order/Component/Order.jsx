import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './../../../context/User';
import { object, string } from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Order() {
const {state} = useLocation();
const cartItems = state.cartItems;
const navigate = useNavigate();
const {setUserToken} = useContext(UserContext)

const [order, setOrder] =useState({
    Coupon:"",
    Address:"",
    PhoneNumber:""
})
const [loader, setLoader] = useState(false);
const [errors,setErrors] =useState([]);

const totalPrice = cartItems.reduce((total, item) => {
  return total + item.details.price * item.quanttity;
}, 0);

const handleChange = (e) =>{
  const {name, Value} = e.target;
  setOrder({
    ...Order,
    [name]:Value,
  });
  const validetData = async () =>{
    const logSchema = object({
      Coupon: string(),
      Address: string().required(),
      PhoneNumber:string().required().min(5).max(20),
    });
    try{
      await logSchema.validate(order, {abortEarly:false})
      setErrors([]);
      return true;

    }catch(err){
      setErrors(err.errors);
      setLoader(false);
      err.errors.forEach((error) =>{
        toast.error(error, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      
      })
    }
  };
  const handleSubmit = async (e) =>{
   e.preventDefault();
   const token = localStorage.getItem("userToken");

   setLoader(true);
   if (await validetData()) {
    try {
      const data =await axios.post(`${import.meta.env.VITE_API}/order`,
      
        {
          couponName:order.Coupon,
          address:order.Address,
          phone:order.PhoneNumber,   
      },
      {
        headers:{
          Authorization: `Tariq__${token}`
        },
      }
      );
      setOrder({
        Coupon:"",
        Address:"",
        PhoneNumber:""
      });
      setUserToken(data.token);
      toast.success('Order Successfull !');
      navigate("/profile");
    }catch(err){
      setLoader(false);
      setErrors(err.errors);
      toast.error(err.errors);
    } finally{
      setLoader(false)
    }
   }
  }
}
  return (
    <div className='d-flex flex-wrap'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Img</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr key={item.details._id}>
        <td>{item.details.name}</td>
        <td>
          <img src={item.details.mainImage.securce_url}
          alt={item.name}
          style={{width:"100px", height:"100px"}}
          />
        </td>
        <td>{item.quanttity}</td>
        <td>${item.quanttity * item.details.price}</td>
      </tr>
    ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="4" className="text-right">
        total Price: ${totalPrice}
        </td>
      </tr>
    </tfoot>
    </table>
    <div>
      <label htmlFor="coupon">Copupon:</label>
      <input type="text" name='Coupon' value={order.Coupon}  onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="address">Address:</label>
      <input type="text" name='Address' value={order.Address}  onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="phoneNumber">PhoneNumber:</label>
      <input type="text" name='PhoneNumber' value={order.PhoneNumber}  onChange={handleChange}/>
    </div>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody> */}


    </div>

  )
}
