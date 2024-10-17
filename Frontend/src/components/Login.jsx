import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const navigate = useNavigate();

    const onSubmit =async (data) => {
        const userInfo={
            email:data.email,
            password:data.password,
            _id:data._id
        };
       await axios
       .post("http://localhost:4002/user/login", userInfo)
       .then((res)=>{
       
            if(res.data){
               toast.success('Login Successfull');
               document.getElementById("my_modal_1").close();
               localStorage.setItem("User",JSON.stringify(data))
               
               setTimeout(() => {
                   window.location.reload();
                 }, 1000);
            }
        }).catch((error)=>{
            if(error.response)
            console.log(error)
            toast.error("Error:" + error.response.data.message);
            setTimeout(() => {}, 2000);
        })
        // Handle signup logic here
    };

    const handleCloseModal = () => {
        const modal = document.getElementById("my_modal_1");
        modal.close(); // Close the modal
        navigate("/"); // Navigate to home page "/"
    };

    return (
        <div>
            <dialog id="my_modal_1" className="modal  dark:text-black">
                <div className="modal-box">
                    {/* Modal Close Button */}
                    <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    
                    {/* Form Start */}
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email Input */}
                        <div className='mt-3'>
                            <label>Email*</label>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter Your Email'
                                className='w-80 px-2 my-2 rounded border outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Password Input */}
                        <div className='mt-3'>
                            <label>Password*</label>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter Your Password'
                                className='w-80 px-2 my-2 rounded border outline-none'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Login & Signup */}
                        <div className='flex justify-around mt-4'>
                            <button
                                type="submit"
                                className='bg-orange-600 text-white rounded-md px-4 py-1.5 hover:bg-orange-400 duration-200'>
                                Login
                            </button>
                            <div>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></div>
                        </div>
                    </form>
                    {/* Form End */}
                </div>
            </dialog>
        </div>
    );
};

export default Login;
