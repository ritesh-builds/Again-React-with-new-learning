import { useEffect, useState } from "react";

const STAR_IMAGE_BG =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9770934.jpg-Wl31ERQfbntJABIblVId5PIBjqP5Gx.jpeg";
const UFO_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png";

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}-${Math.random()}`,
    size: Math.random() * 2 + 1, // 1-3px
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight",
  }));
};

export default function NotFound() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));
    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Local keyframes + helper classes, scoped via a plain <style> tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes fallTopLeft {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-100px, 100vh); opacity: 0; }
        }
        @keyframes fallTopRight {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100px, 100vh); opacity: 0; }
        }
        .nf-animate-fall-topLeft { animation: fallTopLeft linear infinite; }
        .nf-animate-fall-topRight { animation: fallTopRight linear infinite; }
        .nf-ufo {
          position: absolute;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 6s ease-in-out infinite, tilt 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
        //   backgroundImage: `url("${STAR_IMAGE_BG}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={
              star.direction === "topLeft"
                ? "absolute nf-animate-fall-topLeft"
                : "absolute nf-animate-fall-topRight"
            }
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div className="h-full w-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* UFO */}
      <div className="nf-ufo">
        <img src={UFO_IMAGE} alt="UFO" width={300} height={150} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 text-7xl font-bold text-white ">404</h1>
        <p className="p-10 text-xl text-gray-300">
          Oops! Looks like this page got lost in space
        </p>
        <a
          href="/"
          className="px-6 py-3 text-white bg-purple-600 rounded-lg  hover:bg-purple-700"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
























// import { useEffect, useRef } from "react";

// export default function NotFoundSpotlight() {
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     const overlay = overlayRef.current;
//     if (!overlay) return;

//     const handleMouseMove = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;
//       const pos = `${x}px ${y}px`;
//       const mask = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
//       overlay.style.maskImage = mask;
//       overlay.style.webkitMaskImage = mask;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
//       {/* Main content hidden by default, revealed by spotlight */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//         <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>
//         <p className="text-xl">
//           Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
//         </p>
//         <a
//           href="/"
//           className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
//         >
//           Go Home
//         </a>
//       </div>

//       {/* Dark overlay with spotlight mask */}
//       <div
//         ref={overlayRef}
//         className="absolute inset-0 bg-black z-20 pointer-events-none"
//         style={{
//           maskImage:
//             "radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)",
//           WebkitMaskImage:
//             "radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)",
//         }}
//       />
//     </div>
//   );
// }
