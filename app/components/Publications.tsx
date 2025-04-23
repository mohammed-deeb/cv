import React from "react";

const Publications = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Publications</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {/* Doctoral Dissertation */}
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-800 dark:text-gray-200">
              Deeb, M., (2024). <span className="font-semibold">Improving Recommendation Systems' Predictions Using Machine Learning Models</span> [Doctoral dissertation].
            </p>
            <a 
              href="https://www.researchgate.net/publication/390971228_Improving_Recommendation_Systems'_Predictions_Using_Machine_Learning_Models" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
            >
              View Publication
            </a>
          </div>

          {/* Journal Article 2024 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-800 dark:text-gray-200">
              Deeb, M. and Abu Saleh, N., (2024). <span className="font-semibold">Enriching NeuMF System with Full Data Features Using Attention-Based Deep Learning Models to Improve Ratings Prediction</span>. Journal of Al-Baath University, 46(9), pp.85-128.
            </p>
            <a 
              href="https://www.researchgate.net/publication/382442734_Enriching_NeuMF_System_with_Full_Data_Features_Using_Attention-Based_Deep_Learning_Models_to_Improve_Ratings_Prediction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
            >
              View Publication
            </a>
          </div>

          {/* Journal Article 2023 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-800 dark:text-gray-200">
              Deeb, M. and Abu Saleh, N., (2023). <span className="font-semibold">Collaborative Filtering Recommendation Systems Performance Boosted with Machine Learning Models</span>. Journal of Al-Baath University, 45(18), pp.93-130.
            </p>
            <a 
              href="https://www.researchgate.net/publication/382442730_Collaborative_Filtering_Recommendation_Systems_Performance_Boosted_with_Machine_Learning_Models" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
            >
              View Publication
            </a>
          </div>

          {/* Master's Thesis */}
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-800 dark:text-gray-200">
              Deeb, M., (2019). <span className="font-semibold">The Study of Factors Affecting Users' Ratings of The Products in E-Commerce Systems</span> [Master's thesis].
            </p>
            <a 
              href="https://www.researchgate.net/publication/338187716_The_Study_of_Factors_Affecting_Users'_Ratings_of_The_Products_in_E-Commerce_Systems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
            >
              View Publication
            </a>
          </div>

          {/* Journal Article 2019 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-800 dark:text-gray-200">
              Deeb, M. and Abu Saleh, N., (2019). <span className="font-semibold">Performance Evaluation of Learning Models in Comparison with Recommendation Systems by Studying Data Features</span>. Journal of Al-Baath University, 41(51), pp.11-52.
            </p>
            <a 
              href="https://www.researchgate.net/publication/337317888_Performance_Evaluation_of_Learning_Models_in_Comparison_with_Recommendation_Systems_by_Studying_Data_Features" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm mt-1 inline-block"
            >
              View Publication
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications; 