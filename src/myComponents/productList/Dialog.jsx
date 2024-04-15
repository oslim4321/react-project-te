import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Dialog = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getAllCart() {
      const response = await fetch("http://localhost:4000/api/v1/carts");
      const data = await response.json();
      setCartItems(data.carts); // Assuming data is an array of cart items
      console.log(data);
    }
    getAllCart();
  }, []);

  return (
    <Sheet>
      <SheetTrigger>View Cart</SheetTrigger>
      <SheetContent>
        <div className="bg-white shadow-lg max-w-4xl flex flex-wrap">
          {cartItems?.map((item, index) => (
            <div key={index} className="flex justify-between px-5 py-5 w-full">
              <div className="flex flex-col">
                <h1 className="font-bold text-3xl text-black">{item.title}</h1>
                {/* <p className="text-lg mt-1">{item.jobTitle}</p> */}
                <div className="mt-4"></div>
              </div>
              <div className="flex items-center">
                <img className="h-24 w-24" src={item.image} alt="Product" />
                <div>
                  <p>${item.price}</p>
                  <button className="text-red-500">Remove</button>
                </div>
              </div>
              <div className="flex items-center">
                <button className="border p-1">-</button>
                <input
                  type="text"
                  readOnly
                  value={item.quantity}
                  className="w-8 text-center"
                />
                <button className="border p-1">+</button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Dialog;
