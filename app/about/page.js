import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-12 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-8 text-lg">
          Get Me a Chai is a crowdfunding platform designed to help creators get the support they need from their fans and followers. Whether you're an artist, musician, writer, or any type of creator, our platform allows you to fund your projects and bring your ideas to life.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <img className="invertImg" src="/img/tea.gif" width={80} alt="Chai Image" />
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="mb-8 text-lg">
          Our mission is to empower creators by providing them with the tools and platform they need to bring their ideas to life with the help of their community.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Start Now
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-[2px] opacity-15 mb-12"></div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside  mb-8">
          <li className="mb-4"><span className="font-semibold">Empowerment:</span> We aim to empower creators to achieve their dreams.</li>
          <li className="mb-4"><span className="font-semibold">Community:</span> We believe in the power of community and collective support.</li>
          <li className="mb-4"><span className="font-semibold">Transparency:</span> We are committed to being transparent with our creators and supporters.</li>
        </ul>
      </div>
      <div className="bg-white h-[2px] opacity-15 mb-12"></div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Learn More About Us</h2>
        <div className="flex gap-5 justify-center items-center mx-auto w-[80vw] md:w-auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ojuUnfqnUI0?si=vrLPybFsJtJieEMF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
export const metadata = {
  title:"About | Get Me a Chai",
}