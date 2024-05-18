import React, { useEffect, useState } from 'react'
import './App.css'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { AdvancedChart } from 'react-tradingview-embed';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TECollapse } from "tw-elements-react";
import Prices from './Prices';


export default function App() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <header className="container mx-auto px-auto">
        <nav className="flex justify-between py-4 items-center">
          <h1 className="icon-app text-white font-semibold text-3xl">
            Finanza.
          </h1>
          <div className="hidden gap-10  md:flex" id="app-menu">
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Home</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Market</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Exchange</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Trade</a>
          </div>
          <button className="text-white bg-purple-700  font-semibold py-2 px-5 rounded-md">Register</button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center z-50">
          <div className="col order-2 md:order-1">
            <h1 className="text-white font-black text-4xl md:text-[90px] leading-tight">Welcome to Finanza.</h1>
            <p className="text-white">
              Discover Finanza, where finance meets crypto. Empower your journey with real-time insights and
              personalized portfolio
              management. Unlock the potential of crypto finance with us.
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-8 mt-4">
              <button className="border border-white rounded-full py-3 px-7 text-white font-semibold hover:bg-main hover:border-main transition-all ease-in duration-100">
                Invest Now
              </button>
              <button type="button" className="flex items-center justify-center md:w-44 w-full text-white bg-black rounded-lg h-14 border border-white">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="25">
                    <path fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                    </path>
                    <path fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                    </path>
                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                    </path>
                    <path fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                    </path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">
                    GET IT ON
                  </div>
                  <div className="-mt-1 font-sans text-lg font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="col order-1 md:order-2">
            <img src="assets/Hero.png" alt="" />
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        <Prices />
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
          <div className="col flex justify-center">
            <img src="/assets/Blockchain.png" alt="" />
          </div>
          <div className="col">
            <h2 className='text-4xl font-bold mb-4'>Why Invest in Crypto?</h2>
            <p>

              Investing in crypto assets can be an alternative to traditional investments. With the increasing growth of the crypto market, investing in crypto can be a good step to diversify a portfolio.
            </p>
            <button className='font-bold mt-5'>Learn More...</button>
          </div>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 items-center '>
          <div className="col order-2 md:order-1">
            <h2 className='text-4xl font-bold mb-4'>What Are The Advantages of Finanza for #FutureAssets?</h2>
            <p>

              Finanza offers the best prices in the market and allows you to transact anytime, 24 hours non-stop. Not only that, you will also feel comfortable and safe when buying and selling Bitcoin and other crypto assets.
            </p>
            <button className='font-bold mt-5'>Learn More...</button>
          </div>
          <div className="col flex justify-center order-1 md:order-2">
            <img src="/assets/Etherium.png" alt="" />
          </div>
        </section>
        <section className='mt-32'>
          <AdvancedChart widgetProps={{ "theme": "dark" }} />
        </section>

        <section className='mt-32'>
          <h2 className='text-center text-3xl font-semibold mb-16'>Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#200049] p-4 md:p-14 rounded-lg gap-12 backdrop-filter backdrop-blur-lg bg-opacity-40 relative items-center">
            <div className="p-10 hover:-mt-10 transition-all ease-in">
              <h3 className='text-xl font-bold'><span className='text-[3rem]'>$9.99 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Bronze package</h4>
              <p className='my-2'>Benefits :</p>
              <ul className='flex flex-col gap-2'>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Access to basic trading platform.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Real-time market updates.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Basic technical analysis.</li>
              </ul>

              <button className='bg-gray-500  hover:bg-main hover:border-main transition-all ease-in duration-100 bg-opacity-25 font-semibold  mt-16 w-full p-3 rounded-full'>Chose Plan</button>
            </div>
            <div className="p-10 hover:-mt-10 transition-all ease-in">
              <h3 className='text-xl font-bold'><span className='text-[3rem]'>$19.9 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Silver package</h4>
              <p className='my-2'>Benefits :</p>
              <ul className='flex flex-col gap-2'>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  All features from the Bronze package.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Access to more trading pairs.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Trading signals and recommendations.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Customer support via email and live chat.</li>
              </ul>

              <button className='bg-gray-500 hover:bg-main hover:border-main transition-all ease-in duration-100 bg-opacity-25 font-semibold  mt-16 w-full p-3 rounded-full'>Chose Plan</button>
            </div>
            <div className="p-3 md:p-10 py-20 bg-[#231D4F] rounded-xl backdrop-filter backdrop-blur-2xl bg-opacity-80 relative shadow-xl shadow-purple-400 md:-mt-24">
              <div className="bg-purple-500 bg-opacity-20 font-semibold p-3 text-sm rounded-tr-xl rounded-bl-xl text-white w-1/2 text-center right-0 absolute top-0">MOST POPULAR</div>
              <h3 className='text-xl font-bold mt-7'><span className='text-[3rem]'>$29.9 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Gold package</h4>
              <p className='my-2'>Benefits :</p>
              <ul className='flex flex-col gap-2'>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  All features from the Silver package.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Advanced technical analysis and charting tools.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Exclusive training and webinars conducted by industry experts.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Priority access to new features and updates.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Dedicated account manager for personalized assistance.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Access to premium research reports and market insights.</li>
                <li className='flex gap-2 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffff"
                    className="bg-[#5243C2] rounded-full p-1"
                    data-name="Flat Color"
                    viewBox="0 0 0.9 0.9"
                  >
                    <path
                      fill="#ffff"
                      d="M.375.675A.037.037 0 01.348.664L.16.476A.037.037 0 01.213.423l.161.161.311-.311a.037.037 0 11.053.053L.401.663a.037.037 0 01-.026.012"
                    ></path>
                  </svg>

                  Invitation to exclusive networking events and conferences.</li>
              </ul>
              <button className='bg-main bg-opacity-90 font-semibold  p-3 rounded-full mt-16 w-full'>Choose Plan</button>
            </div>

          </div>
        </section>

        <section className='mt-20 p-0 md:p-20 bg-black bg-opacity-15 rounded-lg backdrop-filter backdrop-blur-lg'>
          <div id="accordionExample">
            <div className="my-4">
              <h2 className="mb-0" id="headingOne">
                <button
                  className={`${activeElement === "element1" &&
                    `[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center rounded-t-[15px] px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white border-b font-bold`} type="button" onClick={() => handleClick("element1")} aria-expanded="true" aria-controls="collapseOne">
                  What is Cryptocurrency?
                  <span
                    className={`${activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element1"} className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <strong>Cryptocurrency Explained:</strong> Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies operate on technology called blockchain, a decentralized system spread across many computers that manages and records transactions. One of the most well-known cryptocurrencies is Bitcoin, but there are thousands of others, each with unique features and uses. Cryptocurrencies offer benefits such as reduced transaction fees, increased privacy, and potential for high returns on investments, but they also come with risks including high volatility and regulatory uncertainty.
                </div>
              </TECollapse>
            </div>

            <div className="my-4">
              <h2 className="mb-0" id="headingTwo">
                <button
                  className={`${activeElement === "element2" &&
                    `[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white border-b font-bold`} type="button" onClick={() => handleClick("element2")} aria-expanded="true" aria-controls="collapseTwo">
                  How Does Blockchain Work?
                  <span
                    className={`${activeElement === "element2"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element2"} className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <strong>The Mechanics of Blockchain:</strong> A blockchain is a distributed ledger that is completely open to anyone. They have an interesting property: once data has been recorded, it becomes very difficult to change it. Blockchain records transactions in 'blocks' and then links them together in a 'chain' through cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. Due to its design, blockchain is inherently resistant to modification of the data. This provides security and trust without the need for a central authority.
                </div>
              </TECollapse>
            </div>

            <div className="my-4">
              <h2 className="mb-0" id="headingThree">
                <button
                  className={`${activeElement === "element3" &&
                    `[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white border-b font-bold`} type="button" onClick={() => handleClick("element3")} aria-expanded="true" aria-controls="collapseThree">
                  Benefits and Risks of Cryptocurrency
                  <span
                    className={`${activeElement === "element3"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element3"} className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <strong>Pros and Cons:</strong> Cryptocurrency offers numerous benefits, including lower transaction fees compared to traditional online payment methods, enhanced security due to cryptographic protocols, and the ability to operate independently of a central bank. However, cryptocurrencies also pose significant risks. Their values can be extremely volatile, making them a risky investment. Additionally, the lack of regulation and potential for use in illegal activities, such as money laundering, pose challenges. It's crucial for investors to thoroughly research and understand both the potential rewards and risks before investing in cryptocurrencies.
                </div>
              </TECollapse>
            </div>

            <div className="my-4">
              <h2 className="mb-0" id="headingFour">
                <button
                  className={`${activeElement === "element4" &&
                    `[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white border-b font-bold`} type="button" onClick={() => handleClick("element4")} aria-expanded="true" aria-controls="collapseFour">
                  Popular Cryptocurrencies
                  <span
                    className={`${activeElement === "element4"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element4"} className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <strong>Notable Cryptocurrencies:</strong> While Bitcoin is the most well-known and widely used cryptocurrency, there are many others that have gained popularity. Ethereum is notable for its smart contract functionality, allowing for decentralized applications. Ripple (XRP) is known for its use in real-time gross settlement systems, currency exchange, and remittance networks. Litecoin, often considered the silver to Bitcoin's gold, offers faster transaction times and a different hashing algorithm. Each of these cryptocurrencies has unique features and uses, contributing to the diversity of the cryptocurrency ecosystem.
                </div>
              </TECollapse>
            </div>

            <div className="my-4">
              <h2 className="mb-0" id="headingFive">
                <button
                  className={`${activeElement === "element5" &&
                    `[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white border-b font-bold`} type="button" onClick={() => handleClick("element5")} aria-expanded="true" aria-controls="collapseFive">
                  Future of Cryptocurrency
                  <span
                    className={`${activeElement === "element5"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </button>
              </h2>
              <TECollapse show={activeElement === "element5"} className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <strong>Looking Ahead:</strong> The future of cryptocurrency is filled with potential but also uncertainty. Innovations such as decentralized finance (DeFi), non-fungible tokens (NFTs), and improvements in blockchain technology could further revolutionize the financial world. Governments and regulatory bodies are increasingly looking at ways to regulate and integrate cryptocurrencies into the traditional financial system. While challenges such as regulatory hurdles, security concerns, and market volatility remain, the continued development and adoption of cryptocurrency suggest it will play a significant role in the future of finance.
                </div>
              </TECollapse>
            </div>

          </div>
        </section>
      </main >

      <footer>
        <div class="text-white py-10">
          <div class="container mx-auto">
            <div class="md:flex">
              <div class="w-full md:w-7/12">
                <h1 class="font-bold text-3xl">Finanza.</h1>
                <p class="text-sm">
                  Smartly manage your finances and crypto investment
                </p>
                <div class="addres">
                  <h4 class="mt-4 font-bold">Jakarta</h4>
                  <p class="text-sm">
                    Millennium Centennial Center Building Lt.2, Jl. Jend.
                    Sudirman No. Kav 25, Kuningan South Jakarta 2920.
                  </p>
                  <h4 class="mt-4 font-bold">Bali</h4>
                  <p class="text-sm">
                    Jl. Sunset Road No. 48 a-b, Legian, Kuta, Kabupaten Badung,
                    Bali 8036l.
                  </p>

                  <p class="text-sm my-4">
                    Tamora Square, Jl. subak Sari l3, Desa Tibubeneng, Kec. Kuta
                    Utara, Kabupaten Badung, Bali 80361.
                  </p>
                </div>
                <div class="contact flex gap-3 ml-2">
                  <a href="#">
                    <FaFacebook className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaTwitter className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaYoutube className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaInstagram className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaGithub className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                  <a href="#">
                    <FaTwitch className="w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600" />
                  </a>
                </div>
              </div>
              <div class="md:flex mt-2 gap-8 w-full md:w-5/12">
                <div class="py-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">
                        Company
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-[16px] hover:underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Affiliate Program
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="py-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="# " class="hover:underline">
                        Academy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        OTC
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="py-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">
                        Information
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        API
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-title">
              <p class="text-sm  my-6">
                Trading cryptocurrencies is a high-risk activity. Cryptocurrency
                prices are highly volatile, where prices can change
                significantly over time. Please do your research before making a
                decision to buy or sell crypto assets.
                <span class="font-bold">Finanza</span> does not force users to
                buy, sell, or make crypto assets as an investment or action for
                profit. All decisions in crypto asset transactions are the
                decision of the user.
              </p>
              <div class="text-sm">
                Copyright @ 2024 PT Finanza Investama Indonesia. All Right
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="glow-decorator1 -z-10 w-screen"></div>
      <div className="glow-decorator2 -z-10 w-screen"></div>
      <div className="glow-decorator3 -z-10 "></div>
    </>
  )
}
