import Link from "next/link";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Odoo v17 Lectures",
      subtitle: "Teaching Project",
      date: "Nov 2024 – Feb 2025",
      description: [
        "Planned and delivered lectures on the Ecommerce Odoo subject for fifth-year students.",
        "Taught and supervised over 300 students' projects evaluating them based on functionality and structure."
      ],
      tools: ["Odoo v17", "PostgreSQL v17", "Python 3.11", "MS PowerPoint"],
      link: "/projects/project-1"
    },
    {
      title: "NeuMF-XT Recommendation System",
      subtitle: "Ph.D. Project",
      date: "Feb 2020 – Aug 2024",
      description: [
        "Developed the NeuMF-XT model achieving over 60% increase in the predictive performance of NeuMF model.",
        "Enabled NeuMF to handle all dataset features and integrated XGBoost with NeuMF models and deep neural structures as CNN and BiLSTM with Attention branches to leverage users' reviews textual data (NLP).",
        "Validated and tested on three datasets: Book Crossing, Amazon Gift Cards, and Shopify App Store after cleaning all the data.",
        "Models: NeuMF, GMF, Deep Learning (MLP, CNN, BiLSTM, Attention), XGBoost, and for text: Word2Vec, GloVe, FastText."
      ],
      tools: ["Google Collaboratory", "JupyterLab", "Python", "TensorFlow", "nltk", "emoji", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "/projects/project-2"
    },
    {
      title: "Amazon Books Scraper",
      subtitle: "Ph.D. Project",
      date: "Feb 2020 – Aug 2024",
      description: [
        "Designed and developed a scraper to fetch books information from OpenLibrary and Amazon via RapidAPI for data integrity.",
        "Enabled seamless continuation of data fetching, error tracking, and visualizing statistics through matplotlib charts.",
        "Utilized a CSV file of ISBNs as inputs to fetch from the web and stored the fetched data locally in SQLite database file."
      ],
      tools: ["Google Collaboratory", "VS Code", "PyQT5 Designer", "Python", "Request", "BeautifulSoup", "SQLite", "Pandas", "Matplotlib"],
      link: "/projects/project-3"
    },
    {
      title: "Machine Learning vs Collaborative Filtering in Recommendation Systems",
      subtitle: "Master Project",
      date: "Sep 2017 – May 2019",
      description: [
        "Conducted a comparative study between machine learning models and collaborative filtering for predicting users' ratings.",
        "Preprocessed and engineered new features for Book Crossing dataset to enhance model predictive performance.",
        "Fine-tuned machine learning models achieving over 20% improvement in predictive performance of collaborative filtering ones.",
        "Models: KNN, SVM, Random Forest, LightGBM, XGBoost, Stacking, Recommenders with UBCF, IBCF, MF-ALS, MF-SGD."
      ],
      tools: ["Google Collaboratory", "JupyterLab", "Python", "nltk", "Word2Vec", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "/projects/project-4"
    },
    {
      title: "Quality Assurance of the Self-Assessment Report of the Faculty of Medicine",
      subtitle: "Work Project",
      date: "Sep 2024 – Sep 2024",
      description: [
        "Improved and finished the final report by organizing and formatting the whole document of 200 pages.",
        "Automated over 10,000 hyperlinks using Google API Client Library with Python to generate and link over 300 PDF documents to the final reports as citations for codes created when labeling the PDF docs."
      ],
      tools: ["Python", "Google API Client Library", "Microsoft VBA"],
      link: "/projects/project-5"
    },
    {
      title: "Traffic Violations App",
      subtitle: "Android Project",
      date: "Jan 2022 – Feb 2022",
      description: [
        "Developed an app enabling users to login with their emails or google accounts and see all their paid/unpaid violation tickets.",
        "And the app allows administrator to register users and add tickets to the database."
      ],
      tools: ["Android Studio", "Java", "Volley", "PHP API", "MySQL"],
      link: "/projects/project-6"
    },
    {
      title: "Devices Manager App",
      subtitle: "Android Project",
      date: "Jul 2020 – Aug 2020",
      description: [
        "Developed an app that stores all information of an organization's electronic devices such as computers and printers and manage their maintenance status and schedule any needed updates and it shows full stat for the whole company or a specific office.",
        "Enabled database backup and recovery and taking pictures of the devices and their maintenance reports."
      ],
      tools: ["Android Studio", "Java", "SQLite"],
      link: "/projects/project-7"
    },
    {
      title: "File Browser & Text-Voice Chatting with Files Sharing via Bluetooth",
      subtitle: "Graduation Project",
      date: "Dec 2012 – Apr 2013",
      description: [
        "Designed and developed a J2ME application for Nokia phones that uses Bluetooth to transfer files of any size.",
        "And the app allows chatting via Bluetooth with text and voice, and hard-coded a file browser that allows viewing pictures, music, and videos with a media player coded from scratch (No third-parties in the whole project)."
      ],
      tools: ["Java", "NetBeans 7.1", "J2ME Nokia Series 40 6th Edition SDK"],
      link: "/projects/project-8"
    },
    {
      title: "Facebook-Like College Forum",
      subtitle: "Fourth-Year Semester Project",
      date: "Feb 2012 – May 2012",
      description: [
        "Built a website that allowed users to join and post articles and replay to comments.",
        "Developed a messaging system between users with hard-coded text editor."
      ],
      tools: ["HTML", "CSS", "jQuery", "PHP", "MySQL"],
      link: "/projects/project-9"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffffcf] mb-6">Projects</h1>
      <div className="bg-white dark:bg-[#191919] rounded-lg shadow-lg p-6">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{project.date}</p>
              </div>
              <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4">
              <Link
                href={project.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                  View Project Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 