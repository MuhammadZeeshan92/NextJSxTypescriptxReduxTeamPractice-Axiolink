import Image from "next/image"

type CartItems = {
   key:string
    name:string 
    price:number 
    image:string
}

export default function Items({ name, price, image} : CartItems){
    return(
        <div className="flex items-center justify-between py-4 ">
 <div className="flex items-center gap-4 ">
<Image src={image} alt={name} width={48} height={48} />
<p>{name}</p>
 </div>
<p>${price}</p>
        </div>
    )
}