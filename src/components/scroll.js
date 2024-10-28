"use client"
import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const ScrollButtons = ({ contentRef }) => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(true);

  const toggleVisibility = () => {
    if (contentRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      const clientHeight = contentRef.current.clientHeight;
      const scrollHeight = contentRef.current.scrollHeight;

      if (scrollTop > 300) {
        setIsTopVisible(true);
        setIsBottomVisible(false);
      } else {
        setIsTopVisible(false);
        setIsBottomVisible(true);
      }
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (contentRef.current) {
        contentRef.current.addEventListener('scroll', toggleVisibility);
    }
    return () => {
        if (contentRef.current) {
            contentRef.current.removeEventListener('scroll', toggleVisibility);
        }
    };
  }, [contentRef]);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      {isTopVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 mr-4 mb-4 mt-4 shadow-sm shadow-slate-400 rounded-full bg-[#fc641c] text-white hover:bg-[#fc7332] transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
      {isBottomVisible && (
        <button
          onClick={scrollToBottom}
          className="p-2 mr-4 mb-4 mt-4 shadow-sm shadow-slate-400 rounded-full bg-[#fc641c] text-white hover:bg-[#fc7332] transition duration-300"
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
};
