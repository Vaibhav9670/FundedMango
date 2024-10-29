import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Login from './Login';
import toast from 'react-hot-toast';

function Signup() {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        };
       await axios
       .post("http://82.112.230.22:4173/user/signup", userInfo)
       .then((res)=>{
        
            if(res.data){
                toast.success('Singn Successfull');
                navigate(from, {replace : true});
            }
            localStorage.setItem("User", JSON.stringify(data))
        }).catch((error)=>{
            if(error.response)
            console.log(error)
            toast.error("Error:" + error.response.data.message);
        })
        // Handle signup logic here
    };



    return (
        <div className='flex h-screen items-center justify-center border shadow-md  dark:text-black'>
            <div className="w-[550px]">
                <div className="modal-box relative">
                    {/* Modal Close Button */}
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-xl pt-2">Signup</h3>
                    
                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className='mt-3'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your full name'
                                className='w-80 px-2 my-2 rounded border outline-none'
                                {...register("fullname", { required: "Name is required" })}
                            />
                            <br />
                            {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-3'>
                            <span>Email*</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 px-2 my-2 rounded border outline-none'
                                {...register("email", { required: "Email is required" })}
                            />
                            <br />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-3'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-80 px-2 my-2 rounded border outline-none'
                                {...register("password", { required: "Password is required" })}
                            />
                            <br />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>

                        {/* Signup Button */}
                        <div className='flex justify-around mt-4 text-lg'>
                            <button type="submit" className='bg-orange-600 text-white rounded-md px-4 py-1.5 hover:bg-orange-400 duration-200'>Signup</button>
                            <div>Have an account? {" "}
                                <button  className='underline text-blue-500 cursor-pointer' onClick={()=>
                                    document.getElementById("my_modal_1").showModal()
                                }> Login</button>{" "}
                               
                            </div>
                        </div>
                    </form>
                    <Login/>  {/* Rander the login outside tha form */}    
                </div>
            </div>
            
        </div>
    );
}

export default Signup;
