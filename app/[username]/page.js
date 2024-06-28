import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1720051200&token-hash=28N3MiYJr_z24o6gHXfUO1vaPJjoFmWKl45Ra8DdmOc%3D"
          className="object-cover w-full "
          alt=""
        />
        <div className="dp absolute -bottom-10 left-[45%] border-2 border-white rounded-lg">
          <img
            className="rounded-lg"
            width={125}
            height={125}
            src="/img/dp.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="info font-bold text-2xl  pt-12">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="flex gap-3 items-center justify-center text-slate-400">
          <div>12,022 members</div>
          <div>&#8226;</div>
          <div>85 posts</div>
          <div>&#8226;</div>
          <div>$16,280/release</div>
        </div>
      </div>
      <div className="payment flex p-14 gap-5 justify-center w-full">
        <div className=" supporters bg-slate-900 px-5 py-2 overflow-y-scroll  h-[70vh] rounded lg border-2 border-white">
          <h2 className="text-2xl font-bold  pb-2">Supporters</h2>
          <ul className="text-lg">
          <li className="py-1 flex items-center gap-2">
  <img src="/img/user.gif" width={35} height={35} alt="" />
  <span className="inline-flex">
    Babar donated $100 with a message "I support you bro keep it up❤️"
  
  </span>
</li>

            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
            <li className="py-1 flex items-center gap-2">
              <img src="/img/user.gif" width={35} height={35} alt="" />
              Babar donated $100 with a message "I support you bro keep it up❤️"
            </li>
          </ul>
        </div>
        <div className="make-payment bg-slate-900 px-5 py-2 w-1/2 rounded lg border-2 border-white">
          <h2 className="text-2xl font-bold  pb-2">Make a Payment</h2>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950  rounded-lg p-3"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950  rounded-lg p-3"
              placeholder="Enter Message"
            />
            <input
              type="text"
              className="border-2 w-full border-slate-950 bg-slate-950  rounded-lg p-3"
              placeholder="Enter Amount"
            />
            <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Pay Now
            </button>
          </div>
          <div className="flex gap-2 pt-5 w-full">
            <button className="bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Pay $5
            </button>
            <button className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Pay $10
            </button>
            <button className="w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Pay $20
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
