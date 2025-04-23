"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import ImageModal from "@/app/components/ImageModal";
import { useState } from "react";

const Project4 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    { url: "/projects/project-4/image1.jpg", alt: "project-4 - Image 1" },
    { url: "/projects/project-4/image2.jpg", alt: "project-4 - Image 2" },
    { url: "/projects/project-4/image3.jpg", alt: "project-4 - Image 3" },
    { url: "/projects/project-4/image4.jpg", alt: "project-4 - Image 4" },
  ];

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="pt-8 text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Machine Learning vs Collaborative Filtering in Recommendation Systems
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-gray-500 dark:text-gray-400">Sep 2017 – May 2019</span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              Master Project
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Conducted a comparative study between machine learning models and collaborative filtering for predicting users' ratings. Preprocessed and engineered new features for Book Crossing dataset to enhance model predictive performance.
          </p>
        </motion.div>

        {/* Project Outlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Outlines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Conducted comparative analysis of ML models vs collaborative filtering</li>
            <li>Preprocessed and engineered features for Book Crossing dataset</li>
            <li>Achieved over 20% improvement in predictive performance</li>
            <li>Implemented and evaluated multiple ML models</li>
            <li>Developed and tested various collaborative filtering approaches</li>
            <li>Created comprehensive evaluation framework</li>
            <li>Analyzed model performance across different scenarios</li>
          </ul>
        </motion.div>

        {/* Tools & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Tools & Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Google Collaboratory</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">JupyterLab</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">nltk</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Word2Vec</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Pandas</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Scikit-learn</span>
            <span className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Matplotlib</span>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Click to view</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageUrl={selectedImageIndex !== null ? images[selectedImageIndex].url : ""}
        alt={selectedImageIndex !== null ? images[selectedImageIndex].alt : ""}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedImageIndex !== null && selectedImageIndex > 0}
        hasNext={selectedImageIndex !== null && selectedImageIndex < images.length - 1}
      />
    </div>
  );
};

export default Project4; 