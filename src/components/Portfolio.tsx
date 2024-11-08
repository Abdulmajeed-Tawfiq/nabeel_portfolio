import { Button } from "./ui/button"

function Portfolio() {
  return (
    <div id="portfolio" className="relative flex h-[90vh] w-[40vw] ms-20 bg-gray-900 text-white max-nlg:w-[80vw] max-nlg:m-auto">
      <div className="mt-20 flex flex-col items-center text-center gap-10 max-lg:mt-3">
        <div className="text-6xl max-lg:text-3xl"><h2>NABEEL</h2> <h2>AL GEFARY</h2></div>
        <p className="text-2xl max-lg:text-xl">Mobile app development, design and consulting company for those who want to be successful</p>
        <Button className="bg-mainColor rounded-xl text-2xl py-6 px-10 hover:bg-opacity-80 transition-all duration-300">Get consultation</Button>
      </div>
      <div className="absolute bottom-0 right-[-45vw] max-nlg:right-10 max-lg:right-10 max-lg:w-full max-lg:left-0 max-lg:bottom-5">
        <img src="/public/images/hero/firstImg.svg" alt="hero-image"
          className="h-[85vh] mb-10 max-lg:h-[40vh] max-lg:w-[80%] max-lg:m-auto max-sm:h-[50vh] max-sm:w-full"
        />
      </div>
    </div>
  )
}

export default Portfolio