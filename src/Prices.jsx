import React, { useEffect, useState } from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts';

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
        uv: 1450,
        pv: 7600,
        amt: 2500,
    },
    {
        name: 'Page B',
        uv: 2950,
        pv: 1200,
        amt: 3050,
    },
    {
        name: 'Page C',
        uv: 3950,
        pv: 8900,
        amt: 3300,
    },
    {
        name: 'Page D',
        uv: 1850,
        pv: 4200,
        amt: 2700,
    },
    {
        name: 'Page E',
        uv: 4500,
        pv: 5300,
        amt: 4100,
    },
    {
        name: 'Page F',
        uv: 2700,
        pv: 3100,
        amt: 2000,
    },
    {
        name: 'Page G',
        uv: 3850,
        pv: 8100,
        amt: 3750,
    },
];
const doge = [
    {
        name: 'Page A',
        uv: 2350,
        pv: 1500,
        amt: 3200,
    },
    {
        name: 'Page B',
        uv: 4700,
        pv: 6300,
        amt: 2100,
    },
    {
        name: 'Page C',
        uv: 1950,
        pv: 3400,
        amt: 2800,
    },
    {
        name: 'Page D',
        uv: 3400,
        pv: 4200,
        amt: 2300,
    },
    {
        name: 'Page E',
        uv: 1650,
        pv: 2900,
        amt: 3600,
    },
    {
        name: 'Page F',
        uv: 2950,
        pv: 7800,
        amt: 2600,
    },
    {
        name: 'Page G',
        uv: 4000,
        pv: 5200,
        amt: 1900,
    }
];

export default function Prices() {
    const [chartPriceBtc, setChartPriceBtc] = useState(Bullish);
    const [chartPriceEth, setChartPriceEth] = useState(Bullish);
    const [chartPriceDoge, setChartPriceDoge] = useState(Bullish);


    useEffect(() => {
        const updatePrices = () => {
            setChartPriceBtc(Math.random() < 0.5 ? Bullish : Bearish);
            setChartPriceEth(Math.random() < 0.5 ? Bullish : Bearish);
            setChartPriceDoge(Math.random() < 0.5 ? Bullish : Bearish);
        };

        const interval = setInterval(updatePrices, Math.random() * 1500 + 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="col card-header grid grid-cols-2 items-center relative">
                <a href="" className='absolute bg-gray-400 bg-opacity-30 p-3  text-white top-3 right-3 rounded-full'>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.6665 1C2.6665 0.447715 3.11422 0 3.6665 0L11.6665 5.36442e-07C12.2188 5.36442e-07 12.6665 0.447716 12.6665 1V9C12.6665 9.55229 12.2188 10 11.6665 10C11.1142 10 10.6665 9.55229 10.6665 9V3.41421L2.37361 11.7071C1.98309 12.0976 1.34992 12.0976 0.959397 11.7071C0.568873 11.3166 0.568873 10.6834 0.959397 10.2929L9.25229 2L3.6665 2C3.11422 2 2.6665 1.55228 2.6665 1Z" fill="white" />
                    </svg>
                </a>
                <div className="col">
                    <div className="flex items-center gap-2 mb-2">
                        <b className='text-xl'>Bitcoin</b>
                        {chartPriceBtc}
                    </div>
                    <p className='text-sm'>The first decentralized digital currency, created in 2009 by Satoshi Nakamoto.</p>
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
                        {chartPriceEth}
                    </div>
                    <p className='text-sm'>Blockchain platform enabling decentralized application development through smart contracts.</p>
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
                        {chartPriceDoge}
                    </div>
                    <p className='text-sm'>Cryptocurrency born from the "Doge" meme in 2013 for tipping and small transactions.</p>
                </div>
                <ResponsiveContainer width="100%" height="100%" aspect={1}>
                    <LineChart width={100} height={100} data={doge}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
