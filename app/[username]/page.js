"use server"

import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
const Username = async ({ params }) => {
  const checkUser = async () => {
    await connectDb();
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
  };
  await checkUser();

  const paymentsLength = async () => {
    await connectDb();
    let u = await User.find({ username: params.username, done: true });
    return u.length

  }
  const pl = await paymentsLength();
  return (
    <>
      <PaymentPage paymentsLength={pl} username={params.username} />
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
 return{
  title: `Support ${params.username} | Get Me a Chai`,
 }
}