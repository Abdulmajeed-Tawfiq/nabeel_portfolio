import Lottie from "lottie-react";
import abputAnimation from "../../public/lotiFiles/developer-animation.json";

function About() {

  return (
    <div id="about" className="relative flex items-center py-20 w-[90%] ms-20 bg-gray-900 text-white max-nlg:w-[80vw] max-nlg:m-auto max-lg:flex-col-reverse">
      <div className="flex-[45%]">
        <Lottie animationData={abputAnimation} loop={true} />
      </div>
      <div className="flex-[55%] flex flex-col items-center text-center gap-10 max-lg:mt-3">
        <div className="text-6xl max-lg:text-3xl text-mainColor"><h2>About me</h2></div>
        <p className="text-2xl max-lg:text-xl">Mobile App Developer with
          over 2 years of experience in
          building production-level
          mobile applications using
          Flutter and Dart. Proficient in
          Firebase, RESTful APIs, real-
          time communication, and state
          management. Experienced in
          app deployment across various
          platforms with a focus on
          optimizing app performance
          and user experience</p>
      </div>
    </div>
  );
}

export default About
