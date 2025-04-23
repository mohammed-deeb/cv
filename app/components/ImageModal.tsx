"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ImageModal = ({ isOpen, onClose, imageUrl, alt, onPrev, onNext, hasPrev, hasNext }: ImageModalProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {hasPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                  setIsZoomed(false);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-blue-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                  setIsZoomed(false);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-blue-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
            <div className="relative aspect-video w-full">
              <Image
                src={imageUrl}
                alt={alt}
                fill
                className={`object-contain cursor-pointer transition-transform duration-300 ${
                  isZoomed ? "scale-170" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
            </div>
            <div className="absolute top-0 right-0">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="text-white"
              >
                {isZoomed ? 
                
                <svg fill="#fff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>zoomout</title>
<path d="M16.906 20.188l5.5 5.5-2.25 2.281-5.75-5.781c-1.406 0.781-3.031 1.219-4.719 1.219-5.344 0-9.688-4.344-9.688-9.688s4.344-9.688 9.688-9.688 9.719 4.344 9.719 9.688c0 2.5-0.969 4.781-2.5 6.469zM2.688 13.719c0 3.875 3.125 6.969 7 6.969 3.844 0 7-3.094 7-6.969s-3.156-6.969-7-6.969c-3.875 0-7 3.094-7 6.969zM4.438 12.625h10.531v2.219h-10.531v-2.219z"></path>
</svg>

                :
                 
                <svg fill="#fff" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>zoomin</title>
<path d="M16.906 20.188l5.5 5.5-2.25 2.281-5.75-5.781c-1.406 0.781-3.031 1.219-4.719 1.219-5.344 0-9.688-4.344-9.688-9.688s4.344-9.688 9.688-9.688 9.719 4.344 9.719 9.688c0 2.5-0.969 4.781-2.5 6.469zM2.688 13.719c0 3.875 3.125 6.969 7 6.969 3.844 0 7-3.094 7-6.969s-3.156-6.969-7-6.969c-3.875 0-7 3.094-7 6.969zM10.813 12.625h3.875v2.219h-3.875v3.844h-2.219v-3.844h-3.844v-2.219h3.844v-3.875h2.219v3.875z"></path>
</svg>
                 
                 }
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal; 