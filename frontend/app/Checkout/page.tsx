"use client"
import { useState } from "react"
import Items from "./Items";
import bkash from "@/public/images/bkash.png"
import masterCard from "@/public/images/mastercard.png"
import visa from "@/public/images/visa.png"
import icon from "@/public/images/icon.png"
import Image from "next/image";

type CheckoutForm = {
  firstName: string
  companyName: string
  address: string
  residence?: string
  city: string
  phoneNo: string
  email: string
}

export default function Checkout() {
  const [form, setForm] = useState<CheckoutForm>({
    firstName: "",
    companyName: "",
    address: "",
    residence: "",
    city: "",
    phoneNo: "",
    email: "",
  })
  const [saveInfo, setSaveInfo] = useState<boolean>(false)
const items = [
  { name: "LCD Monitor", price: 650, image: "/images/lcdmonitor.png" },
  { name: "H1 Gamepad", price: 1100, image: "/images/h1gamepad.png" },
]
const subtotal = items.reduce(
  (sum, item) => sum + item.price, 0
)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-black text-3xl mb-8">Billing Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-20 ">
          
        
          <form className="space-y-4">
            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">First Name <span className="text-[#f1b4b4]">*</span></label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800 "
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Street Address <span className="text-[#f1b4b4]">*</span></label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                value={form.residence}
                onChange={(e) => setForm({ ...form, residence: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Town/City <span className="text-[#f1b4b4]">*</span></label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Phone Number <span className="text-[#f1b4b4]">*</span></label>
              <input
                type="text"
                value={form.phoneNo}
                onChange={(e) => setForm({ ...form, phoneNo: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label className="text-[#999999] text-sm font-medium mb-1">Email Address <span className="text-[#f1b4b4]">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-gray-800"
              />
            </div>
                    <label className="flex items-center space-x-2 cursor-pointer">
  <input
  type="checkbox"
  checked={saveInfo}
  onChange={(e) => setSaveInfo(e.target.checked)}
  className="w-5 h-5 accent-[#db4444]
 rounded focus:outline-none"
/>

  <span className="text-gray-800">
    Save this information for faster check-out next time</span>
</label>

          </form>
 
        
          <div className="mt-2 text-black">
           {items.map(item=>(
            <Items
            key={item.name}
            name={item.name}
            price={item.price}
            image={item.image}/>
           ))}
         <div className="flex justify-between text-md  mt-4 ml-0.5">
  <span>Subtotal:</span>
  <span>${subtotal}</span>
</div>
<div className="border-t border-[#999999] mt-3"></div>
   <div className="flex justify-between text-md  mt-4 ml-0.5">
  <span>Shipping:</span>
  <span>Free</span>
</div>
<div className="border-t border-[#999999] mt-3"></div>
<div className="flex justify-between text-md  mt-4 ml-0.5">
  <span>Total:</span>
  <span>${subtotal}</span>
</div>
  <div>
   <div className="flex items-center justify-between space-x-3 mt-4">
 <label className="flex items-center space-x-2">
  <input type="radio" name="payment" className="accent-black size-4 cursor-pointer" />
  <span>Bank</span>
</label>

  <div className="flex space-x-2">
     <Image src={bkash} alt="PayPal" width={32} height={32} />
    <Image src={visa} alt="Visa" width={22} height={22} />
    <Image src={masterCard} alt="Mastercard" width={22} height={22} />
    <Image src={icon} alt="" width={32} height={32} />
  </div>
</div>
 <label className="flex items-center space-x-2 mt-4 ">
  <input type="radio" name="payment" className="accent-black size-4 cursor-pointer" />
  <span>Cash on Delivery</span>
</label>
  </div>
  <div>
    <div className="flex justify-between mt-4 gap-4">
  <input
    type="text"
    placeholder="Coupon Code"
    className="w-full border border-black rounded px-2 py-2 md:px-3 md:py-3 text-[#808080] focus:outline-none"
  />
  <button type="button"
   className="w-70 rounded px-2 py-2 md:px-3 md:py-3 bg-[#db4444] cursor-pointer text-white">
    Apply Coupon
  </button>
</div>
 <button type="button"
 className="md:w-50 w-45 mt-4 rounded px-2 py-2 md:px-3 md:py-3 bg-[#db4444] cursor-pointer text-white">
   Place Order
  </button>
  </div>
        </div> 
    </div> 

          </div>
        </div>
      
  )
}
