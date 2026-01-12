import Image from "next/image"
import Link from "next/link"

export default function Signup(){
    return(
        <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-7 ">
<div className="hidden md:flex items-center justify-center relative h-[90vh] ">
  <Image
    src="/images/signup.jpg"
    alt="Cover Image"
    fill
    className="object-cover"
  />
</div >

<div className="flex flex-col w-full max-w-md mx-auto px-4 space-y-4 md:mt-10 mb-4">
  <h1 className="text-2xl font-semibold text-black">Create an Account</h1>
  <span className="text-sm text-black">Enter your details below</span>

  <input
    type="text"
    placeholder="Name"
    className="w-full bg-transparent border-b border-[#999999] py-3 text-base text-[#808080] focus:outline-none focus:border-black"
  />

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

  <button
    type="button"
    className="w-full mt-4 font-semibold rounded-sm py-3 bg-[#db4444] text-white"
  >
    Create Account
  </button>

  <button
    type="button"
    className="w-full rounded-sm border border-[#999999] py-3 text-black cursor-pointer flex justify-center gap-2"
  >
<div className="w-5 h-6 relative">
  <Image
    src="/images/google.png"
    alt="Google Icon"
    fill
    className="object-contain"
  />
</div>

   <span> Sign up with Google</span>
  </button>

  <div className="text-center flex justify-center gap-3 text-[#4d4d4d]">
    <p>Already have an account? </p>
    <Link href="/Login" className="hover:border-b">
  Log in
</Link>

  </div>
</div>

    </div>
     </div>
    )
}