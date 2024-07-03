"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { updateProfile, fetchuser } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Dashboard | Get Me a Chai";
    getData();
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  const getData = async () => {
    if (session) {
      let u = await fetchuser(session.user.name);
      setFormData(u);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    update()
    let a = await updateProfile(e, session.user.name);
    toast("🦄 Profile Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
     <ToastContainer />
    <div className="dashboard p-6">
      <h1 className="text-3xl text-center font-bold p-2">
        Welcome to your Dashboard
      </h1>
      <div className="container bg-slate-900 border-2 border-white rounded-lg w-[95%] md:w-[50%] p-5 mx-auto">
        <form action={handleSubmit}>
          <div className="input-group flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              
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
              
              type="text"
              name="username"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="profilepic">Profile Picture</label>
            <input
              
              type="text"
              name="profilepic"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Profile Picture"
              value={formData.profilepic}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="coverpic">Cover Picture</label>
            <input
              
              type="text"
              name="coverpic"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Cover Picture"
              value={formData.coverpic}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="razorpayid">Razorpay ID</label>
            <input
              
              type="text"
              name="razorpayid"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Razorpay ID"
              value={formData.razorpayid}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex flex-col">
            <label htmlFor="razorpaysecret">Razorpay Secret</label>
            <input
              
              type="text"
              name="razorpaysecret"
              className="border-2 my-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Razorpay Secret"
              value={formData.razorpaysecret}
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
    </>
  );
};

export default Dashboard;
