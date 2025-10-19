function Contact() {
  return (
    <div id="contact" className="container w-[50%] m-auto content-center text-center bg-gray-900 text-white flex flex-col justify-center items-center">
      <h2 className="text-6xl max-lg:text-3xl mb-8">Let's Meet</h2>
      <form action="" className="w-full max-w-md">
        <input type="text" placeholder="Name" className="bg-gray-800 text-white w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Email" className="bg-gray-800 text-white w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Message" className="bg-gray-800 text-white w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24 "></textarea>
        <button className="bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
  )
}

export default Contact