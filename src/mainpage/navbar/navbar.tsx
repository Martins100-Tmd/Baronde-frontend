import { Link, useNavigate } from "react-router-dom";
import { headlogo, MainPageSearchBar, MobileDropDown } from "../..";
import { useState } from "react";
import CartDisplay from "./cartdisplay";
import { useGlobalState } from "../../store/globalstate";
import { brand, products } from "../../raw-datas/rd1";

export default function MainPageNavbar() {
  let [menu, setmenu] = useState(false);
  let { setShowCartDesktop } = useGlobalState();
  let navigate = useNavigate();

  const handleCartClick = () => {
    document.body.clientWidth > 640 ? setShowCartDesktop() : navigate("/cart");
  };

  let [drop, setdrop] = useState(false);
  let [down, setdown] = useState(false);

  const focusRef = (element: HTMLButtonElement) => {
    if (element) {
      element.focus();
    }
  };

  return (
    <nav className="flex flex-col items-center w-full">
      <div className="bg-[#E5A000] py-2 px-7 flex flex-row items-center w-full justify-between">
        <p className="font-all text-xs text-white self-center">
          Check Big sallah sales - 40% off
        </p>
        <div className="flex flex-row items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail-icon lucide-mail text-white self-center"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <p className="font-all text-xs text-white self-center">
            Suscribe & save
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center py-3 px-3 sm:px-7 bg-[#14AE5C] w-full">
        <Link
          to={"/"}
          className="flex flex-row items-center justify-start sm:justify-center gap-0.5 sm:-ml-2 self-center w-1/2"
        >
          <img
            src={headlogo}
            className="w-10 h-10 sm:w-10 sm:h-10 rounded object-cover"
          />
          <div className="flex flex-col items-start">
            <p className="font-all font-semibold text-xl text-white">Baron</p>
            <p className="font-all text-[12px] text-start text-white -mt-1">
              Demusical
            </p>
          </div>
        </Link>
        <MainPageSearchBar />
        <div className="flex flex-row items-center gap-6 w-1/2 justify-end">
          <Link
            to={"/signup"}
            className="hidden sm:flex flex-col items-center gap-1.5"
          >
            <p className="font-all font-medium text-xs text-center text-white">
              Login/SignUp
            </p>
            <p className="font-all font-medium text-xs text-center text-white">
              My account
            </p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search text-white sm:hidden flex"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-icon lucide-user text-white sm:hidden flex"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <div className="relative">
            <svg
              onClick={handleCartClick}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart-icon cursor-pointer lucide-shopping-cart text-white"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <div
              onClick={handleCartClick}
              className="h-2 w-2 bg-[#BB2331] p-2 cursor-pointer flex justify-center rounded-full absolute -top-1 right-0"
            >
              <p className="text-white text-[10px] font-medium text-center self-center">
                2
              </p>
            </div>
            <CartDisplay />
          </div>
          <svg
            onClick={() => setmenu(!menu)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify-icon lucide-align-justify sm:hidden flex text-white"
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
        </div>
      </div>
      <div className="relative w-full sm:hidden flex bg-white">
        <MobileDropDown menu={menu} />
      </div>
      <div className="w-full bg-white">
        <section className="bg-white p-3 hidden sm:flex justify-center w-4/5 mx-auto">
          <ul className="flex flex-row items-center justify-between w-full">
            <div className="font-all text-sm text-center font-medium list-none">
              All Deals
            </div>
            <div className="flex flex-col items-center relative">
              <div
                onClick={() => setdrop(!drop)}
                className="flex flex-row items-center gap-1.5 justify-center cursor-pointer"
              >
                <p className="font-all text-sm font-medium text-center">
                  Shop by Brand
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    drop ? "rotate-180" : "rotate-360"
                  } lucide lucide-chevron-down-icon lucide-chevron-down duration-300`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <button
                ref={focusRef}
                onBlur={() => setdrop(false)}
                type={"button"}
                className={`${
                  drop ? "flex" : "hidden"
                } sm:min-w-[200px] bg-white flex-col absolute top-10 items-start border border-black/40 outline-none`}
              >
                {brand.map((item, index) => {
                  return (
                    <p
                      className="p-2 w-full cursor-pointer hover:bg-gray-200 text-start font-all text-sm"
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </button>
            </div>
            <div className="flex flex-col items-center relative">
              <div
                onClick={() => setdown(!down)}
                className="flex flex-row items-center gap-1.5 justify-center cursor-pointer"
              >
                <p className="font-all text-sm font-medium text-center">
                  Product
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    down ? "rotate-180" : "rotate-360"
                  } lucide lucide-chevron-down-icon lucide-chevron-down duration-300`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <button
                ref={focusRef}
                onBlur={() => setdown(false)}
                type={"button"}
                className={`${
                  down ? "flex" : "hidden"
                } sm:min-w-[200px] bg-white duration-200 flex-col absolute top-10 items-start border border-black/40 outline-none z-30`}
              >
                {products.map((item, index) => {
                  return (
                    <p
                      className="p-2 w-full cursor-pointer hover:bg-gray-200 text-start font-all text-sm"
                      key={index}
                    >
                      {item}
                    </p>
                  );
                })}
              </button>
            </div>
            <div className="font-all text-sm text-center font-medium list-none">
              Service Center
            </div>
            <Link
              to={"/about"}
              className="font-all text-sm text-center font-medium list-none"
            >
              About
            </Link>
            <div className="font-all text-sm text-center font-medium list-none">
              Testimonies
            </div>
          </ul>
        </section>
      </div>
    </nav>
  );
}
