import React, { useState } from "react";
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
} from "tw-elements-react";

export default function Content1() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button className='font-bold mt-5' onClick={() => setShowModal(true)}>Learn More...</button>

            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} scrollable>
                <TEModalDialog size="xl" className="rounded-lg">
                    <TEModalContent className="!bg-black/80">
                        <TEModalHeader className="!border-0">
                            {/* <!--Modal title--> */}
                            <h5 className="text-xl leading-normal text-white font-semibold">
                                Why Invest in Crypto?
                            </h5>
                            {/* <!--Close button--> */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </TEModalHeader>
                        {/* <!--Modal body--> */}
                        <TEModalBody className="flex flex-col gap-4 p-12">
                            <p>
                                Investing in crypto assets is not just about seeking financial gain; it's about embracing transformative technology that promises to reshape industries and empower individuals worldwide. At its core, blockchain technology, the fundamental foundation of cryptocurrencies, revolutionizes how transactions are recorded, verified, and executed. Its decentralized nature ensures transparency, immutability, and security, making it a disruptive force in sectors ranging from finance and supply chains to healthcare and governance.
                            </p>
                            <p>
                                Furthermore, the dynamic nature of the crypto market provides ample opportunities for savvy investors to capitalize on emerging trends, innovative projects, and evolving market dynamics. While volatility remains a characteristic feature of the crypto space, it also presents opportunities for astute investors to navigate and profit from market fluctuations.
                            </p>
                            <p>In addition to financial incentives, investing in crypto assets aligns with broader societal shifts towards decentralization, democratization, and financial inclusion. By participating in the crypto economy, investors contribute to the ongoing evolution of a fairer and more accessible financial ecosystem, transcending geographical boundaries and traditional entry barriers.</p>
                            <p>In conclusion, investing in crypto assets represents more than just a financial decision - it is a commitment to technological advancement, innovation, and financial democratization. By embracing this nascent asset class, investors position themselves at the forefront of a transformative movement that promises to redefine the future of money and finance.</p>
                        </TEModalBody>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div >
    );
}