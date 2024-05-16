import React, { useState } from 'react'
import './App.css'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { AdvancedChart } from 'react-tradingview-embed';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TECollapse } from "tw-elements-react";

const bitcoin = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const etherium = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const doge = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function Bullish() {
  return (
    <div className="bg-green-700 rounded-full p-1 bg-opacity-65">
      <svg
        fill="#000000"
        width="13px"
        height="13px"
        viewBox="0 0 1.2 1.2"
        id="up"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="primary"
          d="m0.986 0.464 -0.35 -0.35a0.05 0.05 0 0 0 -0.071 0l-0.35 0.35a0.05 0.05 0 0 0 0.071 0.071L0.55 0.271V1.05a0.05 0.05 0 0 0 0.1 0V0.271l0.265 0.265a0.05 0.05 0 0 0 0.071 0 0.05 0.05 0 0 0 0 -0.071"
          style={{ fill: "#ffffff" }}
        />
      </svg>
    </div>
  )
}
export function Bearish() {
  return (
    <div className="bg-red-700 rounded-full p-1 bg-opacity-65">
      <svg
        fill="#000000"
        width="13px"
        height="13px"
        viewBox="0 0 1.2 1.2"
        id="down"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
      >
        <path
          id="primary"
          d="M0.986 0.664a0.05 0.05 0 0 0 -0.071 0L0.65 0.929V0.15a0.05 0.05 0 0 0 -0.1 0v0.78l-0.265 -0.265a0.05 0.05 0 0 0 -0.071 0.071l0.35 0.35a0.05 0.05 0 0 0 0.071 0l0.35 -0.35a0.05 0.05 0 0 0 0 -0.071"
          style={{ fill: "#ffffff" }}
        />
      </svg>
    </div>
  )
}

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
          <div className="flex gap-10" id="app-menu">
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Home</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Market</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Exchange</a>
            <a href="#" className="text-white hover:underline hover:underline-offset-8 hover:transition-all hover:ease-in hover:duration-200 decoration-purple-500">Trade</a>
          </div>
          <button className="bg-primary text-white bg-purple-700  font-semibold py-2 px-5 rounded-md">Register</button>
        </nav>

        <div className="grid grid-cols-2 items-center z-50">
          <div className="col">
            <h1 className="text-white font-black text-[90px] leading-tight">Welcome to Finanza.</h1>
            <p className="text-white">
              Discover Finanza, where finance meets crypto. Empower your journey with real-time insights and
              personalized portfolio
              management. Unlock the potential of crypto finance with us.
            </p>
            <div className="flex gap-8 mt-4">
              <button className="border border-white rounded-full py-3 px-7 text-white font-semibold">
                Invest Now
              </button>
              <button type="button" className="flex items-center justify-center w-44 text-white bg-black rounded-lg h-14 border border-white">
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
          <div className="col">
            <img src="assets/Hero.png" alt="" />
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        <section className="grid grid-cols-3 gap-5">
          <div className="col card-header grid grid-cols-2 items-center relative">
            <a href="" className='absolute bg-gray-400 bg-opacity-30 p-3  text-white top-3 right-3 rounded-full'>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6665 1C2.6665 0.447715 3.11422 0 3.6665 0L11.6665 5.36442e-07C12.2188 5.36442e-07 12.6665 0.447716 12.6665 1V9C12.6665 9.55229 12.2188 10 11.6665 10C11.1142 10 10.6665 9.55229 10.6665 9V3.41421L2.37361 11.7071C1.98309 12.0976 1.34992 12.0976 0.959397 11.7071C0.568873 11.3166 0.568873 10.6834 0.959397 10.2929L9.25229 2L3.6665 2C3.11422 2 2.6665 1.55228 2.6665 1Z" fill="white" />
              </svg>
            </a>
            <div className="col">
              <div className="flex items-center gap-2 mb-2">
                <b className='text-xl'>Bitcoin</b>
                <Bullish />
              </div>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque! Ullam qui quia eum</p>
            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
              <LineChart width={100} height={100} data={bitcoin}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col card-header grid grid-cols-2 items-center relative">
            <a href="" className='absolute bg-gray-400 bg-opacity-30 p-3  text-white top-3 right-3 rounded-full'>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6665 1C2.6665 0.447715 3.11422 0 3.6665 0L11.6665 5.36442e-07C12.2188 5.36442e-07 12.6665 0.447716 12.6665 1V9C12.6665 9.55229 12.2188 10 11.6665 10C11.1142 10 10.6665 9.55229 10.6665 9V3.41421L2.37361 11.7071C1.98309 12.0976 1.34992 12.0976 0.959397 11.7071C0.568873 11.3166 0.568873 10.6834 0.959397 10.2929L9.25229 2L3.6665 2C3.11422 2 2.6665 1.55228 2.6665 1Z" fill="white" />
              </svg>
            </a>
            <div className="col">
              <div className="flex items-center gap-2 mb-2">
                <b className='text-xl'>Etherium</b>
                <Bearish />
              </div>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque! Ullam qui quia eum</p>
            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
              <LineChart width={100} height={100} data={etherium}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col card-header grid grid-cols-2 items-center relative">
            <a href="" className='absolute bg-gray-400 bg-opacity-30 p-3  text-white top-3 right-3 rounded-full'>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6665 1C2.6665 0.447715 3.11422 0 3.6665 0L11.6665 5.36442e-07C12.2188 5.36442e-07 12.6665 0.447716 12.6665 1V9C12.6665 9.55229 12.2188 10 11.6665 10C11.1142 10 10.6665 9.55229 10.6665 9V3.41421L2.37361 11.7071C1.98309 12.0976 1.34992 12.0976 0.959397 11.7071C0.568873 11.3166 0.568873 10.6834 0.959397 10.2929L9.25229 2L3.6665 2C3.11422 2 2.6665 1.55228 2.6665 1Z" fill="white" />
              </svg>
            </a>
            <div className="col">
              <div className="flex items-center gap-2 mb-2">
                <b className='text-xl'>Doge Coin</b>
                <Bullish />
              </div>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque! Ullam qui quia eum</p>
            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={1}>
              <LineChart width={100} height={100} data={doge}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className='grid grid-cols-2 gap-2 items-center'>
          <div className="col flex justify-center">
            <img src="/assets/Blockchain.png" alt="" />
          </div>
          <div className="col">
            <h2 className='text-4xl font-bold mb-4'>#Lorem Ipsum Sit Dolor Amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui aliquam molestie at ut ipsum. Et ultrices pharetra turpis dignissim. Augue id lobortis sed tempor elit sed sagittis libero. Neque at cras massa commodo nibh nisi volutpat at sollicitudin.Neque at cras massa commodo nibh nisi volutpat at sollicitudin.
            </p>
            <button className='font-bold mt-5'>Learn More...</button>
          </div>
        </section>

        <section className='grid grid-cols-2 gap-2 items-center'>
          <div className="col">
            <h2 className='text-4xl font-bold mb-4'>#Lorem Ipsum Sit Dolor Amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui aliquam molestie at ut ipsum. Et ultrices pharetra turpis dignissim. Augue id lobortis sed tempor elit sed sagittis libero. Neque at cras massa commodo nibh nisi volutpat at sollicitudin.Neque at cras massa commodo nibh nisi volutpat at sollicitudin.
            </p>
            <button className='font-bold mt-5'>Learn More...</button>
          </div>
          <div className="col flex justify-center">
            <img src="/assets/Etherium.png" alt="" />
          </div>
        </section>
        <section className='mt-40'>
          <AdvancedChart widgetProps={{ "theme": "dark" }} />
        </section>

        <section className='mt-48'>
          <h2 className='text-center text-2xl font-semibold'>What they say?</h2>
        </section>

        <section className='mt-48'>
          <div className="grid grid-cols-3 bg-[#200049] p-14 rounded-lg gap-12 backdrop-filter backdrop-blur-lg bg-opacity-40 relative">
            <div className="p-10">
              <h3 className='text-xl font-bold'><span className='text-[3rem]'>$19 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Starter</h4>
              <p className='my-2'>Unleash the power of automation.</p>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
              </ul>

              <button className='bg-gray-500 bg-opacity-25 font-semibold  mt-16 w-full p-3 rounded-full'>Chose Plan</button>
            </div>
            <div className="p-10">
              <h3 className='text-xl font-bold'><span className='text-[3rem]'>$19 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Starter</h4>
              <p className='my-2'>Unleash the power of automation.</p>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
              </ul>

              <button className='bg-gray-500 bg-opacity-25 font-semibold  mt-16 w-full p-3 rounded-full'>Chose Plan</button>
            </div>
            <div className="p-10 py-20 bg-[#231D4F] rounded-xl backdrop-filter backdrop-blur-2xl bg-opacity-80 relative shadow-xl shadow-purple-400 -mt-24">
              <div className="bg-purple-500 bg-opacity-20 font-semibold p-3 text-sm rounded-tr-xl rounded-bl-xl text-white w-1/2 text-center right-0 absolute top-0">MOST POPULAR</div>
              <h3 className='text-xl font-bold mt-7'><span className='text-[3rem]'>$19 </span>/Month</h3>
              <h4 className='text-xl font-semibold mt-5'>Starter</h4>
              <p className='my-2'>Automation plus enterprise-grade features.</p>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
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

                  Multi-step Zaps</li>
              </ul>
              <button className='bg-purple-400 bg-opacity-90 font-semibold  p-3 rounded-full mt-16 w-full'>Choose Plan</button>
            </div>

          </div>
        </section>

        <section className='mt-24'>
          <div id="accordionExample">
            <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id="headingOne">
                <button
                  className={`${activeElement === "element1" &&
                    `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                  type="button"
                  onClick={() => handleClick("element1")}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                  <span
                    className={`${activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === "element1"}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4">
                  <strong>This is the first item's accordion body.</strong> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                  rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                  ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                  ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                  metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                  Curabitur non sollicitudin neque.
                </div>
              </TECollapse>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="text-white py-10">
          <div class="container mx-auto">
            <div class="flex">
              <div class="w-7/12">
                <h1 class="font-bold text-3xl">Finanza.</h1>
                <p class="text-sm">
                  Smartly manage your finances and crypto investment
                </p>
                <div class="addres">
                  <h4 class="mt-4 font-bold">Jakarta</h4>
                  <p class="text-sm">
                    Gedung Millennium Centennial Center Lt.2, Jl. Jend. Sudirman No.
                    Kav 25, Kuningan Jakarta Selatan 2920.
                  </p>
                  <h4 class="mt-4 font-bold">Bali</h4>
                  <p class="text-sm">
                    Jl. Sunset Road No. 48 a-b, Legian, Kuta, Kabupaten Badung, Bali
                    8036l.
                  </p>

                  <p class="text-sm my-4">
                    Tamora Square, Jl. subak Sari l3, Desa Tibubeneng, Kec. Kuta
                    Utara, Kabupaten Badung, Bali 80361.
                  </p>
                </div>
                <div class="contact flex gap-3 ml-2">
                  <a href="#">
                    <FaFacebook className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaTwitter className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaYoutube className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaInstagram className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaLinkedin className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaGithub className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                  <a href="#">
                    <FaTwitch className='w-7 h-7 bg-gray-700 hover:transition-all ease-in text-white p-2 rounded-full hover:bg-purple-600' />
                  </a>
                </div>
              </div>
              <div class="footer-menu flex mt-2 gap-8 w-5/12">
                <div class="p-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">Perusahaan</a>
                    </li>
                    <li><a href="#" class="hover:underline">Hubungi kami</a></li>
                    <li>
                      <a href="#" class="hover:underline">Program afiliasi</a>
                    </li>

                    <li><a href="#" class="hover:underline">Bantuan</a></li>
                  </ul>
                </div>
                <div class="p-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">Produk</a>
                    </li>
                    <li><a href="# " class="hover:underline">Academy</a></li>
                    <li><a href="#" class="hover:underline">OTC</a></li>
                  </ul>
                </div>
                <div class="p-4">
                  <ul class="text-sm grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">Informasi</a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">Syarat dan ketentuan</a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">Kebijakan privasi</a>
                    </li>
                    <li><a href="#" class="hover:underline">API</a></li>
                    <li><a href="#" class="hover:underline">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-title">
              <p class="text-sm w-[900px] my-6">
                Perdagangan aset kripto merupakan aktivitas berisiko tinggi. Harga
                aset kripto sangat fluktuatif, di mana harga dapat berubah secara
                signifikan dari waktu ke waktu Harap lakukan riset sebelum membuat
                keputusan untuk membeli atau menjual aset kripto.
                <span class="font-bold">Finanza</span> tidak memaksa pengguna untuk
                membeli, menjual, atau menjadikan aset kripto sebagai investasi atau
                aksi untuk mencari keuntungan. Semua keputusan dalam bertransaksi
                aset kripto merupakan keputusan independen oleh pengguna.
              </p>
              <div class="text-xs">
                Copyright @ 2024 PT Finanza Investama Indonesia. All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="glow-decorator1 -z-10"></div>
      <div className="glow-decorator2 -z-10"></div>
      <div className="glow-decorator3 -z-10"></div>
    </>
  )
}
