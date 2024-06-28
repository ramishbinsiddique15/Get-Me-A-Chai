"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilePicture: "",
    coverPicture: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted: ", formData);
  };

  return (
    <div className="dashboard p-6">
      <h1 className="text-3xl text-center font-bold p-2">
        Welcome to your Dashboard
      </h1>
      <div className="container bg-slate-900 border-2 border-white rounded-lg w-[50%] p-5 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="input-group flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              name="username"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              required
              type="text"
              name="profilePicture"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Profile Picture"
              value={formData.profilePicture}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="coverPicture">Cover Picture</label>
            <input
              required
              type="text"
              name="coverPicture"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Cover Picture"
              value={formData.coverPicture}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="razorpayId">Razorpay ID</label>
            <input
              required
              type="text"
              name="razorpayId"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Razorpay ID"
              value={formData.razorpayId}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="razorpaySecret">Razorpay Secret</label>
            <input
              required
              type="text"
              name="razorpaySecret"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Razorpay Secret"
              value={formData.razorpaySecret}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 w-full my-3"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
