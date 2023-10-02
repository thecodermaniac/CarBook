import React, { useState } from 'react'
import closeIcon from '../assets/close.png'
import signupimg from '../assets/logo_vector.svg'
import eye from '../assets/view.png'
import eyeClosed from '../assets/hide.png'
import { useUser } from '../contex/UserContext'
import axiosInstance from '../axiosServer'
import { toast } from 'react-toastify'

const SignUp = ({ setmodal }) => {
    const { setUser } = useUser();
    const [show, setshow] = useState(true);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleToggle = () => {
        setshow(prev => !prev);
    };
    async function handleSignup() {
        axiosInstance.post('http://localhost:5000/user/sign-up-User', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        }).then((response) => {
            console.log(response.data.body);
            setUser(response.data.body)
            toast.success('Created and Logged In')
            localStorage.setItem('9-5Car', JSON.stringify(response.data.body))
        }).catch((error) => {
            console.log(error);
            toast.error(error.response.data.message)
        })
    }
    return (
        <div className="flex flex-col  relative">
            <img
                src={closeIcon}
                className="absolute top-[-10px] right-[-10px] md:right-4 md:top-0 text-3xl cursor-pointer w-6"
                onClick={() => {
                    setmodal(prev => !prev);
                }}
            />
            <div className="flex mr-2 text-3xl  font-[580] text-gray-700 font-[Montserrat] md:hidden">
                Join 9 to 5 Car
            </div>
            <div className="md:flex justify-center hidden">
                <img src={signupimg} alt={'sign up'} className='h-32' />
            </div>
            <label className="font-[600] text-grayText tracking-[0.15em]">Full Name</label>
            <input type="text" className="border-2 px-2 rounded-md bg-slate-200 mt-2 p-1 py-2" onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value })
            }} />
            <label className="font-[600] text-grayText tracking-[0.15em]">Email</label>
            <input type="email" className="border-2 px-2 rounded-md bg-slate-200 mt-2 p-1 py-2" onChange={(e) => {
                setNewUser({ ...newUser, email: e.target.value })
            }} />
            <label className="font-[600] text-grayText tracking-[0.15em]">Password</label>
            <div className="relative">
                {!show && <img className="absolute top-5 right-1 w-5" src={eye} onClick={handleToggle} />}
                {show && <img className="absolute top-5 right-1 w-5" src={eyeClosed} onClick={handleToggle} />}
                <input
                    type={show ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="border-2 rounded-md bg-slate-200 mt-2 w-[100%] p-1 py-2"
                    onChange={(e) => {
                        setNewUser({ ...newUser, password: e.target.value })
                    }}
                />
            </div>
            <div className="flex justify-center">
                <button
                    className=" flex px-10 justify-center py-2 mt-3 rounded-md w-full bg-mainColor items-center text-white drop-shadow-2xl font-[550]"
                    onClick={handleSignup}
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default SignUp