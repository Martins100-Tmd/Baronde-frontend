import { useQuery } from "@tanstack/react-query";
import { ShopBy } from "../../dynamic/productpage";
import Footer from "../../footer/footer";
import MainPageNavbar from "./navbar";
import { getTestimonyUser } from "../../utils/getFetch";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Loader } from "lucide-react";
import { formatUpdatedAt } from "../../utils/fetch";

export default function Testimonial() {
  let [ele, setele] = useState<ReactNode>(<></>);
  let [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const { data, status } = useQuery({
    queryKey: ["fetch testimony"],
    queryFn: () => getTestimonyUser(),
  });

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (status == "pending")
      setele(
        <div className="sm:w-1/2 w-4/5 mx-auto flex justify-center">
          <Loader className="animate-spin text-green-700" size={18} />
        </div>
      );

    if (status == "success" && data) {
      if (data.length > 0) {
        setele(
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item: any, index: number) => {
              const { caption, image, updatedAt } = item;
              const isExpanded = expandedCards[index] || false;

              return (
                <div
                  className="w-full rounded-lg relative h-[315px] sm:h-[350px] overflow-hidden group cursor-pointer shadow-md"
                  key={index}
                >
                  <img
                    src={image}
                    alt="Testimonial background"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x350/e5e7eb/6b7280?text=No+Image";
                    }}
                  />

                  <div
                    onClick={() => toggleCard(index)}
                    className="absolute z-30 w-6 h-6 backdrop-blur-sm rounded-full duration-75 flex justify-center shadow-lg bg-black/50 top-2 right-2"
                  >
                    {isExpanded ? (
                      <ChevronDown
                        size={18}
                        className="text-white self-center text-center duration-200"
                      />
                    ) : (
                      <ChevronUp
                        size={18}
                        className="text-white self-center text-center duration-200"
                      />
                    )}
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 duration-300 ${
                      isExpanded ? "inset-y-0 top-0" : ""
                    } sm:group-hover:inset-y-0 sm:group-hover:top-0`}
                  >
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

                    <div className="relative p-4 text-white">
                      <p
                        id="caption"
                        className={`${
                          isExpanded
                            ? "max-h-[295px] overflow-y-scroll text-xs line-clamp-none"
                            : ""
                        } text-sm sm:text-base font-semibold sm:group-hover:max-h-[295px] sm:group-hover:overflow-y-scroll sm:group-hover:text-xs leading-relaxed mb-3 line-clamp-3 sm:group-hover:line-clamp-none`}
                      >
                        {caption}
                      </p>
                      <div className="flex justify-between items-center text-xs sm:text-sm opacity-90">
                        <span className="font-semibold font-all text-sm">
                          Customer
                        </span>
                        <span className="font-all text-xs font-semibold">
                          {formatUpdatedAt(updatedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else {
        setele(
          <div className="w-full flex justify-center">
            <p className="font-all text-lg text-center w-full">
              No testimonial yet.
            </p>
          </div>
        );
      }
    }

    if (status === "error") {
      setele(
        <div className="w-full flex justify-center">
          <p className="font-all text-lg text-center w-full text-red-600">
            Failed to load testimonials.
          </p>
        </div>
      );
    }
  }, [status, data, expandedCards]);

  return (
    <>
      <MainPageNavbar />
      <section className="w-full h-full py-3 bg-gray-200 flex flex-col items-center sm:gap-5 justify-start gap-4">
        <div className="flex flex-col items-start w-[95%] gap-2 sm:h-auto sm:w-3/5 mx-auto mt-4 sm:mt-6">
          <div className="relative w-full pb-[56.25%] bg-stone-300">
            <video
              controls
              className="absolute top-0 left-0 w-full h-full object-contain"
            >
              <source
                src="https://res.cloudinary.com/dmaag3pvx/video/upload/v1755457790/vid1_obgsjs.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <ShopBy />
          <section className="w-full gap-5 flex flex-col items-start"></section>
        </div>
        <div className="flex flex-col items-start w-[95%] gap-2 sm:h-auto sm:w-4/5 mx-auto mt-4 sm:mt-6">
          <div className="flex flex-col items-center w-[90%] sm:w-3/4 mx-auto self-center">
            <p className="font-all font-semibold text-2xl text-center w-full text-black">
              Don't take our words for it.
              <br />
              <span className="text-emerald-600 test">Trust our customers</span>
            </p>
          </div>
          <section className="w-full flex items-center justify-center mt-6">
            {ele}
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
