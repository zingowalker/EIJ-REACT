

import React from "react";

const Testimonials = () => {
  return (
    <>
      <section>
        <h2 className="text-2xl leading-6 text-gray-800 text-center px-4 mt-10">Testimonials</h2>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">Excellent Experience with Eco India Journeys.. We booked package for leh ladakh with Mr. Dorje.He planned our trip in precise manner and managed our all requirements in limited days.He provided the best hotel and good driver. I shall not forget to mention that he shown us route from Directly from Nubra to pangong, which has saved lot of our time and efforts to go back to leh and one extra day which other agents could not do. We had a very excellent sightseeing experience. Driver was extremely informative. He certainly enhanced our sightseeing experience. Hotel was having best services and great restaurant. brao Eco India Journeys .. Definitely best and recommendable services... We visited leh during september 2015.</p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              {/* <img src="" alt="profile pictre" className="w-12 h-12" /> */}
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tejas Shah</p>
              <p className="text-base leading-4 text-center text-gray-600">India</p>
            </div>
          </div>
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">Eco India Journeys, in my opinion it's the best Tour Company in Ladakh, I ve known the Owner and Manager Tsetan for a long time and thanks to his knowledge and experience my trip in Ladakh has been marvelous, Tsetan planned my trip so well, he's very efficient and he definitely payed an eye to every little detail of my trip that I ve felt very well looked after and in very safe hands!!! I would highly recommend Eco India Journeys to anyone interested in visiting Ladakh and beyond, I'm already planning my next trip with this Tour company.......Thank you to everybody working at Eco India Journeys........ See you again!!!!
                </p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              {/* <img src="https://i.ibb.co/8BLjmqz/avatar-2.png" alt="profile pictre" className="w-12 h-12" /> */}
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Genghis Khaan</p>
              <p className="text-base leading-4 text-center text-gray-600">England</p>
            </div>
          </div>
          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">Without any doubts, we warmly recommend this eco-friendly travel agency led by his dynamic and enthusiastic boss Tsetan!!Always ready to help, he will do his best to please you and to make you feel comfortable!!! The best way to discover this amazing country, the nice local people and the beautiful landscapes!!
                </p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img src="./images/dep.jpg" alt="profile picture" className="w-12 h-12 rounded-full" />
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Daphnee Smulders</p>
              <p className="text-base leading-4 text-center text-gray-600">Belgium</p>
            </div>
          </div>

          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">I had a great time. Tsetan planned the week meticulously based on my brief. Lots of smaller details and precautions were planned. It was a safe and fun trip. Plan to do this again.
                </p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              {/* <img src="https://i.ibb.co/y0KCX7p/avatar-3.png" alt="profile picture" className="w-12 h-12" /> */}
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Sanjay Duda</p>
              <p className="text-base leading-4 text-center text-gray-600">India</p>
            </div>
          </div>

          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">You really can't go wrong in choosing Eco India! Contact Tsetan and plan your trip in Ladakh! They're friendly, hospitable, and knowledgeable. I simply walked into the office in Leh and found myself at home!
                </p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img src="./images/jenin.jpg" alt="profile picture" className="w-12 h-12 rounded-full" />
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Janine ward</p>
              <p className="text-base leading-4 text-center text-gray-600">USA</p>
            </div>
          </div>

          <div>
            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-blue-500 cursor-pointer shadow-md md:p-12 p-6">
              <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="xl:w-80 text-base leading-normal text-center mt-4">Excellent service provided for us, would recommend anyone going to Leh to go with Eco India Journeys, they've the best tour guides ever!!!
                </p>
              </div>
              <div className="text-white group-hover:text-blue-400 absolute bottom-0 -mb-6">
                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dd)">
                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                  </g>
                  <defs>
                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img src="./images/venissa.jpg" alt="profile picture" className="w-12 h-12 rounded-full" /> 
              <p className="text-base font-semibold leading-4 my-2 text-gray-800">Vanessa O’ Brien</p>
              <p className="text-base leading-4 text-center text-gray-600">Ireland</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
