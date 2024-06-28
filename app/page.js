"use client"

import Image from "next/image";
import Link from "next/link";
import song from '../app/song.mp3'
import { useEffect, useState } from "react";

export default function Home() {

  const [isShowing, setIsShowing] = useState(true)
  const audio = new Audio(song)


  function play () {
    setIsShowing(false)
    audio.volume = 0.4;
    audio.loop = true;
    audio.play()
  }


  return (
      <main className="bg-black relative">
        <div className="relative max-w-[800px] h-screen m-auto bg-white p-[32px] text-center flex items-center justify-center">
            <div className="pb-[48px]">
              <h2 className="text-2xl mb-6">Majlis Perkahwinan</h2>
              <h1 className="mb-[24px] text-[60px] leading-[5rem]">Farisha<br/>&<br/>Amizar</h1>
              <div className="mb-[48px]">
                <hr />
                <p className="p-2">29 June 2024</p>
                <hr />
              </div>
              <Link target="_blank" href='https://photos.google.com/share/AF1QipMr84QTYNV3H6V2OfXv1tL52DpoPYSQsCL6CIejbvbpxqx9OIlxYVCdrCNB82x5dA?key=V3p3bXYzZ05tVElCQUVvY2NwSEZXS0ZDTzN0amx3'>
                <button className="text-lg animate-bounce p-2 bg-[#FFC7ED] rounded-md min-w-[150px] shadow-md hover:bg-[#FFC7ED60] hover:border hover:border-[#FFC7ED]  transition-all">Upload</button>
              </Link>
            </div>
            <div className="absolute top-0 right-0">
              <Image
                src="/top.png"
                alt="top"
                className=""
                width={200}
                height={24}
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image
                src="/bottom.png"
                alt="top"
                className=""
                width={300}
                height={24}
                priority
              />
            </div>
        </div>
        {isShowing && (
          <div className="bg-[#00000090] fixed left-0 top-0 h-screen w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-md text-center w-[300px]">
              <p className="mb-4 text-lg">You have been invited to the<br />Farisha & Amizar Wedding's Album</p>
              <button className="text-lg p-2 bg-[#FFC7ED] rounded-md min-w-[150px] shadow-md hover:bg-[#FFC7ED60] hover:border hover:border-[#FFC7ED]  transition-all" onClick={play}>Proceed</button>
            </div>
          </div>
        )}
      </main>
  );
}
