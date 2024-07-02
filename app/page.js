import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-white py-10">
        <div className="font-bold text-5xl flex justify-center items-center">
          Get Me a Chai
          <img className="invertImg" src="/img/tea.gif" width={80} alt="" />
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-[2px] opacity-15"></div>
      <div className="text-white container mx-auto py-12">
        <h2 className="text-3xl text-center py-2 font-bold">
          Your fans can buy you a chai
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item p-5 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-lg p-1 m-1"
              width={80}
              src="/img/man.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help</p>
            <p>Fans are available to help you</p>
          </div>
          <div className="item p-5 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-lg p-1 m-1"
              width={80}
              src="/img/coin.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help</p>
            <p>Fans are available to help you</p>
          </div>
          <div className="item p-5 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-lg p-1 m-1"
              width={80}
              src="/img/group.gif"
              alt=""
            />
            <p className="font-bold ">Fans want to help</p>
            <p>Fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-[2px] opacity-15"></div>
      <div className="text-white container mx-auto py-12">
        <h2 className="text-3xl text-center py-2 font-bold mb-5">
          Learn more About us
        </h2>
        <div className="flex gap-5 justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ojuUnfqnUI0?si=vrLPybFsJtJieEMF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
