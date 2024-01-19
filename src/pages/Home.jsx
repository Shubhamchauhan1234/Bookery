import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    
    <div className="relative w-full  ">
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8 bg-cover bg-[url('http://getwallpapers.com/wallpaper/full/b/5/8/165930.jpg')]">
        <div className="relative mx-auto max-w-2xl py-24 ">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl ">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
         
              </defs>
            </svg>
          </div>
          
           
          <div className="text-center">
         
  

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-[44px] text-decoration-line: underline">
             Discover your Books
            </h1>
            <br />
            <pre className="mt-6 text-lg leading-8 text-red-900 text-[30px] font-style: italic">
             We have best quality of books.
             <br /> 
             <br />
             All kind of books are avilable here.
             <br />
             <br />
             You can buy according to your taste.

            </pre>
<br />
<br />
<br />
<br />

            <div className="mt-10 flex items-center justify-center gap-x-2">

              <button>
                <Link
                  to="/Books"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Shop Now
                  </span>
                </Link>
              </button>
              </div>
              {/* <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button> */}
            </div>
          </div>
          <br />
          <br />
          <br />
         
          
        </div>
      </div>
    
  );
}
