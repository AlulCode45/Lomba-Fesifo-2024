import React from 'react'
import './App.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AdvancedChart } from 'react-tradingview-embed';

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
            <a href="" className='absolute bg-white p-3 bg-opacity-10 text-white top-3 right-3 rounded-full'>
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
            <a href="" className='absolute bg-white p-3 bg-opacity-10 text-white top-3 right-3 rounded-full'>
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
            <a href="" className='absolute bg-white p-3 bg-opacity-10 text-white top-3 right-3 rounded-full'>
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
          <div className="col flex justify-start">
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

      </main>

      <footer>
        <div class="text-white py-10">
          <div class="container mx-auto">
            <div class="flex">
              <div class="w-7/12">
                <h1 class="font-bold text-3xl">Finanza.</h1>
                <p class="text-[9px]">
                  smartly manage your finances and crypto investment
                </p>
                <div class="addres">
                  <h4 class="my-4">jakarta</h4>
                  <p class="text-[12px]">
                    Gedung Millennium Centennial Center Lt.2, Jl. Jend. Sudirman No.
                    Kav 25, Kuningan Jakarta Selatan 2920.
                  </p>
                  <h4 class="my-4">Bali</h4>
                  <p class="text-[12px]">
                    Jl. Sunset Road No. 48 a-b, Legian, Kuta, Kabupaten Badung, Bali
                    8036l.
                  </p>

                  <p class="text-[12px] my-4">
                    Tamora Square, Jl. subak Sari l3, Desa Tibubeneng, Kec. Kuta
                    Utara, Kabupaten Badung, Bali 80361.
                  </p>
                </div>
                <div class="contact flex gap-3 ml-2">
                  <a href="#">
                    <i
                      data-feather="facebook"
                      class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                    ></i></a
                  ><a href="#"
                  ><i
                    data-feather="twitter"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i></a
                  ><a href="#"
                  ><i
                    data-feather="youtube"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i></a
                  ><a href="#"
                  ><i
                    data-feather="instagram"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i></a
                  ><a href="#"
                  ><i
                    data-feather="linkedin"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i
                    ></a>
                  <a href="#"
                  ><i
                    data-feather="github"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i
                    ></a>
                  <a href="#"
                  ><i
                    data-feather="twitch"
                    class="w-7 h-7 bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                  ></i
                    ></a>
                </div>
              </div>
              <div class="footer-menu flex mt-2 gap-8 w-5/12">
                <div class="p-4">
                  <ul class="text-[12px] grid gap-2">
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
                  <ul class="text-[12px] grid gap-2">
                    <li>
                      <a href="#" class="text-[16px] hover:underline">Produk</a>
                    </li>
                    <li><a href="# " class="hover:underline">Academy</a></li>
                    <li><a href="#" class="hover:underline">OTC</a></li>
                  </ul>
                </div>
                <div class="p-4">
                  <ul class="text-[12px] grid gap-2">
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
              <p class="text-[10px] w-[900px] my-6">
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
    </>
  )
}
