import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Farhana Buriro</h1>
        <p className="text-xl text-gray-600 mb-8">
          Data Analytics Enthusiast passionate about turning numbers into stories.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Python", "Pandas", "Excel", "Power BI", "Seaborn", "SQL", "Matplotlib", "NumPy"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">World Countries Data Analysis</h3>
              <p className="text-sm text-gray-600">
                Used Pandas, Seaborn, and Matplotlib to analyze global data (population, GDP, literacy).
              </p>
            </div>
            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">Sales Dashboard in Excel</h3>
              <p className="text-sm text-gray-600">
                Built a dynamic dashboard using pivot tables, slicers, and charts to visualize sales data.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center gap-6 text-xl text-blue-700">
            <a
              href="mailto:farhanamumtazadil038@gmail.com"
              className="hover:text-blue-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/farhana-buriro-454924363/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
