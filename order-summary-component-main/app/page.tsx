import Image from "next/image";
import illustrationHero from '../images/illustration-hero.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image 
          className="bg-teal-400" 
          src={illustrationHero}
          alt="hero" 
          width={400}
          height={220} 
        />
        <div className="p-5">
          <div className="">
            <h1 className="">Order Summary</h1>
            <p className="">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          </div>  
          <div className="flex">
            <p className="">Annual Plan</p>
            <p className="">$59.99/year</p>
            <a href="" className="">Change</a>
          </div>
          <div className="">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blue</button>
            <br />
            <a href="#">Cancel Order</a>
          </div>
        </div>
      </div>
    </main>
  );
}
