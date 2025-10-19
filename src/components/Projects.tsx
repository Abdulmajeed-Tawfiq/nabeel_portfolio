import Lottie from "lottie-react"
import { Button } from "./ui/button"
import heroAnimation from "../../public/lotiFiles/mobile-animation-3.json";

function Portfolio() {
  return (
    <div id="portfolio" className="relative flex w-[90%] ms-20 bg-gray-900 text-white max-nlg:w-[80vw] max-nlg:m-auto max-lg:flex-col">
      <div className="flex-[55%] mt-16 flex flex-col items-center text-center gap-10 max-lg:mt-3">
        <div className="text-5xl max-lg:text-2xl">
          <h2>NABEEL AL GEFARY</h2>
          <h2 className="text-2xl mt-4 text-mainColor max-lg:text-xl">Flutter Developer 📱</h2>
        </div>

        <p className="text-2xl max-lg:text-xl">A passionate Mobile Developer specializing in Flutter and creating seamless, user-friendly apps for iOS and Android. With a strong background in building efficient and scalable mobile solutions, I thrive on solving challenges and delivering innovative digital experiences. 🚀</p>
      </div>
      <div className="flex-[45%]">
        <img src="/images/phone.svg" alt="" />
      </div>
    </div>
  )
}

export default Portfolio