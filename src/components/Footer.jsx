const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start flex justify-between text-sm md:text-md py-8 md:mt-8">
      <div className="flex flex-col text-white space-y-4">    
      <p>Privacy and Cookies</p>
      <p>Legal</p>
      <p>Advertise</p>
      </div>
      <div  className="flex flex-col text-white space-y-4">
      <p>Help</p>
      <p>Feedback</p>
      <p>Teams & Conditions</p>
      </div>
      <div  className="flex flex-col text-white space-y-4">
      <p>About Us</p>
      <p>Contact</p>
      </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">© 2023 Pokemon</p>
    </>
  )
}
export default Footer