import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { useTheme } from "../../context/themeContext"; // Import useTheme hook

const Example = () => {
  const { theme } = useTheme(); // Retrieve theme state from useTheme hook

  return (
    <section className={`grid place-content-center ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} p-12`}>
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  const { theme } = useTheme(); // Retrieve theme state from useTheme hook

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className={`rounded-[24px] ${theme === 'dark' ? 'bg-neutral-800' : 'bg-violet-500'}`}
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className={`relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-${theme === 'dark' ? 'neutral-200' : 'violet-500'} bg-${theme === 'dark' ? 'neutral-900' : 'neutral-900'} p-1 pl-[3px] pt-[3px]`}
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  const { theme } = useTheme(); // Retrieve theme state from useTheme hook

  return (
    <>
      <div className={`absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-${theme === 'dark' ? 'neutral-900' : 'neutral-900'}`}></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className={`text-${theme === 'dark' ? 'neutral-600' : 'neutral-600'}`} />
        <FiBatteryCharging className={`text-${theme === 'dark' ? 'neutral-600' : 'neutral-600'}`} />
      </div>
    </>
  );
};

const Screen = () => {
  const { theme } = useTheme(); // Retrieve theme state from useTheme hook

  return (
    <div className='relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white'>
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='fill-violet-500'
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>

      <button className={`absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-${theme === 'dark' ? 'neutral-900' : 'white'} py-2 text-sm font-medium text-${theme === 'dark' ? 'violet-500' : 'violet-500'} backdrop-blur`}>
        Get Started
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className={`absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-${theme === 'dark' ? 'neutral-800' : 'violet-500'}`} />
    </div>
  );
};

export default Example;
