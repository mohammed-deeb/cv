import React from "react";

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Education</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {/* PhD */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Homs University (formerly Al-Baath University)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Doctor of Philosophy in Informatics Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  GPA: 3.76 (94%)
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400">
                  Homs, Syria
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Feb 2020 – Aug 2024
                </p>
              </div>
            </div>
          </div>

          {/* Master's */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Homs University (formerly Al-Baath University)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Master of Science in Informatics Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  GPA: 3.25 (81.33%)
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400">
                  Homs, Syria
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Feb 2014 – Jul 2019
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor's */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Latakia University (formerly Tishreen University)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Bachelor of Engineering in Information & Communication Technology Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  GPA: 2.99 (74.72%)
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400">
                  Latakia, Syria
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Nov 2009 – Sep 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 