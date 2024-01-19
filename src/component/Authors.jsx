import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Authors() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
    <div className="bg-[url('http://wallup.net/wp-content/uploads/2016/01/129462-3D-simple_background.jpg')]">
  

   <center> <h1 style={{fontSize:"90px"}}>Authors</h1></center>
   <br />
  
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
            <li>
              <img
                src="https://www.writersdigest.com/.image/t_share/MTcxMDY5MzE5OTYyMzcyMDgx/image-placeholder-title.jpg"
                className="m-auto h-[340px] w-[400px] max-w-full"
              />
              {/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://www.writersdigest.com/.image/t_share/MTcxMDY5MzE5OTYyMzcyMDgx/image-placeholder-title.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Author Name:</h1>
    <br />
    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>View Books</span>
</button>
  </div>
</div> */}

            </li>
            <li>
              <img
                src="https://toptenfamous.com/wp-content/uploads/2021/05/3671-1024x1024.jpg"
                className="m-auto h-[340px] w-[400px] max-w-full"
              />
               {/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://toptenfamous.com/wp-content/uploads/2021/05/3671-1024x1024.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Author Name:</h1>
    <br />
    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>View Books</span>
</button>
  </div>
</div> */}

            </li>
            <li>
              <img
                src="https://makingdifferent.com/wp-content/uploads/2014/04/Arundhati-Roy-Writer.jpg"
                className="m-auto h-[340px] w-[400px] max-w-full"
              />
            
            {/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://toptenfamous.com/wp-content/uploads/2021/05/3671-1024x1024.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Author Name:</h1>
    <br />
    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>View Books</span>
</button>
  </div>
</div> */}
            </li>
            <li>
              <img
                src="https://whatstheirnetworth.com/wp-content/uploads/2021/03/Eiichiro-Oda-Worth.jpg"
                className="m-auto h-[340px] w-[400px] max-w-full"
              />

{/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://toptenfamous.com/wp-content/uploads/2021/05/3671-1024x1024.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Author Name:</h1>
    <br />
    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>View Books</span>
</button>
  </div>
</div> */}
            </li>
            <li>
              <img
                src="https://c.tadst.com/gfx/750x500/authors-day-fun.jpg"
                className="m-auto h-[340px] w-[400px] max-w-full"
              />


                       {/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://toptenfamous.com/wp-content/uploads/2021/05/3671-1024x1024.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
    />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">Author Name:</h1>
    <br />
    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg focus-visible:outline-none whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>View Books</span>
</button>
  </div>
</div> */}
            </li> 
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
      <br />
      <br />
      <br />
      <br />
      </div>
    </>
  )
}