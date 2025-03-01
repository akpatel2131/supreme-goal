import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Pause, Play } from "lucide-react";

import carBody from "../assets/car-body-video.mp4";
import carBodyImg from "../assets/car-body-img.png";
import carFrontVideo from "../assets/front-car-video.mp4";
import carCabinVideo from "../assets/car-cabin-video.mp4";
import carTrunkVideo from "../assets/car-trunk-video.mp4";
import carExteriorVideo from "../assets/car-exterior-video.mp4";
import carFrontImg from "../assets/front-car-img.png";
import carTrunkImg from "../assets/car-trunk-img.png";
import carExteriorImg from "../assets/car-exterior-img.png";
import carCabinImg from "../assets/car-cabin-img.png";
import truckBodyVideo from "../assets/truck-body-video.mp4";
import truckBodyImg from "../assets/truck-body-img.png";

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const {width} = useWindowSize();
  const isTablet = width < 960;

  const handleScroll = useCallback(() => { 
    const scrollPosition = window.scrollY;
    if (scrollPosition > 700) {
      setActiveButton(1);
    } else {
      setActiveButton(0);
    }

    if (scrollPosition > 400 && scrollPosition < 1000) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  },[])

  useEffect(() => {
    if(isTablet) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const vehicleTypes = useMemo(() => {
    if (activeButton === 0) {
      return [
        {
          title: "Complete Body vehicles",
          description:
            "Revving up Nonwoven innovation from interior to exterior.",
          img: carBody,
          imgPng: carBodyImg,
          categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
        },
        {
          title: "Front vehicles",
          imgPng: carFrontImg,
          img: carFrontVideo,
          description: "Advanced solutions for heavy-duty applications.",
          categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
        },
        {
          title: "Cabin vehicles",
          imgPng: carFrontImg,
          img: carCabinVideo,
          description: "Advanced solutions for heavy-duty applications.",
          categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
        },
        {
          title: "Trunk vehicles",
          imgPng: carFrontImg,
          img: carTrunkVideo,
          description: "Advanced solutions for heavy-duty applications.",
          categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
        },
        {
          title: "Exterior vehicles",
          imgPng: carFrontImg,
          img: carExteriorVideo,
          description: "Advanced solutions for heavy-duty applications.",
          categories: ["Complete Body", "Front", "Cabin", "Trunk", "Exterior"],
        },
      ];
    }

    return [
      {
        title: "Truck Body",
        imgPng: truckBodyImg,
        img: truckBodyVideo,
        description: "Advanced solutions for heavy-duty applications.",
        categories: ["Truck Body"],
      },
    ];
  }, [activeButton]);

  const carParts = useMemo(() => {
    if (activeButton === 0) {
      return [
        { img: carBodyImg, label: "Complete Body" },
        { img: carFrontImg, label: "Front" },
        { img: carCabinImg, label: "Cabin" },
        { img: carTrunkImg, label: "Trunk" },
        { img: carExteriorImg, label: "Exterior" },
      ];
    }

    return [{ img: truckBodyImg, label: "Truck Body" }];
  }, [activeButton]);

  const handleCategoryClick = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section
      className={`bg-black min-h-auto lg:min-h-[1000px] min-w-screen`}
    >
      <div className={`container mx-auto pt-16 pb-16 max-w-7xl px-4 md:px-6 lg:px-8 ${
        isSticky ? "sticky top-0 z-10" : ""
      }`}>
        <div className="text-center pb-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            <span className="block">
              Evolving the drive with{" "}
              <span className="font-normal">360-degree</span>
            </span>
            <span className="block mt-2">nonwoven solutions</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="cards-wrp pl-14 self-center relative 2xl:py-10 py-5 flex flex-col">
            <button
              type="button"
              className={`card-details-1 transition-opacity duration-500 ${
                activeButton === 0 ? "opacity-100" : "opacity-20"
              }`}
              onClick={() => setActiveButton(0)}
            >
              <h3 className="font-medium text-left pb-2 text-white text-3xl">
                Passenger vehicles
              </h3>
              <h6 className="font-light text-left 2xl:text-lg text-white/60">
                Revving up innovation from <br /> interior to exterior.
              </h6>
            </button>
            <button
              type="button"
              className={`card-details-2 transition-opacity duration-500 mt-14 ${
                activeButton === 1 ? "opacity-100" : "opacity-20"
              }`}
              onClick={() => setActiveButton(1)}
            >
              <h3 className="font-medium text-left pb-2 text-white text-3xl">
                Commercial vehicles
              </h3>
              <h6 className="font-light text-left 2xl:text-lg text-white/60">
                Advancing engineering <br /> for heavy-duty vehicles.
              </h6>
            </button>
            <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray top-0">
              <div
                className="slider-height w-[2px] bg-white rounded-md transition-transform duration-500"
                style={{
                  transform: `translateY(${
                    activeButton === 1 ? "100%" : "0%"
                  })`,
                  height: "50%",
                }}
              ></div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="mb-6 md:mb-8 lg:mb-12">
                {vehicleTypes.map((vehicle, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <video
                      ref={videoRef}
                      src={vehicle.img}
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-row flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center">
                {carParts.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center transition-opacity duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                    onClick={() => handleCategoryClick(idx)}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain mb-1 md:mb-2"
                    />
                    <span className="text-white text-xs md:text-sm text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center self-center transition-colors"
                >
                  {!isPlaying ? (
                    <Play className="text-white w-4 h-4" />
                  ) : (
                    <Pause className="text-white w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
