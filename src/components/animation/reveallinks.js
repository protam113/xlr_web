import React from "react";
import {
  SiNextdotjs,
  SiRedux,
  SiWebpack,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaNpm, FaJsSquare,  FaGoogle } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { useAnimate } from "framer-motion";
import { useTheme } from "../../context/themeContext";


export const ReactIconsExample = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-white'} px-4 py-12`}>
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  const { theme } = useTheme();

  return (
    <div className={`divide-y  ${theme === 'dark' ? 'divide-neutral-200' : 'divide-neutral-900  '} border  ${theme === 'dark' ? 'border-neutral-200' : 'border-neutral-900  '}`}>
        <div className={`grid grid-cols-2 divide-x ${theme === 'dark' ? 'divide-neutral-200' : 'divide-neutral-900  '}`}>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={SiNextdotjs} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={SiRedux} href="#" />
            </div>
        </div>
        <div className={`grid grid-cols-4 divide-x ${theme === 'dark' ? 'divide-neutral-200' : 'divide-neutral-900  '}`}>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={FaNodeJs} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={FaJsSquare} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={FaReact} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={SiWebpack} href="#" />
            </div>
        </div>
        <div className={`grid grid-cols-3 divide-x ${theme === 'dark' ? 'divide-neutral-200' : 'divide-neutral-900  '}`}>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={IoLogoVercel} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={FaNpm} href="#" />
            </div>
            <div className={`flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <LinkBox Icon={FaGoogle} href="#" />
            </div>
    </div>
</div>

  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const { theme } = useTheme();
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className={`absolute inset-0 grid place-content-center ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}  ${theme === 'dark' ? 'text-slate-900' : 'text-white'}`}
      >
        <Icon className={`text-xl sm:text-3xl md:text-4xl ${theme === 'dark' ? 'text-slate-900' : 'text-white'}`} />
      </div>
    </a>
  );
};