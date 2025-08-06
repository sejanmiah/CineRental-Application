import React, { useContext } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import Delete from "../assets/delete.svg";

const CartDetails = ({ onClose }) => {
  const { cartData, setCartData } = useContext(MovieContext);

  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full max-w-[840px] mx-4 max-h-[90vh] overflow-auto">
        <div className="bg-black text-white rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
          <h2 className="text-3xl font-bold text-[#39e1aa]">Your Cart</h2>

          {cartData.length > 0 ? (
            <div className="space-y-6 max-h-[400px] overflow-auto pr-2">
              {cartData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-4 border-b border-gray-700 pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={getImgUrl(item.cover)}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                      <p className="text-[#39e1aa] font-semibold mt-1">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2 text-sm transition"
                  >
                    <img src={Delete} alt="Delete" className="w-5 h-5" />
                    <span className="hidden md:inline">Remove</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">Your cart is empty.</p>
          )}

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-700">
            <a
              href="#"
              className="bg-[#39e1aa] hover:bg-[#2ed49b] text-black px-5 py-2 rounded-lg flex items-center gap-2 font-semibold transition"
            >
              <img src="./assets/icons/checkout.svg" width="20" height="20" alt="Checkout" />
              <span>Checkout</span>
            </a>
            <button
              onClick={onClose}
              className="border border-gray-500 text-gray-300 hover:text-white hover:border-white px-5 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
