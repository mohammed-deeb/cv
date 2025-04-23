import React from "react";

const TechnicalCapabilities = () => {
  const skills = [
    { 
      category: "Data Science", 
      items: [
        "Data Cleaning and Integration",
        "Data Engineering",
        "Models Building",
        "FastAPI"
      ] 
    },

    { 
      category: "Software Development", 
      items: [
        "Java (Standard, Android, Serverless)",
        "Web (JavaScript)",
        "Python (GUI, Data Science, Web Scrapers)",
        "C# (Desktop, Web Apps)",
        "Microsoft VBA"
      ] 
    },
    { 
      category: "Research", 
      items: [
        "Scientific Papers Reviewer",
        "NLP",
        "Deep Learning",
        "Recommendation Systems"
      ] 
    },
    { 
      category: "Data Processing", 
      items: [
        "Apache Spark",
        "CUDA (TensorFlow, PyTorch)",
        "Python with Pandas",
        "NumPy",
        "Matplotlib"
      ] 
    },
    { 
      category: "Database", 
      items: [
        "Databricks",
        "PostgreSQL",
        "MySQL",
        "MS SQL Server",
        "SQLite"
      ] 
    },
    { 
      category: "Natural Languages", 
      items: [
        "Arabic (Native)",
        "English (Fluent)"
      ] 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Technical Capabilities</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-[#ffffffcf]">{skill.category}</h2>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalCapabilities; 