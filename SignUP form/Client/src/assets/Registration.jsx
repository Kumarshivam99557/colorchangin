import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Registration = () => {
 const [name,setName]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 console.log(name)
  async function submit(e){
    e.preventDefault()
    try{
      
        const {data} = await axios.post("http://localhost:3000/api/v1/createAccount",{name,email,password})
       console.log(data)
    }catch(e){
       console.log(e.message)
    }

 }

 return (
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
          <form onSubmit={submit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="name" // Add name attribute
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email" // Add name attribute
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password" // Add name attribute
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
              </div>
              <div>
                <input type='submit' value='Submit' className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:bg-blue-600" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Registration
