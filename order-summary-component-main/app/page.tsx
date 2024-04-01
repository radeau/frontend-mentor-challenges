import Image from "next/image";
import illustrationHero from '../images/illustration-hero.svg'
import iconMusic from '../images/icon-music.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10">
      <div className="rounded-2xl max-w-sm bg-white border border-gray-200 drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
        <Image 
          className="rounded-t-2xl" 
          src={illustrationHero}
          alt="hero" 
          width={400}
          height={50} 
        />
        <div className="flex flex-col items-center text-center mx-10 my-10">
          <div className="w-full">
            <h1 className="font-extrabold text-lg">Order Summary</h1>
            <p className="mt-3 text-xs">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          </div>  
          <div className="flex text-xs items-center my-5 w-full justify-evenly">
            <Image 
              className="" 
              src={iconMusic}
              alt="icon-music" 
              width={50}
              height={50} 
            />
            <p className="mx-2">Annual Plan</p>
            <p className="mx-2">$59.99/year</p>
            <a href="" className="underline">Change</a>
          </div>
          <div className="w-full flex flex-col">
            <button type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Proceed to Payment</button>
            <br />
            <a href="#" className="text-sm">Cancel Order</a>
          </div>
        </div>
      </div>
    </main>
  );
}
