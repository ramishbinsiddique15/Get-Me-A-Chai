"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentuser, setcurrentuser] = useState({});
  const [payments, setpayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast("🦄 Payment Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    router.push(`/${username}`);
  }, [searchParams]);

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentuser(u);
    let dbPayments = await fetchpayments(username);
    setpayments(dbPayments);
  };

  const pay = async (amount) => {
    const keyId = currentuser.razorpayid;
    if (!keyId) {
      console.error("Environment variable NEXT_PUBLIC_KEY_ID is not set.");
      return;
    }

    try {
      let a = await initiate(amount, username, paymentform);
      let orderId = a.id;
      const options = {
        key: keyId,
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const isDisabled =
    paymentform.name.length < 3 ||
    paymentform.message.length < 3 ||
    paymentform.amount.length < 1;

  useEffect(() => {
    console.log("Payment form state:", paymentform);
    console.log("Button disabled state:", isDisabled);
  }, [paymentform]);

  return (
    <>
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img src={currentuser.coverpic} alt="" />
        <div className="dp absolute -bottom-10 left-[45%] border-2 border-white rounded-lg">
          <img
            className="rounded-lg"
            width={125}
            height={125}
            src={currentuser.profilepic}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="info font-bold text-2xl pt-12">@{username}</div>
        <div className="text-slate-400">Lets help {username} get a chai</div>
        <div className="flex gap-3 items-center justify-center text-slate-400">
          <div>{payments.length} Payments</div>
          <div>&#8226;</div>
          <div>₹{payments.reduce((a,b)=>a+b.amount,0)} raised</div>
        </div>
      </div>
      <div className="payment flex p-14 gap-5 justify-center w-full">
        <div className="supporters bg-slate-900 px-5 py-2 overflow-y-scroll h-[70vh] rounded lg border-2 border-white w-1/2">
          <h2 className="text-2xl font-bold pb-2">Supporters</h2>
          <ul className="text-lg">
            {payments.length === 0 && <li>No payments yet</li>}
            {payments.map((p, i) => {
              return (
                p.done && (
                  <li className="py-1 flex items-center gap-2" key={i}>
                    <img src="/img/user.gif" width={35} height={35} alt="" />
                    <span className="inline-flex">
                      {p.name} donated ₹{p.amount} with a message "{p.message}"
                    </span>
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className="make-payment bg-slate-900 px-5 py-2 w-1/2 rounded lg border-2 border-white">
          <h2 className="text-2xl font-bold pb-2">Make a Payment</h2>
          <div className="flex flex-col gap-2">
            <input
              name="name"
              onChange={handleChange}
              value={paymentform.name}
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Name"
            />
            <input
              name="message"
              onChange={handleChange}
              value={paymentform.message}
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Message"
            />
            <input
              name="amount"
              onChange={handleChange}
              value={paymentform.amount}
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950 rounded-lg p-3"
              placeholder="Enter Amount"
            />
            <button
              onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
              className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-slate-600"
              disabled={isDisabled}
            >
              Pay Now
            </button>
          </div>
          <div className="flex gap-2 pt-5 w-full">
            <button
              className="bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-slate-600"
              onClick={() => pay(500)}
              disabled={
                paymentform.name.length < 3 || paymentform.message.length < 3
              }
            >
              Pay ₹5
            </button>
            <button
              className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-slate-600"
              onClick={() => pay(1000)}
              disabled={
                paymentform.name.length < 3 || paymentform.message.length < 3
              }
            >
              Pay ₹10
            </button>
            <button
              className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-slate-600"
              onClick={() => pay(2000)}
              disabled={
                paymentform.name.length < 3 || paymentform.message.length < 3
              }
            >
              Pay ₹20
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
