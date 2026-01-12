import Image from "next/image"
import Link from "next/link"
export default function Login(){
    return(
        <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-7 ">
<div className=" md:flex items-center justify-center relative h-[90vh]">
  <Image
    src="/images/signup.jpg"
    alt="Cover Image"
    fill
    className="object-cover"
  />
</div >

<div className="flex  flex-col w-full max-w-md mx-auto px-4 space-y-4 mt-15 lg:mt-35">
  <h1 className="text-2xl font-semibold text-black">Log in to Exclusive</h1>
  <span className="text-sm text-black">Enter your details below</span>

  <input
    type="text"
    placeholder="Email or Phone Number"
    className="w-full bg-transparent border-b border-[#999999] py-3 text-base text-[#808080] focus:outline-none focus:border-black"
  />

  <input
    type="password"
    placeholder="Password"
    className="w-full bg-transparent border-b border-[#999999] py-3 text-base text-[#808080] focus:outline-none focus:border-black"
  />

 <div className="flex items-center justify-between mt-4 mb-2">
     <button
    type="button"
    className="w-40 font-semibold rounded-sm py-3 bg-[#db4444] text-white"
  >
   Log in
  </button>
<Link
    href="/reset-password"
 className="text-[#db4444]"
  >
    Forget Password?
  </Link>
 </div>


</div>

    </div>
     </div>
    )
}