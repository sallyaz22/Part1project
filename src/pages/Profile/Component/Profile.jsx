// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Container } from 'react-bootstrap';
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import '../Component/Profile.css'


// export default function Profile() {
//  const [useProfile, setUserProfile] = useState({});
//  const [currentSection, setCurrentSection]  = useState("basic")
//  const [orders,setOrders] =useState([])
//  const [loading,setLoading] = useState(true)
//  const [error,setError] =useState(null);

//  useEffect( ()=>{
//   getProfile()
//  },[])

//  const getProfile = async () =>{
//   try{
//     const token = localStorage.getItem("userToken");
//     const profileResponse = await axios.get(`${import.meta.env.VITE_API}/user/profile`,
//     {
//       headers:{
//         Authorization: `Tariq__${token}`,
//       },
//     },
//     );
//     setUserProfile(profileResponse.data.user);
//     setLoading(false);
//   } catch(err){
//     setError("Failed to fetch profile data");
//     setLoading(false)
//   }
//  };
//  const handleorder = async () =>{
//   try{
//     const token = localStorage.getItem("userToken");
//     const orderReponse = await axios.get(`${import.meta.env.VITE_API}/order`,
//     {

//       headers:{
//         Authorization: `Tariq__${token}`,
//       },
//     },
//     )
//   setUserProfile(orderReponse.data.orders);
//   setCurrentSection("order")
//   } catch(err){
//     setError("Failed to fetch profile data");
//   }
//  };
//  const handleSectionChange = (section) =>{
//   setCurrentSection(section)
//  }
//  return (
//  <Container>
// <div className='d-flex'>
//   <div className='collapse d-block sidebar collapse bg-white col-la-4 col-sm-3 col-xs-2'>
//     <div className='position-sticky d-block'>
//       <SidebarItem text="Basic information" onCilck={() => handleSectionChange("basic")}/>
//       <SidebarItem text="Email & Password" onCilck={() => handleSectionChange("Email & Password")}/>
//       <SidebarItem text="Order" onCilck={() => {handleorder}}/>
//     </div>
//   </div>
// </div>
// <div className='col-9 col-la-8 col-md-5 col-sm-4'>
// </div>
// {function SidebarItem({text , onclick}){
//   return (
//     <a href="0" className="list-group-item list-group-item-action-py2"
//     onClick={onclick}
//     >
//     <span>{text}</span>
//     </a>
//   );
// }
// }
// function Orders ({orders}){
//   return (
//     <div>
//       <h2>Orders</h2>
//       <table id="example" className='display table table-bordePink table-striped'
//       style={{width: "100%"}}
//       >
//         <thead>
//           <tr>
//             <th>Name Order</th>
//             <th>Address</th>
//             <th>phoneNumber</th>
//             <th>Number of products</th>
//             <th>CouponName</th>
//             <th>status</th>
//             <th>finalPrice</th>
//           </tr>
//         </thead>
//       </table>
//       {}
//     </div>
//   )

// }
// {function BasicInformatin({user}){
//   return(
//     <div className="col-12 col-xl-8 col-md-3 col-sm-2">
//       <h2>Basic Information</h2>
//       {user.image && user.image.secure_url? ( 
//         <>
//         <img src={user.image.secure_url} alt="Profile" />
//         <h4>Name: {user.userName}</h4>
//         </>
//       ):( 
//         <p>NO IMAGE AVAILABEL</p>
//          )}
//     </div>
//   )
// }}

// function EamilaPassword ({user}) {
//   return(
//     <div className="col-12 col-xl-8 col-la-4 cpl-md-3 col-sm-2">
//       <h2>Email & Password</h2>
//       <p>Email: {user.email}</p>
//       <p>changePasswordTime: {user.changePasswordTime}</p>
//       <Link to="/sendCode" className='btn btn-outline-success'>
//       change Password
//       </Link>

//     </div>
//   )
// }

 

//  </Container>
// );
// };
