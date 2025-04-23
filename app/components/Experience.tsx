import React from "react";

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Experience</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-8">
          {/* Faculty of Informatics Engineering */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Faculty of Informatics Engineering - Homs University
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Homs, Syria</p>
              </div>
            </div>

            {/* PhD Candidate */}
            <div className="border-l-4 border-blue-500 pl-4 ml-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  PhD Candidate in Software Engineering and Information Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Feb 2020 – Aug 2024</p>
              </div>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Researcher:</span> Improved the predictive performance of many Recommendation Systems by +60% using Machine Learning models and Deep learning with Attention mechanism leveraging user reviews and feedback.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Teaching Assistant:</span> Taught "Programming Languages" to fourth-year students and "Ecommerce Odoo" to fifth-year students.
                  </span>
                </li>
              </ul>
            </div>

            {/* Master's Student */}
            <div className="border-l-4 border-blue-500 pl-4 ml-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Master's Student in Software Engineering and Information Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Feb 2014 – Jul 2019</p>
              </div>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Researcher:</span> Studied the effect of factors influencing Ecommerce Recommendation Systems and showed the importance of fine-tuning machine learning models and the power of Gradient Boosting Tree-based models (XGBoost, LightGBM).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Teaching Assistant:</span> Taught "Algorithms and Data Structures" to second-year students with exams and evaluations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Coursework:</span> Advanced Software Engineering, Advanced Information Security, Advanced Bioinformatic, Advanced Databases, Advanced Structure Algorithms, Internet & Web technologies, Scientific Research, and Data Mining.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Faculty of Medicine */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Faculty of Medicine - Homs University
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Homs, Syria</p>
              </div>
            </div>

            {/* Head of Informatics Division */}
            <div className="border-l-4 border-blue-500 pl-4 ml-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Head of Informatics Division
                </h3>
                <p className="text-gray-600 dark:text-gray-400">May 2014 – May 2025</p>
              </div>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">System Administrator:</span> Supported and maintained the faculty's computers, servers, and the e-library database, ensuring all software are UpToDate and maintaining information and files systems security.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Website Administrator:</span> Managed and developed the faculty website, including posting news, updating students' marks, and implementing new functionalities. Solved any issues to ensure availability maintaining a high-quality profile for the faculty.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-semibold">Quality Assurance:</span> Developed programs and implemented many software solutions helping all employees in their jobs and helping the teaching staff (Professors and Doctors) to deliver high-quality research papers, books, and lectures.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 