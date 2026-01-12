"use client"
import Link from "next/link"
import { useState } from "react"

type AccountForm = {
  firstName: string
  lastName: string
  email: string
  address: string
  current: string
  new: string
  confirm: string
}

export default function Account() {
    const [form, setForm] = useState<AccountForm>({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  current: "",
  new: "",
  confirm: "",
})

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[220px_2fr] gap-10 px-4 py-10">
        <aside className="hidden md:block">
          <p className="font-semibold mb-4 text-black">Manage My Account</p>
          <ul className="space-y-2 text-sm text-[#808080] ml-5">
            <li>
              <Link href="/account/profile" className="text-[#db4444] hover:underline">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/account/address" className="hover:underline">
                Address Book
              </Link>
            </li>
            <li>
              <Link href="/account/payments" className="hover:underline">
                My Payment Options
              </Link>
            </li>
          </ul>

          <p className="mt-6 font-semibold text-black">My Orders</p>
          <ul className="mt-2 space-y-2 text-sm text-[#808080] ml-5">
            <li>
              <Link href="/account/orders" className="hover:underline">
                My Returns
              </Link>
            </li>
            <li>
              <Link href="/account/cancellations" className="hover:underline">
                My Cancellations
              </Link>
            </li>
          </ul>

          <p className="mt-6 font-semibold text-black">My Wishlist</p>
         
        </aside>

      
        <main className="bg-white p-6 md:p-10 rounded shadow-sm">
          <h1 className="text-[#db4444] font-semibold text-xl mb-8">Edit your profile</h1>
          <form>
<div className="grid grid-cols-2 gap-4">
    <div>
              <label className="text-black text-sm font-medium mb-1">First Name </label>
              <input
                type="text"
                placeholder="Md"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
            </div>
             <div>
              <label className="text-black text-sm font-medium mb-1">Last Name </label>
              <input
                type="text"
                placeholder="Rimel"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
            </div>
            <div>
              <label className="text-black text-sm font-medium mb-1">Email </label>
              <input
                type="text"
                placeholder="rimel111@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
            </div>
             <div>
              <label className="text-black text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Kingston,5236,United States"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
            </div>
            
</div>

 <div className="grid grid-cols-1 gap-4">
              <label className="text-black text-sm font-medium  mt-6">Password Changes</label>
              <input
                type="text"
                placeholder="Current Password"
                value={form.current}
                onChange={(e) => setForm({ ...form, current: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
               <input
                type="text"
                placeholder="New Password"
                value={form.new}
                onChange={(e) => setForm({ ...form, new: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
               <input
                type="text"
                placeholder="Confirm Password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                className="w-full bg-[#f5f5f5] rounded px-3 py-2 focus:outline-none text-[#7b7b7b] "
              />
            </div>
<div className="flex justify-end">
    <button type="button"
 className="md:w-50 w-45 mt-4 px-2 py-2 md:px-3 md:py-3  text-black border-none">
   Cancel
  </button>
    <button type="button"
 className="md:w-50 w-45 mt-4 border-none rounded px-2 py-2 md:px-3 md:py-3 bg-[#db4444]  text-white hover:outline-none">
  Save Changes
  </button>
</div>


          </form>
        </main>

      </div>
    </div>
  )
}
